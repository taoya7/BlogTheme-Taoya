(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{476:function(n,t,e){"use strict";e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return o})),e.d(t,"e",(function(){return s})),e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return f}));e(55),e(477),e(88);var r=/#.*$/,i=/\.(md|html)$/,l=/\/$/,u=/^(https?:|mailto:|tel:)/;function a(n){return u.test(n)}function o(n){return/^mailto:/.test(n)}function s(n){return/^tel:/.test(n)}function c(n){if(a(n))return n;var t=n.match(r),e=t?t[0]:"",u=function(n){return decodeURI(n).replace(r,"").replace(i,"")}(n);return l.test(u)?n:u+".html"+e}function f(n,t,e){if(!n)return e;for(var r,i=t;(i=i.$parent)&&!r;)r=i.$refs[n];return r&&r.$el&&(r=r.$el),r||e}},477:function(n,t,e){"use strict";var r=e(89),i=e(12),l=e(19),u=e(16),a=e(132),o=e(90);r("match",1,(function(n,t,e){return[function(t){var e=u(this),r=null==t?void 0:t[n];return void 0!==r?r.call(t,e):new RegExp(t)[n](String(e))},function(n){var r=e(t,n,this);if(r.done)return r.value;var u=i(n),s=String(this);if(!u.global)return o(u,s);var c=u.unicode;u.lastIndex=0;for(var f,d=[],m=0;null!==(f=o(u,s));){var h=String(f[0]);d[m]=h,""===h&&(u.lastIndex=a(s,l(u.lastIndex),c)),m++}return 0===m?null:d}]}))},498:function(n,t,e){},626:function(n,t,e){"use strict";var r=e(498);e.n(r).a},641:function(n,t,e){"use strict";e.r(t);e(325),e(92),e(133);var r=e(476),i={props:{link:{required:!0}},computed:{normalizedlink:function(){return Object(r.a)(this.link)},exact:function(){var n=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(t){return t===n.normalizedlink})):"/"===this.normalizedlink}},methods:{isExternal:r.c,isMailto:r.d,isTel:r.e}},l=(e(626),e(8)),u=Object(l.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.isExternal(n.normalizedlink)?e("a",{staticClass:"external",attrs:{href:n.normalizedlink,target:n.isMailto(n.normalizedlink)||n.isTel(n.normalizedlink)?null:"_blank",rel:n.isMailto(n.normalizedlink)||n.isTel(n.normalizedlink)?null:"noopener noreferrer"}},[n._t("default")],2):e("router-link",{attrs:{to:n.normalizedlink,exact:n.exact}},[n._t("default")],2)}),[],!1,null,null,null);t.default=u.exports}}]);