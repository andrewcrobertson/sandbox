import{r as t,_ as n,a as e,b as r,c as a,i as s,d as o,S as c,s as u,f as i,t as f,j as l,k as h,l as p,g as v,m as d,n as m,o as g,u as x,e as y,q as w,h as j,v as R,p as b,w as E}from"./client.b1ec3539.js";function z(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var o=e(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return r(this,a)}}function k(t,n,e){var r=t.slice();return r[1]=n[e],r}function D(t){var n,e,r,a,s=t[1].title+"";return{c:function(){n=i("li"),e=i("a"),r=f(s),this.h()},l:function(t){n=l(t,"LI",{});var a=h(n);e=l(a,"A",{rel:!0,href:!0});var o=h(e);r=p(o,s),o.forEach(v),a.forEach(v),this.h()},h:function(){d(e,"rel","prefetch"),d(e,"href",a="https://4xlxjn3y4i.execute-api.us-east-1.amazonaws.com/dev/blog/"+t[1].slug)},m:function(t,a){m(t,n,a),g(n,e),g(e,r)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&x(r,s),1&n&&a!==(a="https://4xlxjn3y4i.execute-api.us-east-1.amazonaws.com/dev/blog/"+t[1].slug)&&d(e,"href",a)},d:function(t){t&&v(n)}}}function L(t){for(var n,e,r,a,s,o=t[0],c=[],u=0;u<o.length;u+=1)c[u]=D(k(t,o,u));return{c:function(){n=y(),e=i("h1"),r=f("Recent posts"),a=y(),s=i("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){w('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=j(t),e=l(t,"H1",{});var o=h(e);r=p(o,"Recent posts"),o.forEach(v),a=j(t),s=l(t,"UL",{class:!0});for(var u=h(s),i=0;i<c.length;i+=1)c[i].l(u);u.forEach(v),this.h()},h:function(){document.title="Blog",d(s,"class","svelte-1frg2tf")},m:function(t,o){m(t,n,o),m(t,e,o),g(e,r),m(t,a,o),m(t,s,o);for(var u=0;u<c.length;u+=1)c[u].m(s,null)},p:function(t,n){var e=R(n,1)[0];if(1&e){var r;for(o=t[0],r=0;r<o.length;r+=1){var a=k(t,o,r);c[r]?c[r].p(a,e):(c[r]=D(a),c[r].c(),c[r].m(s,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=o.length}},i:b,o:b,d:function(t){t&&v(n),t&&v(e),t&&v(a),t&&v(s),E(c,t)}}}var P=function(t,n,e,r){return new(e||(e=Promise))((function(a,s){function o(t){try{u(r.next(t))}catch(t){s(t)}}function c(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,c)}u((r=r.apply(t,n||[])).next())}))},S=function(){return P(this,void 0,void 0,t.mark((function n(){var e,r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("https://4xlxjn3y4i.execute-api.us-east-1.amazonaws.com/dev/blog.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",{posts:r});case 7:case"end":return t.stop()}}),n,this)})))};function $(t,n,e){var r=n.posts;return t.$$set=function(t){"posts"in t&&e(0,r=t.posts)},[r]}var q=function(t){n(r,c);var e=z(r);function r(t){var n;return a(this,r),n=e.call(this),s(o(n),t,$,L,u,{posts:0}),n}return r}();export default q;export{S as preload};