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

## Security Tools
### Web
- [ ] https://github.com/andresriancho/w3af
- [ ] https://github.com/rabbots/sqlmap
- [ ] https://github.com/golismero/golismero
- [ ] https://github.com/jarthod/ssl-test
- [ ] https://github.com/nabla-c0d3/sslyze

### Docker
- [ ] https://github.com/docker/docker-bench-security
- [ ] https://github.com/coreos/clair/tree/master/contrib/analyze-local-images
- [ ] https://blog.mozilla.org/webqa/2016/05/11/docker-owasp-zap-part-one/

### Existing
- https://www.owasp.org/index.php/Category:Vulnerability_Scanning_Tools
- https://github.com/infoslack/awesome-web-hacking#docker-images-for-penetration-testing

### No Resale (Can't use)
- https://nodesecurity.io/
- https://github.com/wpscanteam/wpscan

- - -

## Expected
### alpha
- [ ] Core function for scan web and Docker should work by drag and drop. [issues](https://github.com/rabbots/eyes/issues?q=is%3Aopen+is%3Aissue+milestone%3Aalpha)

### beta
- [ ] UI should be more welcome for real user. [issues](https://github.com/rabbots/eyes/issues?q=is%3Aopen+is%3Aissue+milestone%3Abeta)
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

- - -

## Speed Tools
- [ ] https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed#try-it
- [ ] https://github.com/sitespeedio/coach
- [ ] https://github.com/GoogleChrome/lighthouse

## Usefuls
- DOM hack tools : https://github.com/APIs-guru/graphql-apis
- Web Performance Metrics : http://rigor.com/blog/2016/11/web-performance-metrics

### v2
- [ ] [Core] Dropped URL get scan with ...(TBD)
- [ ] [Core] Dropped `Docker` file get scan with ...(TBD)
- [ ] [Perf] ...(TBD)

- - -

## Usage
```bash
# to install the dependencies
$ npm install
# to bundle code and watch change
$ npm run dev
# to run on dev mode
$ npm start
```

To make bundled application:
```bash
$ npm run pack
```

