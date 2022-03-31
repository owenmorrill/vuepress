import{r as s,o as n,c as i,b as t,a as c,w as d,F as r,e as h,d as e}from"./app.922d555a.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const l={},_=h('<h1 id="set-severity-thresholds-for-cli-tests" tabindex="-1"><a class="header-anchor" href="#set-severity-thresholds-for-cli-tests" aria-hidden="true">#</a> Set severity thresholds for CLI tests</h1><p>To improve control over your tests, you can use the <code>--severity-threshold</code> option for the <code>snyk test</code> command with one of the supported levels: <code>low|medium|high|critical</code>. With this option, only vulnerabilities of <strong>the specified level or higher</strong> are reported.</p><p><code>$ snyk test --severity-threshold=medium</code></p><p>{% hint style=&quot;info&quot; %} Setting <code>--severity-threshold</code> to <code>low</code> has the same effect as running the command without specifying the threshold; all vulnerabilities are reported. {% endhint %}</p>',4),m=e("Note: The "),u=t("code",null,"--severity-threshold",-1),p=e(" option is available with the "),f=t("code",null,"snyk test",-1),y=e(", "),v=t("code",null,"snyk monitor",-1),k=e(", "),g=t("code",null,"snyk code",-1),w=e(", "),x=t("code",null,"snyk container",-1),b=e(", and "),C=t("code",null,"snyk iac",-1),N=e(" commands. See the "),S=e("CLI commands help"),T=e(" pages for each command for details.");function L(V,B){const o=s("RouterLink");return n(),i(r,null,[_,t("p",null,[m,u,p,f,y,v,k,g,w,x,b,C,N,c(o,{to:"/commands/"},{default:d(()=>[S]),_:1}),T])],64)}var I=a(l,[["render",L]]);export{I as default};