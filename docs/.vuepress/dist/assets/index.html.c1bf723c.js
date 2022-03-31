import{r as t,o as r,c,a as e,w as a,F as i,b as n,d as s}from"./app.922d555a.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const m={},p=n("h3",{id:"as-easy-as-1-2-3-possibly-4-5-6-7-8-9-etc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#as-easy-as-1-2-3-possibly-4-5-6-7-8-9-etc","aria-hidden":"true"},"#"),s(" As Easy as 1, 2, 3... possibly 4, 5, 6, 7, 8, 9... etc.")],-1),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Before installing the Snyk CLI using npm, be sure you have installed the prerequisites:"),s(`
`),n("span",{class:"token comment"},"# Install the latest version of npm in your local environment, using Node version 12 or later. See What version of Node is required for Snyk? for the steps to update Node."),s(`
`),n("span",{class:"token comment"},"# To run Snyk on Alpine Linux, first install libstdc++. See How can I use CLI on an Alpine operating system? for more information."),s(`

`),n("span",{class:"token comment"},"# install in snyk"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` snyk -g

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br")])],-1),d=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"yarn"),s(" global "),n("span",{class:"token function"},"add"),s(` snyk

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),k=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"curl"),s(` https://static.snyk.io/cli/latest/snyk-macos -o snyk
`),n("span",{class:"token function"},"chmod"),s(` +x ./snyk
`),n("span",{class:"token function"},"mv"),s(` ./snyk /usr/local/bin/
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br")])],-1),h=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Install Snyk CLI from Snyk tap with Homebrew by running:"),s(`
brew tap snyk/tap
brew `),n("span",{class:"token function"},"install"),s(` snyk
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),g=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Install Snyk CLI from the Snyk bucket with Scoop on Windows:"),s(`
scoop bucket `),n("span",{class:"token function"},"add"),s(` snyk https://github.com/snyk/scoop-snyk
scoop `),n("span",{class:"token function"},"install"),s(` snyk
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br")])],-1),y=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Install Snyk CLI in a Docker image"),s(`
`),n("span",{class:"token function"},"docker"),s(` run -it
    -e `),n("span",{class:"token string"},'"SNYK_TOKEN=<TOKEN>"'),s(`
    -v `),n("span",{class:"token string"},'"<PROJECT_DIRECTORY>:/project"'),s(`
    -v `),n("span",{class:"token string"},'"/home/user/.gradle:/home/node/.gradle"'),s(`
  snyk/snyk-cli:gradle-5.4 `),n("span",{class:"token builtin class-name"},"test"),s(" --org"),n("span",{class:"token operator"},"="),s(`my-org-name
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1);function _(f,v){const l=t("CodeGroupItem"),o=t("CodeGroup");return r(),c(i,null,[p,e(o,null,{default:a(()=>[e(l,{title:"NPM",active:""},{default:a(()=>[b]),_:1}),e(l,{title:"YARN"},{default:a(()=>[d]),_:1}),e(l,{title:"STANDALONE EXECUTABLES"},{default:a(()=>[k]),_:1}),e(l,{title:"HOMEBREW"},{default:a(()=>[h]),_:1}),e(l,{title:"SCOOP"},{default:a(()=>[g]),_:1}),e(l,{title:"DOCKER"},{default:a(()=>[y]),_:1})]),_:1})],64)}var S=u(m,[["render",_]]);export{S as default};
