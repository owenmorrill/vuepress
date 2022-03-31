import{r as s,o as r,c as i,b as e,a as n,F as d,d as t,e as a}from"./app.922d555a.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const l={},h=e("h1",{id:"ignore-vulnerabilities-using-snyk-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ignore-vulnerabilities-using-snyk-cli","aria-hidden":"true"},"#"),t(" Ignore vulnerabilities using Snyk CLI")],-1),p=t('{% hint style="info" %} For '),_={href:"https://docs.snyk.io/snyk-open-source",target:"_blank",rel:"noopener noreferrer"},u=t("Snyk Open Source, "),y=t("these options work by default."),g=e("br",null,null,-1),k=t(" For "),f={href:"https://docs.snyk.io/snyk-container",target:"_blank",rel:"noopener noreferrer"},m=t("Snyk Container"),b=t(", these options also work, but after registering an ignore, when you call "),I=e("code",null,"snyk test",-1),S=t(" or "),x=e("code",null,"snyk monitor",-1),E=t(", you must use the "),N=e("code",null,"--policy-path=",-1),v=t(" option, for example: "),O=e("code",null,"snyk container test node --policy-path=.snyk.",-1),F=e("br",null,null,-1),C=t(" For "),T={href:"https://support.snyk.io/hc/en-us/categories/360001342678-Infrastructure-as-code",target:"_blank",rel:"noopener noreferrer"},P=t("Snyk Infrastructure as Code"),w=t(", see "),L={href:"https://docs.snyk.io/snyk-infrastructure-as-code/snyk-cli-for-infrastructure-as-code/iac-ignores-using-the-.snyk-policy-file",target:"_blank",rel:"noopener noreferrer"},Y=t("IaC ignores using the snyk policy file"),D=t("."),R=e("br",null,null,-1),A=t(" For "),U={href:"https://docs.snyk.io/snyk-code",target:"_blank",rel:"noopener noreferrer"},V=t("Snyk Code"),B=t(", these options are not yet implemented. {% endhint %}"),H=a('<p>Sometimes, Snyk alerts you to a vulnerability that has no update or Snyk patch available, or that you do not believe to be currently exploitable in your application. When this happens you may want to tell Snyk to ignore the vulnerability for a certain period of time.</p><p>You can ignore a specific vulnerability in a project using the <code>snyk ignore</code> command.</p><p><code>snyk ignore --id=&lt;ISSUE_ID&gt; [--expiry=&lt;EXPIRY&gt;] [--reason=&lt;REASON&gt;] [--policy-path=&lt;PATH_TO_POLICY_FILE&gt;] [&lt;OPTIONS&gt;]</code></p><p>The <code>snyk ignore</code> command supports the following options:</p><table><thead><tr><th><strong>OPTION</strong></th><th><strong>DESCRIPTION</strong></th><th><strong>DEFAULT</strong></th><th><strong>REQUIRED</strong></th></tr></thead><tbody><tr><td><code>--id</code></td><td><p>The Snyk ID for the issue to ignore. Found by running <code>snyk test</code> and grabbing the last segment of the URL for a given vulnerability.</p><p><strong>Example:</strong> For the vulnerability found at <a href="https://snyk.io/vuln/npm:tough-cookie:20160722">https://snyk.io/vuln/npm:tough-cookie:20160722</a>, the Snyk ID is:</p><p><code>--id=npm:tough-cookie:20160722</code></p></td><td>None</td><td>Yes</td></tr><tr><td><code>--expiry</code></td><td><p>Expiry date in YYYY-MM-DD format (<a href="https://tools.ietf.org/html/rfc2822#page-14">RFC2822</a> and <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> are supported).</p><p>Example: <code>--expiry=2017-04-30</code>.</p></td><td>30 days</td><td>No</td></tr><tr><td><code>--reason</code></td><td>Human-readable &lt;REASON&gt; to ignore this issue. Example: <code>reason=&#39;Not currently exploitable&#39;</code>.</td><td>None</td><td>No</td></tr><tr><td><code>--policy-path=&lt;PATH_TO_POLICY_FILE&gt;</code></td><td>Path to a .snyk policy file to pass manually.</td><td>None</td><td>No</td></tr><tr><td><code>--path</code></td><td>Path to resource for which to ignore the issue. Example: <code>path=&#39;tough-cookie@2.15.8&#39;</code></td><td>All</td><td>No</td></tr></tbody></table>',5);function M(j,Q){const o=s("ExternalLinkIcon");return r(),i(d,null,[h,e("p",null,[p,e("a",_,[u,n(o)]),y,g,k,e("a",f,[m,n(o)]),b,I,S,x,E,N,v,O,F,C,e("a",T,[P,n(o)]),w,e("a",L,[Y,n(o)]),D,R,A,e("a",U,[V,n(o)]),B]),H],64)}var q=c(l,[["render",M]]);export{q as default};