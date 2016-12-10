# eyes
Out of the box web app/docker security scan tool.

![](https://raw.githubusercontent.com/rabbots/eyes-art/master/icons/eyes-256x256.png)

## Structure
![](https://raw.githubusercontent.com/rabbots/eyes-art/master/raw/rabbot-eyes-structure.png)

## Links [ref](https://github.com/rabbots?utf8=%E2%9C%93&q=eyes&type=&language=)
- Design : https://github.com/rabbots/eyes-art
- App : https://github.com/rabbots/eyes-app
- Core : https://github.com/rabbots/eyes-core

## Inspire
- App : https://github.com/zeit/now-app
- CLI : https://github.com/zeit/now-cli
- Core : https://github.com/bearded-web/images

- - -

## Expected
### alpha
- Core function for scan web and Docker should work by drag and drop. [issues](https://github.com/rabbots/eyes/issues?q=is%3Aopen+is%3Aissue+milestone%3Aalpha)

### beta
- UI should be more welcome for real user. [issues](https://github.com/rabbots/eyes/issues?q=is%3Aopen+is%3Aissue+milestone%3Abeta)
- [ ] [UI] User can see scan progress at icon in task bar.
- [ ] [UI] User get notify as popup with scan results as HTML.
- [ ] [UI] User can choose to `save`, `close` poppup.
- [ ] [Core] App can `save` HTML results to disk or `close` poppup.
- [ ] [Menu] `Quit` : User can quit app gracefully.
- [ ] [Menu] `Pause` : User can pause scan progress.
- [ ] [Menu] `Cancel` : User can cancel scan progress.
- [ ] [Menu] `About` : User can see app name and version with website link button.
- [ ] [Menu] `Web Tools` : User can select default tools.
- [ ] [Menu] `Docker Tools` : User can select default tools.

### rc1
- [ ] [Core] Dropped URL get scan with ...(TBD)
- [ ] [Core] Dropped `Docker` file get scan with ...(TBD)
- [ ] [Core] App can check for update.
- [ ] [Menu] `Check for update` : User can click and see update check result.
- [ ] [Core] User can see concurrently progress at icon in task bar.

### rc2
- [ ] [Backend] JSON,HTML results get upload to server (Use firebase for no write downtime) : https://firebase.google.com/docs/reference/rest/database/
- [ ] [Backend] Results get fetch to server and process then remove from firebase after it done.
- [ ] [Backend] Admin can see results listed in dashboard
- [ ] [Backend] Admin can display each html result.

### rc3
- [ ] [Menu] User can subscribe with email per url.
- [ ] [Backend] Subscribers collections get upsert after user mutate email and url.
- [ ] [Backend] User can paid for more both email and url subscriptions. (paypal, omise)
- [ ] [Backend] Admin can see subscriptions list : https://github.com/graphcool-examples/react-apollo-todo-example
- [ ] [Backend] Admin can set cron job : https://github.com/graphcool-examples/webtask-mailgun-email-example
- [ ] [Backend] Emails collections state get update as `will_send`.
- [ ] [Backend] Subscribers receive email from cron job : https://webtask.io/docs/cron
- [ ] [Backend] Emails collections state get update as `sent`.
- [ ] [UI] Subscribers can open email.
- [ ] [Backend] Emails collections state get update as `opened`.

### rc4
- [ ] [Menu] User can unsubscribe from each subscribed list.
- [ ] [UX] User get warn dialog before unsubscribe.

### v1
- [ ] Free trial. ...(TBD)
- [ ] Scan on server. ...(TBD)

### v2
- [ ] [Core] Dropped URL get scan with ...(TBD)
- [ ] [Core] Dropped `Docker` file get scan with ...(TBD)
- [ ] [Perf] ...(TBD)
