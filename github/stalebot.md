# Stalebot

Stale bot helps to keep the issue queues clean. After 60 days, all inactive issues will be marked for closure unless you add
one of the following labels:

- **"pinned"** - A pinned issue is one that is important to remain open but that will potentially take longer 
than two months to work on. These issues should be few and far between. Pinned labels should never be put on
issues upon creation.
- **"security"** - Security issues need updates quickly, but I suppose it's possible that one might not be able
to move to production that fast. Security labels should be put on issues upon creation.

## Configuration

Each repo needs to be activated for Stale bot use. This requires adding the repo in a GitHub admin section, a YAML file, and some labels.

### Repo Permissions

To add or remove repos from Stale bot usage, go to https://github.com/organizations/CUCentralAdvancement/settings/installations, 
"Configure" Stale, and add/remove from dropdown repo select menu. 

### YAML File

Add this YAML file at: `.github/stale.yml`

```yaml
# Number of days of inactivity before an issue becomes stale
daysUntilStale: 60
# Number of days of inactivity before a stale issue is closed
daysUntilClose: 7
# Issues with these labels will never be considered stale
exemptLabels:
  - pinned
  - security
# Label to use when marking an issue as stale
staleLabel: stale
# Comment to post when marking an issue as stale. Set to `false` to disable
markComment: >
  Since y'all haven't touched me in 60 days, I feel unwanted and will
  close up shop after 7 more days. If you want to keep me alive, add the
  "pinned" or "security" labels...but don't be cruel. More info found at
  
# Comment to post when closing a stale issue. Set to `false` to disable
closeComment: false
```

### Issue Labels

For this to work, you also need to make sure "security" and "pinned" labels are available in each repo...Look to GitHub's docs if
you don't know how to do it: https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/managing-labels.
