import{r as o,o as l,c,b as n,a as s,w as r,F as d,e as a,d as e}from"./app.922d555a.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const h={},u=a('<h1 id="the-snyk-file" tabindex="-1"><a class="header-anchor" href="#the-snyk-file" aria-hidden="true">#</a> The .snyk file</h1><p>The <code>.snyk</code> file is a policy file that Snyk uses to define certain analysis behaviors and to specify patches for the CLI and CI/CD plugins.</p><p>The file can be generated in a number of ways and can be used in a number of different scenarios. The <code>.snyk</code> file is generally located at the root of your project.</p><p>This page provides detailed information about the contents and use of the <code>.snyk</code> file as well as about creating the file.</p><p>The following video provides an introduction to the <code>.snyk</code> file.</p><p>{% embed url=&quot;https://youtu.be/QSIBt-hQ0Xo&quot; %}</p><h2 id="capabilities-and-behaviors" tabindex="-1"><a class="header-anchor" href="#capabilities-and-behaviors" aria-hidden="true">#</a> Capabilities and behaviors</h2>',7),g=e("The "),y=n("code",null,".snyk",-1),b=e(" policy file in a project is used to apply ignores and other settings for the "),m=n("code",null,"snyk test",-1),f=e(" and "),k=n("code",null,"snyk monitor",-1),_=e(" commands, the "),v=n("code",null,"@snyk/protect",-1),x=e(),w={href:"https://github.com/snyk/snyk/tree/master/packages/snyk-protect",target:"_blank",rel:"noopener noreferrer"},S=e("package"),I=e(" (replaced the "),T=n("code",null,"snyk protect",-1),C=e(" command), and any tests done through the API or website. For IaC ignore rules see "),L={href:"https://docs.snyk.io/snyk-infrastructure-as-code/snyk-cli-for-infrastructure-as-code/iac-ignores-using-the-.snyk-policy-file",target:"_blank",rel:"noopener noreferrer"},N=e("IaC ignores using the .snyk policy file"),P=e("."),j=a('<ul><li>The <code>.snyk</code> file defines <strong>Snyk patches</strong> to be applied at build time, to resolve vulnerabilities that cannot be fixed with upgrades.</li><li>The <code>.snyk</code> file defines <strong>Ignores</strong>. <ul><li>Snyk checks the Snyk database and the <code>.snyk</code> policy file for ignore rules when performing CLI and CI/CD scanning.</li><li>The <code>.snyk</code> policy file is used to apply ignores and other settings for the <code>snyk test</code> and <code>snyk monitor</code> commands, as well as any tests through the API or website.</li><li><strong>Note</strong>: if <strong>admin users only</strong> is enabled (<strong>Settings &gt; General &gt; Ignores</strong>), the ignore rules in the database are used, unless there is a <code>.snyk</code> file in the project. If there a <code>.snyk</code> file in the project, **** <code>snyk test</code> uses that file as the ignore mechanism, instead of the ignores set from the web UI.</li><li>Developers can ignore issues by using the <code>.snyk</code> policy file when running<code>snyk monitor</code>.</li><li>When the <code>.snyk</code> file is included in a Source Control Management (SCM) project, Snyk considers both the database ignores and the <code>.snyk</code> ignores.</li></ul></li><li>The <code>.snyk</code> file defines certain <strong>analysis configuration items</strong> such as <code>language settings:</code> (Python version). <ul><li>CLI and CI/CD: the <code>language settings:</code> for the current project</li><li>SCM scans (for example, GitHub): the Snyk web UI currently limits users to setting Python versions at the organization level. When you include the <code>.snyk</code> file in your code repository and the <code>language settings:</code> value is set, then when you run code repository scans you gain the advantage of creating project-level Python settings. You may need to re-import the project if the <code>.snyk</code> file was not present at the initial import of the project into Snyk.</li></ul></li></ul><h2 id="snyk-file-creation" tabindex="-1"><a class="header-anchor" href="#snyk-file-creation" aria-hidden="true">#</a> .snyk file creation</h2><p>The <code>.snyk</code> file can be created in a number of ways:</p>',3),D=a("<li><strong>Snyk vulnerability fix pull request (PR)</strong> - When you select the <strong>fix a vulnerability</strong> button on a git code repository scan, and a Snyk patch is available and an upgrade is not possible, a <code>.snyk</code> file is added to the pull request. Currently Snyk patches are for npm and Yarn only.</li><li><strong>Snyk CLI</strong> - Using the <code>snyk ignore</code> command creates a <code>.snyk</code> file..</li>",2),q=n("strong",null,"Manual creation",-1),M=e(" - You can create a new "),G=n("code",null,".snyk",-1),B=e(" file and populate it with the code that follows. The version is the current version of the snyk-policy package; you can find this at "),Y={href:"https://www.npmjs.com/package/snyk-policy",target:"_blank",rel:"noopener noreferrer"},E=e("https://www.npmjs.com/package/snyk-policy"),O=e(". Note that in order to ignore by path you must edit the "),R=n("code",null,".snyk",-1),U=e(" file manually."),Z=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> # Snyk (https://snyk.io) policy file, patches or ignores known vulnerabilities.
 version: v1.22.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><p>The <code>.snyk</code> file may have the following top-level keys:</p><ul><li><code>language-settings:</code></li><li><code>ignore:</code></li><li><code>patch:</code></li></ul>`,4),z=e("The "),F=n("code",null,"language-settings:",-1),K=e(" value is the Python version you are currently using. See the examples in "),A=e("Setting the language version for Python"),J=e(" on this page."),V=a(`<p>The <code>ignore:</code> is an ignore rule in the form of</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Ignore:
  snyk-vulnid:
    - path to library using &gt; seperator :
      reason: &#39;text string&#39;
      expires: &#39;datetime string&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The <code>patch</code>: is in the form of</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;npm:library:yyyymmdd\u2019 :
  - path to library using &gt; seperator:
    patched: &#39;datetime string&#39;
  - path to library using &gt; seperator &gt; to &gt; another &gt; path:
    patched: &#39;datetime string&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="monorepos-and-complex-project-considerations" tabindex="-1"><a class="header-anchor" href="#monorepos-and-complex-project-considerations" aria-hidden="true">#</a> Monorepos and complex project considerations</h2><p>Snyk CLI expects the <code>.snyk</code> file to be relative to the manifest being analyzed. In the case of a complex project or monorepo, there may be many manifests in subfolders, and you may wish to use a centralized ignore policy.</p><p>If you create a <code>.snyk</code> ignore policy with the CLI and Snyk does not successfully ignore the vulnerability, use the option <code>--policy-path=/path/path/file.</code></p><p>Your complete statement should be <code>snyk ignore --id=IssueID [--expiry=expiry] [--reason=&#39;reason for ignoring&#39;] [--policy-path=/path/path/file].</code></p><p>Note that if you do not use the <code>.snyk</code> policy file, you avoid needing to specify ignores in the web interface, which you can do only after an issue is detected and monitored.</p><p>The ignore rules can be overridden if admin users only is enabled for the relevant organization (click on <strong>Settings</strong> &gt; <strong>General</strong> &gt; <strong>Ignores</strong>).</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="creating-a-snyk-file" tabindex="-1"><a class="header-anchor" href="#creating-a-snyk-file" aria-hidden="true">#</a> Creating a .snyk file</h3><p>Generate a patch rule using a vulnerability fix PR:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Snyk (https://snyk.io) policy file, patches or ignores known vulnerabilities.
