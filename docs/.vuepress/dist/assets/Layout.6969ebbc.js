var Be=Object.defineProperty,Me=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var ve=(l,t,e)=>t in l?Be(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,X=(l,t)=>{for(var e in t||(t={}))Ne.call(t,e)&&ve(l,e,t[e]);if(de)for(var e of de(t))Ee.call(t,e)&&ve(l,e,t[e]);return l},Y=(l,t)=>Me(l,De(t));import{r as R,o as a,c,d as $,g as x,j as I,k as p,l as _e,i as n,F as D,e as A,a as g,t as T,m as w,n as G,p as J,q as C,w as B,s as pe,v as y,b as U,x as q,y as Ie,z as Pe,A as Re,B as Q,C as Z,D as P,E as V,G as fe,H as me,u as be,h as M,T as ge,I as O,J as Ae,K as j,L as K,M as He,N as Oe,O as ee,P as ke,Q as $e,f as ze,R as Le,S as Fe,U as W,V as te,W as We,X as Ue,Y as Ve,Z as je}from"./app.ff6c0bf7.js";import{_ as Ke}from"./plugin-vue_export-helper.21dcd24c.js";const Ge={},qe={class:"theme-default-content custom"};function Xe(l,t){const e=R("Content");return a(),c("div",qe,[$(e)])}var Ye=Ke(Ge,[["render",Xe]]);const Je={key:0,class:"features"},Qe=x({setup(l){const t=I(),e=p(()=>_e(t.value.features)?t.value.features:[]);return(i,r)=>n(e).length?(a(),c("div",Je,[(a(!0),c(D,null,A(n(e),_=>(a(),c("div",{key:_.title,class:"feature"},[g("h2",null,T(_.title),1),g("p",null,T(_.details),1)]))),128))])):w("",!0)}}),Ze=["innerHTML"],et=["textContent"],tt=x({setup(l){const t=I(),e=p(()=>t.value.footer),i=p(()=>t.value.footerHtml);return(r,_)=>n(e)?(a(),c(D,{key:0},[n(i)?(a(),c("div",{key:0,class:"footer",innerHTML:n(e)},null,8,Ze)):(a(),c("div",{key:1,class:"footer",textContent:T(n(e))},null,8,et))],64)):w("",!0)}}),nt=["href","rel","target","aria-label"],at=x({inheritAttrs:!1}),E=x(Y(X({},at),{props:{item:{type:Object,required:!0}},setup(l){const t=l,e=G(),i=Re(),{item:r}=J(t),_=p(()=>q(r.value.link)),f=p(()=>Ie(r.value.link)||Pe(r.value.link)),h=p(()=>{if(!f.value){if(r.value.target)return r.value.target;if(_.value)return"_blank"}}),s=p(()=>h.value==="_blank"),o=p(()=>!_.value&&!f.value&&!s.value),u=p(()=>{if(!f.value){if(r.value.rel)return r.value.rel;if(s.value)return"noopener noreferrer"}}),d=p(()=>r.value.ariaLabel||r.value.text),v=p(()=>{const L=Object.keys(i.value.locales);return L.length?!L.some(m=>m===r.value.link):r.value.link!=="/"}),b=p(()=>v.value?e.path.startsWith(r.value.link):!1),k=p(()=>o.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(L,m)=>{const S=R("RouterLink"),N=R("ExternalLinkIcon");return n(o)?(a(),C(S,pe({key:0,class:{"router-link-active":n(k)},to:n(r).link,"aria-label":n(d)},L.$attrs),{default:B(()=>[y(L.$slots,"before"),U(" "+T(n(r).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),c("a",pe({key:1,class:"external-link",href:n(r).link,rel:n(u),target:n(h),"aria-label":n(d)},L.$attrs),[y(L.$slots,"before"),U(" "+T(n(r).text)+" ",1),n(s)?(a(),C(N,{key:0})):w("",!0),y(L.$slots,"after")],16,nt))}}})),st={class:"hero"},rt={key:0,id:"main-title"},ot={key:1,class:"description"},lt={key:2,class:"actions"},ut=x({setup(l){const t=I(),e=Q(),i=Z(),r=p(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),_=p(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),f=p(()=>t.value.heroAlt||_.value||"hero"),h=p(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),s=p(()=>_e(t.value.actions)?t.value.actions.map(({text:u,link:d,type:v="primary"})=>({text:u,link:d,type:v})):[]),o=()=>{if(!r.value)return null;const u=V("img",{src:fe(r.value),alt:f.value});return t.value.heroImageDark===void 0?u:V(me,()=>u)};return(u,d)=>(a(),c("header",st,[$(o),n(_)?(a(),c("h1",rt,T(n(_)),1)):w("",!0),n(h)?(a(),c("p",ot,T(n(h)),1)):w("",!0),n(s).length?(a(),c("p",lt,[(a(!0),c(D,null,A(n(s),v=>(a(),C(E,{key:v.text,class:P(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):w("",!0)]))}}),it={class:"home"},ct=x({setup(l){return(t,e)=>(a(),c("main",it,[$(ut),$(Qe),$(Ye),$(tt)]))}}),dt=x({setup(l){const t=be(),e=Q(),i=M(),r=Z(),_=p(()=>i.value.home||t.value),f=p(()=>e.value.title),h=p(()=>r.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),s=()=>{if(!h.value)return null;const o=V("img",{class:"logo",src:fe(h.value),alt:f.value});return i.value.logoDark===void 0?o:V(me,()=>o)};return(o,u)=>{const d=R("RouterLink");return a(),C(d,{to:n(_)},{default:B(()=>[$(s),n(f)?(a(),c("span",{key:0,class:P(["site-name",{"can-hide":n(h)}])},T(n(f)),3)):w("",!0)]),_:1},8,["to"])}}}),ye=x({setup(l){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,r)=>(a(),C(ge,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:B(()=>[y(i.$slots,"default")]),_:3}))}}),vt=["aria-label"],pt={class:"title"},ht=g("span",{class:"arrow down"},null,-1),_t=["aria-label"],ft={class:"title"},mt={class:"navbar-dropdown"},bt={class:"navbar-dropdown-subtitle"},gt={key:1},kt={class:"navbar-dropdown-subitem-wrapper"},$t=x({props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=J(t),i=p(()=>e.value.ariaLabel||e.value.text),r=O(!1),_=G();Ae(()=>_.path,()=>{r.value=!1});const f=s=>{s.detail===0?r.value=!r.value:r.value=!1},h=(s,o)=>o[o.length-1]===s;return(s,o)=>(a(),c("div",{class:P(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":n(i),onClick:f},[g("span",pt,T(n(e).text),1),ht],8,vt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n(i),onClick:o[0]||(o[0]=u=>r.value=!r.value)},[g("span",ft,T(n(e).text),1),g("span",{class:P(["arrow",r.value?"down":"right"])},null,2)],8,_t),$(ye,null,{default:B(()=>[j(g("ul",mt,[(a(!0),c(D,null,A(n(e).children,u=>(a(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(a(),c(D,{key:0},[g("h4",bt,[u.link?(a(),C(E,{key:0,item:u,onFocusout:d=>h(u,n(e).children)&&u.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(a(),c("span",gt,T(u.text),1))]),g("ul",kt,[(a(!0),c(D,null,A(u.children,d=>(a(),c("li",{key:d.link,class:"navbar-dropdown-subitem"},[$(E,{item:d,onFocusout:v=>h(d,u.children)&&h(u,n(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),C(E,{key:1,item:u,onFocusout:d=>h(u,n(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[K,r.value]])]),_:1})],2))}}),he=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Lt=(l,t)=>{if(t.hash===l)return!0;const e=he(t.path),i=he(l);return e===i},we=(l,t)=>l.link&&Lt(l.link,t)?!0:l.children?l.children.some(e=>we(e,t)):!1,xe=l=>!q(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,yt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},wt=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=xe(l);return e!==null?yt[e]:null},xt=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:r})=>{if(!i)return null;const _=wt({docsRepo:l,editLinkPattern:r});return _?_.replace(/:repo/,q(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,He(`${Oe(e)}/${i}`)):null},Ct={key:0,class:"navbar-items"},Ce=x({setup(l){const t=()=>{const o=ee(),u=be(),d=Q(),v=M();return p(()=>{var S,N;const b=Object.keys(d.value.locales);if(b.length<2)return[];const k=o.currentRoute.value.path,L=o.currentRoute.value.fullPath;return[{text:(S=v.value.selectLanguageText)!=null?S:"unknown language",ariaLabel:(N=v.value.selectLanguageAriaLabel)!=null?N:"unkown language",children:b.map(H=>{var se,re,oe,le,ue,ie;const z=(re=(se=d.value.locales)==null?void 0:se[H])!=null?re:{},ne=(le=(oe=v.value.locales)==null?void 0:oe[H])!=null?le:{},ae=`${z.lang}`,Te=(ue=ne.selectLanguageName)!=null?ue:ae;let F;if(ae===d.value.lang)F=L;else{const ce=k.replace(u.value,H);o.getRoutes().some(Se=>Se.path===ce)?F=ce:F=(ie=ne.home)!=null?ie:H}return{text:Te,link:F}})}]})},e=()=>{const o=M(),u=p(()=>o.value.repo),d=p(()=>u.value?xe(u.value):null),v=p(()=>u.value&&!q(u.value)?`https://github.com/${u.value}`:u.value),b=p(()=>v.value?o.value.repoLabel?o.value.repoLabel:d.value===null?"Source":d.value:null);return p(()=>!v.value||!b.value?[]:[{text:b.value,link:v.value}])},i=o=>ke(o)?$e(o):o.children?Y(X({},o),{children:o.children.map(i)}):o,_=(()=>{const o=M();return p(()=>(o.value.navbar||[]).map(i))})(),f=t(),h=e(),s=p(()=>[..._.value,...f.value,...h.value]);return(o,u)=>n(s).length?(a(),c("nav",Ct,[(a(!0),c(D,null,A(n(s),d=>(a(),c("div",{key:d.text,class:"navbar-item"},[d.children?(a(),C($t,{key:0,item:d},null,8,["item"])):(a(),C(E,{key:1,item:d},null,8,["item"]))]))),128))])):w("",!0)}}),Tt=["title"],St={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Bt=ze('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Mt=[Bt],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Nt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Et=[Nt],It=x({setup(l){const t=M(),e=Z(),i=()=>{e.value=!e.value};return(r,_)=>(a(),c("button",{class:"toggle-dark-button",title:n(t).toggleDarkMode,onClick:i},[j((a(),c("svg",St,Mt,512)),[[K,!n(e)]]),j((a(),c("svg",Dt,Et,512)),[[K,n(e)]])],8,Tt))}}),Pt=["title"],Rt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),At=[Rt],Ht=x({emits:["toggle"],setup(l){const t=M();return(e,i)=>(a(),c("div",{class:"toggle-sidebar-button",title:n(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=r=>e.$emit("toggle"))},At,8,Pt))}}),Ot=x({emits:["toggle-sidebar"],setup(l){const t=M(),e=O(null),i=O(null),r=O(0),_=p(()=>r.value?{maxWidth:r.value+"px"}:{}),f=p(()=>t.value.darkMode);Le(()=>{const o=h(e.value,"paddingLeft")+h(e.value,"paddingRight"),u=()=>{var d;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-o-(((d=i.value)==null?void 0:d.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(s,o){var v,b,k;const u=(k=(b=(v=s==null?void 0:s.ownerDocument)==null?void 0:v.defaultView)==null?void 0:b.getComputedStyle(s,null))==null?void 0:k[o],d=Number.parseInt(u,10);return Number.isNaN(d)?0:d}return(s,o)=>{const u=R("NavbarSearch");return a(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Ht,{onToggle:o[0]||(o[0]=d=>s.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:i},[$(dt)],512),g("div",{class:"navbar-items-wrapper",style:Fe(n(_))},[y(s.$slots,"before"),$(Ce,{class:"can-hide"}),y(s.$slots,"after"),n(f)?(a(),C(It,{key:0})):w("",!0),$(u)],4)],512)}}}),zt={class:"page-meta"},Ft={key:0,class:"meta-item edit-link"},Wt={key:1,class:"meta-item last-updated"},Ut={class:"meta-item-label"},Vt={class:"meta-item-info"},jt={key:2,class:"meta-item contributors"},Kt={class:"meta-item-label"},Gt={class:"meta-item-info"},qt=["title"],Xt=U(", "),Yt=x({setup(l){const t=()=>{const s=M(),o=W(),u=I();return p(()=>{var N,H,z;if(!((H=(N=u.value.editLink)!=null?N:s.value.editLink)!=null?H:!0))return null;const{repo:v,docsRepo:b=v,docsBranch:k="main",docsDir:L="",editLinkText:m}=s.value;if(!b)return null;const S=xt({docsRepo:b,docsBranch:k,docsDir:L,filePathRelative:o.value.filePathRelative,editLinkPattern:(z=u.value.editLinkPattern)!=null?z:s.value.editLinkPattern});return S?{text:m!=null?m:"Edit this page",link:S}:null})},e=()=>{const s=M(),o=W(),u=I();return p(()=>{var b,k,L,m;return!((k=(b=u.value.lastUpdated)!=null?b:s.value.lastUpdated)!=null?k:!0)||!((L=o.value.git)!=null&&L.updatedTime)?null:new Date((m=o.value.git)==null?void 0:m.updatedTime).toLocaleString()})},i=()=>{const s=M(),o=W(),u=I();return p(()=>{var v,b,k,L;return((b=(v=u.value.contributors)!=null?v:s.value.contributors)!=null?b:!0)&&(L=(k=o.value.git)==null?void 0:k.contributors)!=null?L:null})},r=M(),_=t(),f=e(),h=i();return(s,o)=>{const u=R("ClientOnly");return a(),c("footer",zt,[n(_)?(a(),c("div",Ft,[$(E,{class:"meta-item-label",item:n(_)},null,8,["item"])])):w("",!0),n(f)?(a(),c("div",Wt,[g("span",Ut,T(n(r).lastUpdatedText)+": ",1),$(u,null,{default:B(()=>[g("span",Vt,T(n(f)),1)]),_:1})])):w("",!0),n(h)&&n(h).length?(a(),c("div",jt,[g("span",Kt,T(n(r).contributorsText)+": ",1),g("span",Gt,[(a(!0),c(D,null,A(n(h),(d,v)=>(a(),c(D,{key:v},[g("span",{class:"contributor",title:`email: ${d.email}`},T(d.name),9,qt),v!==n(h).length-1?(a(),c(D,{key:0},[Xt],64)):w("",!0)],64))),128))])])):w("",!0)])}}}),Jt={key:0,class:"page-nav"},Qt={class:"inner"},Zt={key:0,class:"prev"},en={key:1,class:"next"},tn=x({setup(l){const t=s=>s===!1?null:ke(s)?$e(s):We(s)?s:!1,e=(s,o,u)=>{const d=s.findIndex(v=>v.link===o);if(d!==-1){const v=s[d+u];return v!=null&&v.link?v:null}for(const v of s)if(v.children){const b=e(v.children,o,u);if(b)return b}return null},i=I(),r=te(),_=G(),f=p(()=>{const s=t(i.value.prev);return s!==!1?s:e(r.value,_.path,-1)}),h=p(()=>{const s=t(i.value.next);return s!==!1?s:e(r.value,_.path,1)});return(s,o)=>n(f)||n(h)?(a(),c("nav",Jt,[g("p",Qt,[n(f)?(a(),c("span",Zt,[$(E,{item:n(f)},null,8,["item"])])):w("",!0),n(h)?(a(),c("span",en,[$(E,{item:n(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}}),nn={class:"page"},an={class:"theme-default-content"},sn=x({setup(l){return(t,e)=>{const i=R("Content");return a(),c("main",nn,[y(t.$slots,"top"),g("div",an,[$(i)]),$(Yt),$(tn),y(t.$slots,"bottom")])}}}),rn={class:"sidebar-item-children"},on=x({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:i}=J(t),r=G(),_=ee(),f=p(()=>we(e.value,r)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:f.value,collapsible:e.value.collapsible})),s=O(!0),o=O(void 0);return e.value.collapsible&&(s.value=f.value,o.value=()=>{s.value=!s.value},_.afterEach(()=>{s.value=f.value})),(u,d)=>{var b;const v=R("SidebarItem",!0);return a(),c("li",null,[n(e).link?(a(),C(E,{key:0,class:P(n(h)),item:n(e)},null,8,["class","item"])):(a(),c("p",{key:1,tabindex:"0",class:P(n(h)),onClick:d[0]||(d[0]=(...k)=>o.value&&o.value(...k)),onKeydown:d[1]||(d[1]=Ue((...k)=>o.value&&o.value(...k),["enter"]))},[U(T(n(e).text)+" ",1),n(e).collapsible?(a(),c("span",{key:0,class:P(["arrow",s.value?"down":"right"])},null,2)):w("",!0)],34)),(b=n(e).children)!=null&&b.length?(a(),C(ye,{key:2},{default:B(()=>[j(g("ul",rn,[(a(!0),c(D,null,A(n(e).children,k=>(a(),C(v,{key:`${n(i)}${k.text}${k.link}`,item:k,depth:n(i)+1},null,8,["item","depth"]))),128))],512),[[K,s.value]])]),_:1})):w("",!0)])}}}),ln={key:0,class:"sidebar-items"},un=x({setup(l){const t=te();return(e,i)=>n(t).length?(a(),c("ul",ln,[(a(!0),c(D,null,A(n(t),r=>(a(),C(on,{key:r.link||r.text,item:r},null,8,["item"]))),128))])):w("",!0)}}),cn={class:"sidebar"},dn=x({setup(l){return(t,e)=>(a(),c("aside",cn,[$(Ce),y(t.$slots,"top"),$(un),y(t.$slots,"bottom")]))}}),_n=x({setup(l){const t=W(),e=I(),i=M(),r=p(()=>e.value.navbar!==!1&&i.value.navbar!==!1),_=te(),f=O(!1),h=m=>{f.value=typeof m=="boolean"?m:!f.value},s={x:0,y:0},o=m=>{s.x=m.changedTouches[0].clientX,s.y=m.changedTouches[0].clientY},u=m=>{const S=m.changedTouches[0].clientX-s.x,N=m.changedTouches[0].clientY-s.y;Math.abs(S)>Math.abs(N)&&Math.abs(S)>40&&(S>0&&s.x<=80?h(!0):h(!1))},d=p(()=>[{"no-navbar":!r.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},e.value.pageClass]);let v;Le(()=>{v=ee().afterEach(()=>{h(!1)})}),Ve(()=>{v()});const b=je(),k=b.resolve,L=b.pending;return(m,S)=>(a(),c("div",{class:P(["theme-container",n(d)]),onTouchstart:o,onTouchend:u},[y(m.$slots,"navbar",{},()=>[n(r)?(a(),C(Ot,{key:0,onToggleSidebar:h},{before:B(()=>[y(m.$slots,"navbar-before")]),after:B(()=>[y(m.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=N=>h(!1))}),y(m.$slots,"sidebar",{},()=>[$(dn,null,{top:B(()=>[y(m.$slots,"sidebar-top")]),bottom:B(()=>[y(m.$slots,"sidebar-bottom")]),_:3})]),y(m.$slots,"page",{},()=>[n(e).home?(a(),C(ct,{key:0})):(a(),C(ge,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:n(k),onBeforeLeave:n(L)},{default:B(()=>[(a(),C(sn,{key:n(t).path},{top:B(()=>[y(m.$slots,"page-top")]),bottom:B(()=>[y(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{_n as default};
