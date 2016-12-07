# eyes
Out of the box web app/docker security scan tool.

![](art/rabbot-eye-of-re.png)

## Inspire
- [ ] https://github.com/zeit/now-app

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

### No Resale
- https://nodesecurity.io/

- - -

## Expected
### alpha
- [ ] [UI] User can drag and drop link to app icon.
- [ ] [Core] App can recognize dropped item type as `web` or `Docker` file.
- [ ] [Core] Dropped URL get scan with selected `web` related tools (from 2).
- [ ] [Core] Dropped `Docker` file get scan with selected `Docker` related tools (from 2).
- [ ] [Core] App can save JSON,HTML results to disk.

### beta
- [ ] [UI] User can see progress at icon in task bar.
- [ ] [UI] User get notify as popup with scan results as HTML.
- [ ] [UI] User can choose to `save`, `close` poppup.
- [ ] [Core] App can `save` HTML results to disk or `close` poppup.
- [ ] [Menu] `Quit` : User can quit app gracefully.
- [ ] [Menu] `Pause` : User can pause scan progress.
- [ ] [Menu] `Cancel` : User can cancel scan progress.
- [ ] [Menu] `About` : User can see app name and version.
- [ ] [Menu] `Tools` : User can toggle 2 tools.

### rc1
- [ ] [Core] Dropped URL get scan with ...(TBD)
- [ ] [Core] Dropped `Docker` file get scan with ...(TBD)
- [ ] [Core] App can scan concurrently.
- [ ] [Core] User can see concurrently progress at icon in task bar.

### rc2
- [ ] [Backend] JSON,HTML results get upload to server : https://graph.cool/
- [ ] [Backend] Admin can see results listed in dashboard : https://github.com/graphcool-examples/react-apollo-todo-example
- [ ] [Backend] Admin can display each html result.

### rc3
- [ ] [Menu] User can subscribe with email per url.
- [ ] [Backend] Subscribers colletions get upsert after user mutatate email and url.
- [ ] [Backend] User can paid for more both email and url subscriptions. (paypal, omise)
- [ ] [Backend] Admin can see subscriptions list : https://github.com/graphcool-examples/react-apollo-todo-example
- [ ] [Backend] Admin can set cron job via : https://github.com/graphcool-examples/webtask-mailgun-email-example
- [ ] [Backend] Emails colletions state get update as `will_send`.
- [ ] [Backend] Subscribers recieve email from cron job.
- [ ] [Backend] Emails colletions state get update as `sent`.
- [ ] [UI] Subscribers can open email.
- [ ] [Backend] Emails colletions state get update as `opened`.

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

