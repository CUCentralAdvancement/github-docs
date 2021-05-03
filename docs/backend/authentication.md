[<-- Home](/readme.md)

# Authentication

So far there are two kinds of authentication methods used for DE applications: Auth0 and
Ping SAML SSO. Auth0 is used for applications internal to DE and Ping SAML SSO for apps
including other CU staff.

At some point in the future, non-CU users may be added to the application stack, however
Auth0 can probably help with adding social logins in this case. Until that happens, all
authentication is assumed to only involve CU staff.

## Auth0

Auth0 is the lower security, lower importance method of providing authentication. Any app
connected to Auth0 will be hosted on Herkou, where Auth0 is a service partner.

You can find more documentation on Auth0 within the Heroku docs repo: 
https://github.com/CUCentralAdvancement/heroku-docs/blob/master/docs/platform/auth0.md

## Ping SAML SSO

Ping SSO via SAML is the current authentication method used for the Drupal 7 Giving site,
but the new CMS will start out with Auth0 for user authentication. Salesforce, WorkFront,
GitHub, and more applications will switch to use SAML over time.

Ping SSO might supercede Auth0 for all CU-staff user management in the future, but right
now Ping SSO is by far the harder authentication mechanism to set up. Most services and 
frameworks have integrations with SAML, and even Auth0 provides SAML integration for a
fee.

No documentation for SAML integration will exist until application feature development
warrants it.
