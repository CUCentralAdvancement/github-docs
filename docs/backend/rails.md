# Ruby on Rails

Intro paragraph and such...

## Project Templates

Rails has great support for generators and therefore project creation templates. Several templates have been tested out,
and two in particluar are helpful for building out a DE starter template.

- railsnew.io - This site provides a nice GUI for common Rails configurations and gems. The chosen template adds Stimulus,
  Tailwind CSS, and Rspec, all of which aren't included in default Rails.
- jumpstart - This template is maintained by a no-nonsense person, and so you can gather a lot just from the `template.rb`
  file. It includes a lot of common gems that will be good to include in DE templates.
  
The following sections will go over how to create different types of projects using templates. As time goes on, the manual 
steps will be assimilated into an automated script.

## Project Generation: CMS

Use the railsnew.io template to start.

```
rails new my_app -d postgresql --skip-test --template https://www.railsbytes.com/script/Xo5s9m
```

### Tailwind Serup

To setup Tailwind CSS you need to install the additional forms dependency first.

```bash
yarn add @tailwindcss/forms
```

```js
// app/javascript/stylesheets/tailwind.config.js
module.exports = {
  purge: [
    './app/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#CFB87C',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
}
```

The default theme object and variants will grow as time progresses.

### Database Creation

After template installation, you will have a working Rails app with Stimulus and Taliwnd CSS integration. To boot the Rails
server as-is you'll need to add some database configuration and create the databases.

```
# Gemfile at the top...
gem "dotenv-rails", "~> 2.7", groups: [:development, :test]

# In terminal...
touch .env
echo ".env" >> .gitignore
```

You'll first need to add the `dotenv-rails` for Rails to load config values from your `.env` file in development and test
environments. In production on Heroku, the `ENV['vars']` will already be loaded, and so the dotenv gem should not be loaded
in that environment.

As always, make sute not to commit your `.env` file. In the future, you will `cp .env.example .env` once there are example
env vars to standardize on.

```yaml
# /config/database.yml

default: &default
  adapter: postgresql
  encoding: unicode
  # For details on connection pooling, see Rails configuration guide
  # https://guides.rubyonrails.org/configuring.html#database-pooling
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  
  # Defaults for dev and test.
  username: postgres
  password: postgres
  host: 127.0.0.1
  port: 5432
```

Then, you'll need to modify the database config file. In the `default` block, you can group dev and test db credentials together.
The production instance will read `ENV['DATABASE_URL']` that Heroku sets by default for the Postgres addons.

```yaml
# docker-compose.yml
version: '3.9'

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - '5432:5432'

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

You'll then need to create a `docker-compose.yml` file to load a Postgres container. Adminer is thrown in to inspect the Postgres
database, but you can leave that out if not desired.

```bash
# Spin up containers.
docker-compose up -d

# Create databases.
rake db:create

# Run migrations
rake db:migrate

# You would seed the database...if you had a seed.
# rake db:seed

# Start the server.
./bin/rails s

# Start webpack in another tab. This watches and compiles Stimulus/JS files.
# It should watch .html.erb files too, but not yet...
./bin/webpack-dev-server
```

You can then run a series of commands to start the webserver. 

### Authentication/Authorization

Now that the site boots, the next concern is to create users and authentication/authoirzation rules. 

In the future, there will be more categories, but for now we are only describing providing user management for apps where
only DE staff login via Auth0.

```bash
bundle add omniauth-auth0
bundle add omniauth-rails_csrf_protection
```

You add the Auth0 dependencies via `bundle add` vs. sticking them in the `Gemfile` so that versions are added. On the web,
a lot of examples have you add the gems without versions, but that can lead to issues between builds and dependency version
conflicts.

```ruby
# /config/initializers/auth0.rb
Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :auth0,
    ENV['AUTH0_CLIENT_ID'],
    ENV['AUTH0_CLIENT_SECRET'],
    ENV['AUTH0_DOMAIN'],
    callback_path: '/auth/auth0/callback',
    authorize_params: {
      scope: 'openid profile'
    }
  )
