import{S as t,i as s,s as e,a as n,e as a,t as o,q as i,d as c,c as r,b as u,f as l,g as h,h as f,j as d,k as p,l as m,n as v}from"./client.56cb4646.js";function y(t){let s,e,y,x,g,j,b=t[0].title+"",w=t[0].html+"";return document.title=s=t[0].title,{c(){e=n(),y=a("h1"),x=o(b),g=n(),j=a("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(c),e=r(t),y=u(t,"H1",{});var s=l(y);x=h(s,b),s.forEach(c),g=r(t),j=u(t,"DIV",{class:!0}),l(j).forEach(c),this.h()},h(){f(j,"class","content svelte-pp9d5m")},m(t,s){d(t,e,s),d(t,y,s),p(y,x),d(t,g,s),d(t,j,s),j.innerHTML=w},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&b!==(b=t[0].title+"")&&m(x,b),1&e&&w!==(w=t[0].html+"")&&(j.innerHTML=w)},i:v,o:v,d(t){t&&c(e),t&&c(y),t&&c(g),t&&c(j)}}}var x=function(t,s,e,n){return new(e||(e=Promise))((function(a,o){function i(t){try{r(n.next(t))}catch(t){o(t)}}function c(t){try{r(n.throw(t))}catch(t){o(t)}}function r(t){var s;t.done?a(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(i,c)}r((n=n.apply(t,s||[])).next())}))};const g=function({params:t}){return x(this,void 0,void 0,(function*(){const s=yield this.fetch(`blog/${t.slug}.json`),e=yield s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}))};function j(t,s,e){let{post:n}=s;return t.$$set=t=>{"post"in t&&e(0,n=t.post)},[n]}export default class extends t{constructor(t){super(),s(this,t,j,y,e,{post:0})}}export{g as preload};
