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
- Core (Docker) : https://github.com/bearded-web/images
- Core (perl) : https://github.com/schubergphilis/Seccubus_v2/tree/master/scanners

- - -

## Security Tools
### Docker Ready
> Deprecated, too much timeout and error.
- [ ] ~~https://github.com/bearded-web/images~~
- [ ] ~~https://github.com/mozilla/tls-observatory~~
- [ ] ~~https://github.com/kost/docker-webscan/blob/master/alpine-nikto-git/Dockerfile~~
- [ ] ~~https://github.com/pebble/golismero-suite~~

### Web
- [ ] https://github.com/andresriancho/w3af
- [ ] https://github.com/golismero/golismero
- [ ] https://github.com/sullo/nikto
- [ ] https://github.com/rabbots/sqlmap
- [x] [Mozilla HTTP Observatory](https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md)

### SSL
- [ ] ~~https://github.com/jarthod/ssl-test~~
- [ ] ~~https://github.com/nabla-c0d3/sslyze~~
- [x] [Mozilla TLS Observatory](https://github.com/mozilla/tls-observatory)

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
- https://github.com/jumanjihouse/docker-ssllabs-scan
- https://github.com/ssllabs/ssllabs-scan
- https://github.com/Arachni/arachni

- - -

## Speed Tools
- [ ] https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed#try-it
- [ ] https://github.com/sitespeedio/coach
- [ ] https://github.com/GoogleChrome/lighthouse
- [ ] https://github.com/dequelabs/axe-core

## Usefuls
- DOM hack tools : https://github.com/APIs-guru/graphql-apis
- Web Performance Metrics : http://rigor.com/blog/2016/11/web-performance-metrics

- - -

![rabbot-eyes-co3](https://cloud.githubusercontent.com/assets/97060/22155626/ae647520-df62-11e6-8a8e-1e52bf025bf8.png)

- - -

# Raw

## Config
```shell
export HOST=rabbot.io
export HIDDEN=true
export RESCAN=false
```
---
## [Mozilla HTTP Observatory](https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/api.md)
### Scan
```
curl --data "hidden=$HIDDEN&rescan=$RESCAN" \
  https://http-observatory.security.mozilla.org/api/v1/analyze?host=$HOST 2>/dev/null \
  | jq "{ state: .state, id: .scan_id}"
```
### Expect
```json
{
  "state": "FINISHED",
  "id": 3181931
}
```
### Result to file
```
curl https://http-observatory.security.mozilla.org/api/v1/getScanResults?scan=3181931 2>/dev/null | jq . | cat >> ./raw/http-results.json
```
---
## [Mozilla TLS Observatory](https://github.com/mozilla/tls-observatory)
### Scan
```shell
curl --data "target=$HOST&rescan=$RESCAN" https://tls-observatory.services.mozilla.com/api/v1/scan
```
### Expect
```json
{"scan_id":13590807}
```
### Result to file
```
curl https://tls-observatory.services.mozilla.com/api/v1/results?id=13590807 2>/dev/null | jq . | cat >> ./raw/tls-results.json
```

## Expected

### 0.3.0 Store
- [ ] [Frontend] User can input link for scan.
- [ ] [Frontend] Link save to `Firebase`. https://firebase.google.com/docs/reference/rest/database/
- [ ] [Frontend] User can input email for subscribe scan results.

### 0.4.0 Store
- [ ] [Backend] User email and link get sync to `Firebase` by webtask. https://github.com/bennythejudge/webtask-firebase
- [ ] [Backend] Subscribers collections at `Firebase` get upsert after user mutate email and url.
- [ ] [Backend] When subscribe task's `state` is `queued` , update `queuedAt`.
- [ ] [Core] Can consume link from `Firebase`.

### 0.5.0 Scan/Security
- [ ] [Core] Engine scan link for security and output result upsert to database via `Firebase`.
- [ ] [Backend] When `scan` task's `state` is `scan`, update `scanAt`.
- [ ] [Backend] When `succeed` task's `state` is `scanned`, update `scannedAt`.
- [ ] [Backend] When `failed` task's `state` is `queued` , update `queuedAt`.
- [ ] [Backend] When `failed` task's `retry` is incresing once, update `retryAt`.

### 0.5.5 Admin
- [ ] [Backend] Admin can see results listed in dashboard
- [ ] [Backend] Admin can see each html result.

### 0.6.0 Scan/Speed
- [ ] [Core] Engine scan link for speed and output result upsert to database via `Firebase`.

### 0.7.0 Send
- [ ] [Backend] [Webtask send email via MailGun](https://github.com/graphcool-examples/webtask-mailgun-email-example).
- [ ] [Backend] Task's `state` is `sent`, update `sentAt`.

### 0.8.0 Stats
- [ ] [Backend] Admin has to login to dashboard. (Firebase)
- [ ] [Backend] Admin can see email scan task info. (Firebase)
- [ ] [Backend] Admin can see email scaned results. (Firebase)
- [ ] [Backend] Admin can see email sent/unsent results. (Firebase)
- [ ] [Backend] Admin can see email stats. (MailGun)

### 0.9.0 Opt out
- [ ] [Frontend] User can unsubscribe from each subscription's list.
- [ ] [Frontend] User get warn dialog before unsubscribe.

### 1.0.0 Prestashop
- [ ] [Frontend] Prestashop plugin ready

### 2.0.0 Web user
- [ ] [Backend] User can paid for more both email and url subscriptions. (paypal, omise)
- [ ] [Backend] Admin can see subscriptions list : https://github.com/graphcool-examples/react-apollo-todo-example
- [ ] [Backend] Emails collections state get update as `opened`.

### 3.0.0
- [ ] Free trial. ...(TBD)
