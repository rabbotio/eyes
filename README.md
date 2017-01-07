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

![rabbot-eyes-co2](https://cloud.githubusercontent.com/assets/97060/21742576/54db255a-d524-11e6-94f1-26fd737a1412.png)

- - -

## Expected

### 0.1.0 POC
- [ ] [Frontend] Ensure SSR, OfflieFirst, PWA.
- [ ] [Backend] Prepare server for `Docker`, `Parse`, `Eyes`.
- [ ] [Core] Engine can scan 5 tools.

### 0.2.0 Secure Stack
- [ ] [Frontend] Web pass eyes test.
- [ ] [Backend] `Docker` pass eyes test.
- [ ] [Core] `Docker` pass docker-bench test.

### 0.3.0
- [ ] TBD

### 0.4.0 Store
- [ ] [Frontend] User can input link for scan.
- [ ] [Frontend] Link save to `Firebase`. https://firebase.google.com/docs/reference/rest/database/
- [ ] [Frontend] User can input email for subscribe scan results.
- [ ] [Backend] User email and link get sync to `Parse` https://medium.com/@katopz/meteor-firebase-f9a62af5ef92
- [ ] [Backend] Subscribers collections get upsert after user mutate email and url.
- [ ] [Backend] `Firebase` state update to `wait` after sync.
- [ ] [Core] Can consume link from `Parse`.

### 0.5.0 Scan/Security
- [ ] [Backend] Admin can set cron job for scan interval.
- [ ] [Core] Engine scan link for security and output result upsert to database via `Parse`.
- [ ] [Backend] Emails collections state get update as `will_send`, update `commitAt`.
- [ ] [Backend] Admin can see results listed in dashboard
- [ ] [Backend] Admin can see each html result.

### 0.6.0 Scan/Speed
- [ ] [Core] Engine scan link for speed and output result upsert to database via `Parse`.

### 0.7.0 Send
- [ ] [Backend] Admin can set cron job for email results interval.
- [ ] [Backend] Emails collections state get update as `sent`, update `sentAt`.

### 0.8.0 Stats
- [ ] [Backend] Admin can see email sent results. (MailGun)

### 0.9.0 Opt out
- [ ] [Frontend] User can unsubscribe from each subscribed list.
- [ ] [Frontend] User get warn dialog before unsubscribe.

### 1.0.0 Prestashop
- [ ] [Frontend] Prestashop plugin ready

### 2.0.0 Web user
- [ ] [Backend] User can paid for more both email and url subscriptions. (paypal, omise)
- [ ] [Backend] Admin can see subscriptions list : https://github.com/graphcool-examples/react-apollo-todo-example
- [ ] [Backend] Emails collections state get update as `opened`.

### 3.0.0
- [ ] Free trial. ...(TBD)
