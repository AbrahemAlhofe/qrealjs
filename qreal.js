!function(n){"function"==typeof define&&define.amd?define(n):n()}(function(){"use strict";function n(e,r,u=(()=>{})){if(0===(e=i.isString(e)?e:i.castArray(e)).length)return u([]),[];const $=i.assign({$take:e.length,$ignore:[],$include:()=>({}),$keyName:"@",$value:"@"},r);e=s(e,$.$take);var y=i.omitBy($,(n,i)=>"$"===i[0]);return l(e,(e,u,s)=>{let d=f(e,u);if(i.isFunction(r.$value)){for(let n in r.$value(e,u))y[n]="";e=r.$value(e,u)}$.$value=d(r.$value,e);$.$keyName=d(r.$keyName,u);let m=a($.$value,$.$include,u);$.$value=m;for(let n in $.$include(e,u))y[n]="";$.$value=c($.$value,$.$ignore);if(!i.isEmpty($.$ignore)&&0==i.keys(y).length)for(let n in $.$value)y[n]="";if(!i.isObject($.$value))return void s($.$value,$.$keyName);l(y,(e,r,u)=>{function a(o){if(!i.isObject(e)||i.isArray(e)){if(t(e)){let n=f(c,r);o=n(e,c)}return void u(o)}s?n(o,e,n=>{n=i.isArray(o)?i.toArray(n):n[0];u(n)}):(i.isArray(o)&&(o=[o]),n(o,e,n=>{i.isString(o)&&(n=[n.join("")]);n=n[0];if(i.isArray(c)){let e=i.toArray(n);0!==e.length&&(n=e)}u(n)}))}let c=$.$value[r];let s=n.middlewares[r];s?i.isArray(s)?s.pass(r,c,$.$value,n=>{a(n[0])}):(n.middlewares=s,a(c)):a(o(c)(e))},n=>{s(n,$.$keyName)},"@"!==$.$keyName?{}:[])},u,"@"!==$.$keyName?{}:[])}const i=require("lodash"),e=n=>{console.log(new Error(`Qreal [WARN] : ${n}`))},t=n=>i.isString(n)&&""!==n,r=(n,e=" ",t)=>{const r=i.fill(Array(t-n.length),e);return[...r,...n]},u=n=>{if(n)return!1;if(!i.isNumber(n))return!0;return!1},o=n=>i.isFunction(n)?n:()=>n,a=(n,t,r)=>{t=o(t)(n||{},r||0);t||e(`$include return "${t}"`);i.isString(n)&&(i.isArray(t)&&(t=t.join("")),i.isEmpty(t)&&(t=""),n+=i.toString(t));i.isObject(n)&&(n=i.merge(n,t));return n},f=i.curry((n,e,r,a)=>{let f=o(r)(n,e);t(f)?(f=i.get(n,i.trimStart(f,"@"),null),u(f)&&(f=a)):f=a;return f}),c=(n,e)=>{if(i.isArray(n))return i.pullAll(n,e);if(i.isObject(n))return i.omit(n,e);return n},s=(n,e)=>{let t=i.take(i.castArray(e),2);let[u,o]=r(t,0,2);u=-1!==i.findIndex(n,u)?i.findIndex(n,u):u;o=u+o+t.length-1;return i.slice(n,u,o)},l=(n,i,e,t=[])=>{function r(){let e=a[o],r=n[e];i(r,e,(n,i)=>{o+=1;t[i||e]=n;u()})}function u(){o>a.length-1?e(t):r()}var o=0;let a=Object.keys(n);r();return t};n.middlewares={},n.use=function(e,t){Array.prototype.pass=function(e,t,r,u){l(n.middlewares[e],(n,e,u)=>{l(i.castArray(t),(i,e,t)=>{n(i,r,function(n){t(n)})},n=>{i.isArray(t)||(n=n[0]);u(n)})},u)},n.middlewares[e]?n.middlewares[e].push(t):i.set(n.middlewares,e,[t])},module.exports=n});