version: v1.22.1
ignore: {}
# patches apply the minimum changes required to fix a vulnerability
patch:
  &#39;npm:hawk:20160119&#39;:
    - tap &gt; codecov.io &gt; request &gt; hawk:
        patched: &#39;2020-01-20T14:26:34.404Z&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="setting-the-language-version-for-python" tabindex="-1"><a class="header-anchor" href="#setting-the-language-version-for-python" aria-hidden="true">#</a> Setting the language version for Python</h3><p>Manually modify the <code>.snyk</code> file to set <code>language-settings:</code> for the project to Python 2.7:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Snyk (https://snyk.io) policy file, patches or ignores known vulnerabilities.
version: v1.22.1
language-settings: 
python: &quot;2.7&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Manually modify the <code>.snyk</code> file to set <code>language-settings:</code> for the project to Python 3.6.2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Snyk (https://snyk.io) policy file, patches or ignores known vulnerabilities.
version: v1.22.1
language-settings: 
python: &quot;3.6.2&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>Note:</strong> When you include the <code>.snyk</code> file in your code repository and the <code>language-settings:</code> value is set, then when you run code repository scans you gain the advantage of creating project-level Python settings.</p><h3 id="setting-vulnerability-ignore-rules" tabindex="-1"><a class="header-anchor" href="#setting-vulnerability-ignore-rules" aria-hidden="true">#</a> Setting vulnerability ignore rules</h3><p>Ignore a specific vulnerability for a given path:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ignore:
 SNYK-JS-BSON-561052:
    - mongodb &gt; mongodb-core &gt; bson:
        reason: None given
        expires: &#39;2020-06-19T20:36:54.553Z&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Ignore a vulnerability for all paths:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ignore:
  &#39;npm:mem:20180117&#39;:
    - &#39;*&#39;:
        reason: None Given
        expires: 2020-04-04T17:33:45.004Z
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Ignore a specific vulnerability on multiple paths:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ignore:
 SNYK-JS-DOTPROP-543489:
   - configstore &gt; dot-prop:
       reason: None given
       expires: &#39;2020-06-19T20:36:54.553Z&#39;
   - snyk &gt; configstore &gt; dot-prop:
       reason: None given
       expires: &#39;2020-06-19T20:36:54.553Z&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="setting-license-ignore-rules" tabindex="-1"><a class="header-anchor" href="#setting-license-ignore-rules" aria-hidden="true">#</a> Setting license ignore rules</h3><p>To ignore the license issue for package, find the ID for the license in the output of the <code>snyk test</code> command.</p>`,29),W=e("The license ID is part of the license issue URL, for example, in this URL: "),Q={href:"https://snyk.io/vuln/snyk:lic:npm:symbol:MPL-2.0",target:"_blank",rel:"noopener noreferrer"},H=e("https://snyk.io/vuln/snyk:lic:npm:symbol:MPL-2.0"),X=e(", the license ID is "),$=n("code",null,"snyk:lic:npm:symbol:MPL-2.0",-1),ee=e("."),ne=a(`<h3 id="ignoring-the-license-with-the-cli" tabindex="-1"><a class="header-anchor" href="#ignoring-the-license-with-the-cli" aria-hidden="true">#</a> <strong>Ignoring the license with the CLI</strong></h3><p>Enter the license ID in lowercase to avoid causing an error. Only the proper name of the license can be in uppercase. In the example that follows, everything is in lowercase except the proper name of the license, GPL-2.0.</p><p><code>snyk ignore --id=snyk:lic:npm:goof:GPL-2.0</code></p><p>This command results in the following <code>.snyk</code> file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ignore:
  &#39;snyk:lic:npm:goof:GPL-2.0&#39;:
    - &#39;*&#39;:
        reason: None Given
        expires: 2020-11-07T11:38:28.614Z
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="excluding-files-and-folders-from-snyk-code-analysis" tabindex="-1"><a class="header-anchor" href="#excluding-files-and-folders-from-snyk-code-analysis" aria-hidden="true">#</a> Excluding \uFB01les and folders from Snyk Code analysis</h3><p><strong>Note</strong>: Only web and CLI projects currently support excludes for Snyk Code analysis. IDE support is planned for the future.</p><p>Using the following code you can add shell-style patterns under the <code>exclude.code</code> section of the <code>.snyk</code> file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Snyk (https://snyk.io) policy file
version: v1.14.0

exclude:
   code:
     - test.spec.ts
     - tests/*.ts
     - \u201C**/*.spec.ts\u201D
     - tests?/*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>The preceding exclude rules ignore the \u201Ctest.spec.ts\u201D \uFB01le, any \uFB01le with the \u201C.ts\u201D extension under \u201Ctests,\u201D any \uFB01le ending with \u201C.spec.ts\u201D from any directory, and any \uFB01le found under \u201Ctest\u201D or \u201Ctests.\u201D </p><p>Any rule beginning with asterisk(s) must be wrapped in quotes, for example, <code>\u201D*/src\u201D</code>.</p>`,11),se=e("For more information about the shell pattern syntax, see the "),te={href:"https://www.gnu.org/software/findutils/manual/html_node/find_html/Shell-Pattern-Matching.html",target:"_blank",rel:"noopener noreferrer"},ae=e("GNU doc"),ie=e("."),oe=a(`<h2 id="snyk-related-cli-commands" tabindex="-1"><a class="header-anchor" href="#snyk-related-cli-commands" aria-hidden="true">#</a> .snyk related CLI commands</h2><p>The <code>snyk policy</code> command displays the <code>.snyk</code> policy for a package.</p><p><code>snyk policy</code></p><p>The <code>snyk ignore</code> command modifies the <code>.snyk</code> policy to ignore a stated issue.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>snyk ignore --id=&#39;vulnerabilityID&#39; --expiry=&#39;date-string&#39; --reason=&#39;text string&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The following example shows using the <code>snyk ignore</code> command to generate a rule to ignore the SNYK-JS-BSON-561052 vulnerability for all paths that lead to that library on disk.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>snyk ignore --id=&#39;SNYK-JS-BSON-561052&#39; --expiry=&#39;2018-04-01&#39; --reason=&#39;testing&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices" aria-hidden="true">#</a> Best practices</h2><p>The <code>.snyk</code> file should be versioned in the code repository, the same as other applications and build resources.</p><h2 id="additional-information" tabindex="-1"><a class="header-anchor" href="#additional-information" aria-hidden="true">#</a> Additional information</h2>`,10),re={href:"https://docs.snyk.io/snyk-cli/fix-vulnerabilities-from-the-cli/ignore-vulnerabilities-using-snyk-cli",target:"_blank",rel:"noopener noreferrer"},le=e("Ignore vulnerabilities using Snyk CLI"),ce=e("Support KB - "),de={href:"https://support.snyk.io/hc/en-us/articles/360001558598",target:"_blank",rel:"noopener noreferrer"},pe=e("Ignoring via the CLI is not enabled for this organization"),he=n("br",null,null,-1),ue=e("CLI reference");function ge(ye,be){const t=o("ExternalLinkIcon"),i=o("RouterLink");return l(),c(d,null,[u,n("p",null,[g,y,b,m,f,k,_,v,x,n("a",w,[S,s(t)]),I,T,C,n("a",L,[N,s(t)]),P]),j,n("ul",null,[D,n("li",null,[q,M,G,B,n("a",Y,[E,s(t)]),O,R,U])]),Z,n("p",null,[z,F,K,s(i,{to:"/snyk-cli/the-.snyk-file.html#setting-the-language-version-for-python"},{default:r(()=>[A]),_:1}),J]),V,n("p",null,[W,n("a",Q,[H,s(t)]),X,$,ee]),ne,n("p",null,[se,n("a",te,[ae,s(t)]),ie]),oe,n("p",null,[n("a",re,[le,s(t)])]),n("p",null,[ce,n("a",de,[pe,s(t)]),he,s(i,{to:"/cli-reference/"},{default:r(()=>[ue]),_:1})])],64)}var ke=p(h,[["render",ge]]);export{ke as default};