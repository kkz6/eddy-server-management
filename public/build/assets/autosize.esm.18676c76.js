var s,h,u=typeof Map=="function"?new Map:(s=[],h=[],{has:function(e){return s.indexOf(e)>-1},get:function(e){return h[s.indexOf(e)]},set:function(e,o){s.indexOf(e)===-1&&(s.push(e),h.push(o))},delete:function(e){var o=s.indexOf(e);o>-1&&(s.splice(o,1),h.splice(o,1))}}),m=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch{m=function(o){var p=document.createEvent("Event");return p.initEvent(o,!0,!1),p}}function x(e){var o=u.get(e);o&&o.destroy()}function N(e){var o=u.get(e);o&&o.update()}var d=null;typeof window>"u"||typeof window.getComputedStyle!="function"?((d=function(e){return e}).destroy=function(e){return e},d.update=function(e){return e}):((d=function(e,o){return e&&Array.prototype.forEach.call(e.length?e:[e],function(p){return function(t){if(t&&t.nodeName&&t.nodeName==="TEXTAREA"&&!u.has(t)){var l,c=null,g=null,E=null,z=function(){t.clientWidth!==g&&r()},v=function(i){window.removeEventListener("resize",z,!1),t.removeEventListener("input",r,!1),t.removeEventListener("keyup",r,!1),t.removeEventListener("autosize:destroy",v,!1),t.removeEventListener("autosize:update",r,!1),Object.keys(i).forEach(function(n){t.style[n]=i[n]}),u.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",v,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",r,!1),window.addEventListener("resize",z,!1),t.addEventListener("input",r,!1),t.addEventListener("autosize:update",r,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",u.set(t,{destroy:v,update:r}),(l=window.getComputedStyle(t,null)).resize==="vertical"?t.style.resize="none":l.resize==="both"&&(t.style.resize="horizontal"),c=l.boxSizing==="content-box"?-(parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)):parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),isNaN(c)&&(c=0),r()}function b(i){var n=t.style.width;t.style.width="0px",t.style.width=n,t.style.overflowY=i}function y(){if(t.scrollHeight!==0){var i=function(n){for(var a=[];n&&n.parentNode&&n.parentNode instanceof Element;)n.parentNode.scrollTop&&(n.parentNode.style.scrollBehavior="auto",a.push([n.parentNode,n.parentNode.scrollTop])),n=n.parentNode;return function(){return a.forEach(function(f){var w=f[0];w.scrollTop=f[1],w.style.scrollBehavior=null})}}(t);t.style.height="",t.style.height=t.scrollHeight+c+"px",g=t.clientWidth,i()}}function r(){y();var i=Math.round(parseFloat(t.style.height)),n=window.getComputedStyle(t,null),a=n.boxSizing==="content-box"?Math.round(parseFloat(n.height)):t.offsetHeight;if(a<i?n.overflowY==="hidden"&&(b("scroll"),y(),a=n.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):n.overflowY!=="hidden"&&(b("hidden"),y(),a=n.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),E!==a){E=a;var f=m("autosize:resized");try{t.dispatchEvent(f)}catch{}}}}(p)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],x),e},d.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],N),e});var L=d;export{L as default};