end
```

Adding the initializer config for Auth0 will load it as an OmniAuth resource for when users click to login and logout from the 
application.

```ruby
# /app/controller/auth0_controller.rb
class Auth0Controller < ApplicationController
  def callback
    # OmniAuth stores the information returned from Auth0 and the IdP in request.env['omniauth.auth'].
    # In this code, you will pull the raw_info supplied from the id_token and assign it to the session.
    # Refer to https://github.com/auth0/omniauth-auth0#authentication-hash for complete information on 'omniauth.auth' contents.
    auth_info = request.env['omniauth.auth']
    session[:user] = auth_info

    # Redirect to the dashboard after successful auth.
    redirect_to '/dashboard'
  end

  def failure
    # Handles failed authentication -- Show a failure page (you can also handle with a redirect)
    @error_msg = request.params['message']
  end

  def logout
    reset_session
    redirect_to logout_url
  end

  def logout_url
    request_params = {
      returnTo: root_url,
      client_id: ENV['AUTH0_CLIENT_ID']
    }

    URI::HTTPS.build(host: ENV['AUTH0_DOMAIN'], path: '/v2/logout', query: to_query(request_params)).to_s
  end

  def to_query(hash)
    hash.map { |k, v| "#{k}=#{CGI.escape(v)}" unless v.nil? }.reject(&:nil?).join('&')
  end
end
```

Now, we need to create a controller to handle the OmniAuth endpoints as well as communicate with Auth0. It basically 
boils down to a callback/create session and a logout/destroy session as well as a way to handle failures.

```ruby
Rails.application.routes.draw do
  # ...other routes...

  # Auth0 routes.
  get '/auth/auth0/callback' => 'auth0#callback'
  get '/auth/failure' => 'auth0#failure'
  get '/auth/logout' => 'auth0#logout'
```

To allow users to reach the Auth0 controller we have to add three routes to the  `/config/routes.rb` file.

```ruby
# /app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  def current_user
    @current_user ||= session[:user]
    
    # In the future, the user will exist in the db and be linked via email.
    # @current_user ||= User.find_by(email: session[:user]['info']['email'])
  end
  helper_method :current_user

  def user_signed_in?
    @current_user.present? ? true : false
  end
  helper_method :user_signed_in?

  private

  def authenticate_user!
    return if user_signed_in?

    redirect_to root_path, alert: "You must be signed in to continue."
  end
end
```

To actually see if a user is authenticated or not, we can use these helper methods and pull user data out
of the session. In the future, there will be a `User` model that has more detailed attributes and provide
a way to relate other models to individual users.

```erb
# ...in some Header partial...
<% if user_signed_in? %>
  <a href="/dashboard">
    <%= image_tag(session[:user]['info']['image'], alt: 'Profile Pic', class: "mr-2 h-12 rounded-full")%>
  </a>
  <%= button_to 'Log Out', '/auth/logout', method: :get, class: "p-2 text-white rounded bg-gold" %>
<% else %>
  <%= button_to 'Login', '/auth/auth0', method: :post, class: "p-2 text-white rounded bg-gold" %>
<% end %>
```

And that's how you can use the signed in helper method in views along with links/buttons to log in and out of the CMS.

```ruby
# /app/controllers/dashboard_controller.rb
class DashboardController < ApplicationController
  before_action :authenticate_user!
  
  def show
    @user = session[:user]
    @role = ENV['ADMIN_EMAILS'].include?(@user['info']['name']) ? 'Admin' : 'Authenticated User' 
  end
end
```

The user instance variable should come from a helper...but you can also sloppily include it in your views this way as well.

Just the same, role information will be moved to a helper, but it is controlled via environmental variables. This allows
for a binary role system in addition to the "Anonymous User" role.
