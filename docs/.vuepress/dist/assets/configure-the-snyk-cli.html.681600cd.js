import{r as c,o as a,c as r,b as o,a as t,w as s,F as d,d as e,e as h}from"./app.922d555a.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},_=o("h1",{id:"configure-the-snyk-cli",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#configure-the-snyk-cli","aria-hidden":"true"},"#"),e(" Configure the Snyk CLI")],-1),p=e("You can use "),f=e("environment variables"),y=e(" to configure the Snyk CLI. You can also set variables to configure the Snyk CLI to "),g=e("connect to the Snyk API"),m=e("."),k=o("h2",{id:"environment-variables",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#environment-variables","aria-hidden":"true"},"#"),e(" Environment variables")],-1),S=o("p",null,"You can set the following environment variables to change CLI settings.",-1),v=o("p",null,[o("code",null,"SNYK_TOKEN")],-1),I=e("Allows you to override the token that may be available in your Snyk configuration settings ("),T=o("code",null,"~/.config/configstore/snyk.json",-1),N=e("). Use "),Y=o("code",null,"SNYK_TOKEN",-1),b=e(" in a CI/CD environment. After setting "),w=o("code",null,"SNYK_TOKEN",-1),A=e(" you can "),C=e("get started"),x=e(" using the CLI.."),L=e("For information on how to get your account token see "),O=e("Authenticate the CLI with your account"),P=e(". You can also use a service account to authenticate; for more information see "),K=e("Service accounts"),R=e(". For additional information, see "),E=e("Authentication for third-party tools"),D=e("."),F=h('<p><code>SNYK_CFG_&lt;KEY&gt;</code></p><p>Allows you to override any key that is also available as a <code>snyk config</code> option.</p><p>For example, <code>SNYK_CFG_ORG=myorg</code> overrides the default org option in <code>config</code> with &quot;myorg&quot;.</p><p><code>SNYK_REGISTRY_USERNAME</code></p><p>For the container command, specify a username to use when connecting to a container registry. Note that using the <code>--username</code> flag overrides this value. This is ignored in favor of local Docker binary credentials when Docker is present.</p><p><code>SNYK_REGISTRY_PASSWORD</code></p><p>For the container command, specify a password to use when connecting to a container registry. Note that using the <code>--password</code> flag overrides this value. This is ignored in favor of local Docker binary credentials when Docker is present.</p><h2 id="configuration-to-connect-to-the-snyk-api" tabindex="-1"><a class="header-anchor" href="#configuration-to-connect-to-the-snyk-api" aria-hidden="true">#</a> Configuration to connect to the Snyk API</h2><p>By default the Snyk CLI connects to <code>https://snyk.io/api/v1</code>.</p><p><code>SNYK_API</code></p><p>Sets the API host to use for Snyk requests. Useful for on-premise instances or when using a proxy server. If set with the <code>http</code> protocol the CLI upgrades the requests to <code>https</code>, unless <code>SNYK_HTTP_PROTOCOL_UPGRADE</code> is set to <code>0</code>.</p><p><code>SNYK_HTTP_PROTOCOL_UPGRADE=0</code></p><p>If set to the value of <code>0</code>, API requests aimed at <code>http</code> URLs are not upgraded to <code>https</code>. If not set, the default behavior is to upgrade these requests from <code>http</code> to <code>https</code>. Useful, for example, for reverse proxies.</p><p><code>HTTPS_PROXY</code> and <code>HTTP_PROXY</code></p><p>Allows you to specify a proxy to use for <code>https</code> and <code>http</code> calls. The <code>https</code> in the <code>HTTPS_PROXY</code> means that <em>requests using <code>https</code> protocol</em> use this proxy. The proxy itself doesn&#39;t need to use <code>https</code>.</p><p><code>SNYK_DISABLE_ANALYTICS=1</code></p><p>Disables all Snyk CLI analytics.</p><p><code>SNYK_OAUTH_TOKEN=&lt;OAuth token&gt;</code></p><p>Specifies the OAuth token if required for verification.</p>',19),q=e("For more information see "),H={href:"https://support.snyk.io/hc/en-us/articles/360000925358-How-can-I-use-Snyk-behind-a-proxy-",target:"_blank",rel:"noopener noreferrer"},U=e("How can I use Snyk behind a proxy?");function G(B,V){const n=c("RouterLink"),i=c("ExternalLinkIcon");return a(),r(d,null,[_,o("p",null,[p,t(n,{to:"/snyk-cli/configure-the-snyk-cli.html#environment-variables"},{default:s(()=>[f]),_:1}),y,t(n,{to:"/snyk-cli/configure-the-snyk-cli.html#configuration-to-connect-to-the-snyk-api"},{default:s(()=>[g]),_:1}),m]),k,S,v,o("p",null,[I,T,N,Y,b,w,A,t(n,{to:"/snyk-cli/getting-started-with-the-cli/"},{default:s(()=>[C]),_:1}),x]),o("p",null,[L,t(n,{to:"/snyk-cli/authenticate-the-cli-with-your-account/"},{default:s(()=>[O]),_:1}),P,t(n,{to:"/features/integrations/managing-integrations/service-accounts.html"},{default:s(()=>[K]),_:1}),R,t(n,{to:"/features/user-and-group-management/authentication/authentication-for-third-party-tools.html"},{default:s(()=>[E]),_:1}),D]),F,o("p",null,[q,o("a",H,[U,t(i)])])],64)}var M=l(u,[["render",G]]);export{M as default};