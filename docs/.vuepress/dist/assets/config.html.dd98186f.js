import{e}from"./app.922d555a.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const d={},r=e('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h1><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p><code>snyk config &lt;SUBCOMMAND&gt; [&lt;OPTIONS&gt;]</code></p><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>The <code>snyk config</code> command manages your local Snyk CLI config file, a JSON file located at <code>$XDG_CONFIG_HOME</code> or <code>~/.config</code> followed by <code>configstore/snyk.json</code>, for example, <code>~/.config/configstore/snyk.json</code>.</p><p>This command does not manage the <code>.snyk</code> file that is part of your project. See the <code>snyk policy</code> and <code>snyk ignore</code> commands.</p><h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> Debug</h2><p>Use the <code>-d</code> option to output the debug logs.</p><h2 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h2><h3 id="get-key" tabindex="-1"><a class="header-anchor" href="#get-key" aria-hidden="true">#</a> <code>get &lt;KEY&gt;</code></h3><p>Print a config value.</p><h3 id="set-key-value" tabindex="-1"><a class="header-anchor" href="#set-key-value" aria-hidden="true">#</a> <code>set &lt;KEY&gt;=&lt;VALUE&gt;</code></h3><p>Create a new config value.</p><h3 id="unset-key" tabindex="-1"><a class="header-anchor" href="#unset-key" aria-hidden="true">#</a> <code>unset &lt;KEY&gt;</code></h3><p>Remove a config value.</p><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> <code>clear</code></h3><p>Remove all config values.</p><h2 id="supported-key-values" tabindex="-1"><a class="header-anchor" href="#supported-key-values" aria-hidden="true">#</a> Supported <code>&lt;KEY&gt;</code> values</h2><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> <code>api</code></h3><p>API token to use when calling Snyk API.</p><h3 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> <code>endpoint</code></h3><p>Define the API endpoint to use.</p><h3 id="disable-analytics" tabindex="-1"><a class="header-anchor" href="#disable-analytics" aria-hidden="true">#</a> <code>disable-analytics</code></h3><p>Turn off analytics reporting.</p><h3 id="oci-registry-url" tabindex="-1"><a class="header-anchor" href="#oci-registry-url" aria-hidden="true">#</a> <code>oci-registry-url</code></h3><p>Configure the OCI registry used in IaC scanning with custom rules.</p><h3 id="oci-registry-username" tabindex="-1"><a class="header-anchor" href="#oci-registry-username" aria-hidden="true">#</a> <code>oci-registry-username</code></h3><p>Configure the username for an OCI registry used in IaC scanning with custom rules.</p><h3 id="oci-registry-password" tabindex="-1"><a class="header-anchor" href="#oci-registry-password" aria-hidden="true">#</a> <code>oci-registry-password</code></h3><p>Configure the password for an OCI registry used in IaC scanning with custom rules.</p>',30);function o(i,n){return r}var s=a(d,[["render",o]]);export{s as default};