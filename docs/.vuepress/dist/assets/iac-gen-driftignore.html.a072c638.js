import{r,o as s,c as d,b as e,a,F as i,e as o,d as n}from"./app.922d555a.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const h={},u=o('<h1 id="iac-gen-driftignore" tabindex="-1"><a class="header-anchor" href="#iac-gen-driftignore" aria-hidden="true">#</a> IAC gen-driftignore</h1><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p><code>snyk iac gen-driftignore [&lt;OPTIONS&gt;]</code></p><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The <code>snyk iac gen-driftignore</code> command generates driftignore rules to be used by <code>snyk iac test</code>.</p>',5),l=n("See also the help for "),p={href:"https://docs.snyk.io/snyk-cli/commands/iac-test",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"iac test",-1),_=n(" and "),f={href:"https://docs.snyk.io/snyk-cli/commands/iac-describe",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"iac describe",-1),m=n("``"),b=n("For more information see "),k={href:"https://docs.snyk.io/products/snyk-infrastructure-as-code/detect-drift-and-manually-created-resources/ignore-resources",target:"_blank",rel:"noopener noreferrer"},y=n("Ignore resources"),v=n("."),I=e("h2",{id:"exit-codes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exit-codes","aria-hidden":"true"},"#"),n(" Exit codes")],-1),E=e("p",null,"Possible exit codes and their meaning:",-1),S=e("p",null,[e("strong",null,"0"),n(": success, driftignore generated successfully"),e("br"),e("strong",null,"1"),n(": error, something wrong happened during ignore file generation")],-1),C=e("h2",{id:"configure-the-snyk-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configure-the-snyk-cli","aria-hidden":"true"},"#"),n(" Configure the Snyk CLI")],-1),L=n("You can use environment variables to configure the Snyk CLI and also set variables to configure the Snyk CLI to connect with the Snyk API. See "),N={href:"https://docs.snyk.io/snyk-cli/configure-the-snyk-cli",target:"_blank",rel:"noopener noreferrer"},O=n("Configure the Snyk CLI"),T=n("."),w=o(`<h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> Debug</h2><p>Use the <code>-d</code> option to output the debug logs.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> <code>--input</code></h3><p>Input from which the JSON should be parsed.</p><p>Default: stdin</p><p>Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ snyk iac gen-driftignore --input=output.json --output=/dev/stdout
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="output-output-file-path" tabindex="-1"><a class="header-anchor" href="#output-output-file-path" aria-hidden="true">#</a> <code>--output=&lt;OUTPUT_FILE_PATH&gt;</code></h3><p>Output file path to which to write the driftignore.</p><p>Default: <code>.driftignore</code></p><p>Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ snyk iac describe --output=json://output.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="exclude-changed" tabindex="-1"><a class="header-anchor" href="#exclude-changed" aria-hidden="true">#</a> <code>--exclude-changed</code></h3><p>Exclude resources that changed on cloud provider.</p><h3 id="exclude-missing" tabindex="-1"><a class="header-anchor" href="#exclude-missing" aria-hidden="true">#</a> <code>--exclude-missing</code></h3><p>Exclude missing resources.</p><h3 id="exclude-unmanaged" tabindex="-1"><a class="header-anchor" href="#exclude-unmanaged" aria-hidden="true">#</a> <code>--exclude-unmanaged</code></h3><p>Exclude resources not managed by IaC.</p>`,19);function D(P,F){const t=r("ExternalLinkIcon");return s(),d(i,null,[u,e("p",null,[l,e("a",p,[g,a(t)]),_,e("a",f,[x,a(t)]),m]),e("p",null,[b,e("a",k,[y,a(t)]),v]),I,E,S,C,e("p",null,[L,e("a",N,[O,a(t)]),T]),w],64)}var j=c(h,[["render",D]]);export{j as default};