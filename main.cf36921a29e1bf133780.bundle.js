(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1256:function(e,n,t){"use strict";t.r(n);var o=t(52),s=t(1),r=t(426),c=t.n(r),i=t(427);o.addons.setConfig({theme:Object(s.create)({brandTitle:"storybook-addon-designs",brandImage:c.a,brandUrl:i.homepage})})},1260:function(e,n){},1261:function(e,n){},1262:function(e,n){},1263:function(e,n){},1305:function(e,n,t){"use strict";t.r(n);var o,s,r,c,i,a,l,u,b,f,d,j,p,m,g,O=t(52),x=t.n(O),h=t(1),v="STORYBOOK_ADDON_DESIGNS",y=v+"/panel",w={UpdateConfig:v+"/update_config"},k=t(0),C=t(79),P=t(7),S=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},I=function(e){var n=e.config;return Object(h.jsx)("div",{css:F},Object(h.jsx)(P.Placeholder,{css:D},"Loading..."),Object(h.jsx)("iframe",{css:L,src:n.url,allowFullScreen:n.allowFullscreen}))},F=Object(h.css)(o||(o=S(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  overflow: hidden;\n"]))),D=Object(h.css)(s||(s=S(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"],["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n"]))),L=Object(h.css)(r||(r=S(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"],["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n\n  z-index: 1;\n"]))),A=function(e){var n=e.config,t=Object(k.useMemo)((function(){return function(e){return/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.test(e)}(n.url)?{url:"https://www.figma.com/embed?embed_host="+(n.embedHost||location.hostname)+"&url="+n.url,allowFullscreen:n.allowFullscreen}:(console.warn("[storybook-addon-designs] The URL you specified is not valid Figma URL.\nThe addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>."),n)}),[n.url,n.allowFullscreen,n.embedHost]);return Object(h.jsx)(I,{config:t})},M=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),s=0;for(n=0;n<t;n++)for(var r=arguments[n],c=0,i=r.length;c<i;c++,s++)o[s]=r[c];return o},T=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},z=function(){return(z=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var s in n=arguments[t])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},E=function(e){var n=e.children,t=e.className,o=e.style,s=e.defaultValue,r=e.value,c=e.onChange,i=Object(k.useState)([0,0]),a=i[0],l=i[1];Object(k.useEffect)((function(){l(s||(r||[0,0]))}),[s]);var u=function(e,n){var t=Object(k.useState)([0,0]),o=(t[0],t[1]),s=Object(k.useState)(!1),r=s[0],c=s[1],i=Object(k.useCallback)((function(e){0===e.button&&(o([e.screenX,e.screenY]),c(!0))}),[c,o]),a=Object(k.useCallback)((function(e){var n=e.touches[0];o([n.screenX,n.screenY]),c(!0)}),[c,o]),l=Object(k.useCallback)((function(n){r&&o((function(t){return e([n[0]-t[0],n[1]-t[1]]),n}))}),M([o,r],n)),u=Object(k.useCallback)((function(e){var n=e.screenX,t=e.screenY;l([n,t])}),[l]),b=Object(k.useCallback)((function(e){var n=e.touches[0],t=n.screenX,o=n.screenY;l([t,o])}),M([o,r],n)),f=Object(k.useCallback)((function(){o([0,0]),c(!1)}),[c,o]);return{onMouseDown:i,onMouseMove:u,onMouseUp:f,onMouseLeave:f,onTouchStart:a,onTouchMove:b,onTouchCancel:f,onTouchEnd:f}}((function(e){c&&c(e),l((function(n){return[n[0]+e[0],n[1]+e[1]]}))}),[l,c]),b=Object(k.useMemo)((function(){var e=r||a;return{transform:"translate("+e[0]+"px, "+e[1]+"px)"}}),[r,a]);return Object(h.jsx)("div",z({css:N,className:t,style:o},u),Object(h.jsx)("div",{css:Z,style:b},n))},N=Object(h.css)(c||(c=T(["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"],["\n  position: relative;\n  overflow: hidden;\n\n  &:active {\n    cursor: move;\n  }\n"]))),Z=Object(h.css)(i||(i=T(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]))),B=function(e){var n=e.onZoomIn,t=e.onZoomOut,o=e.onReset;return Object(h.jsx)(k.Fragment,null,Object(h.jsx)(P.IconButton,{onClick:n},Object(h.jsx)(P.Icons,{icon:"zoom"})),Object(h.jsx)(P.IconButton,{onClick:t},Object(h.jsx)(P.Icons,{icon:"zoomout"})),Object(h.jsx)(P.IconButton,{onClick:o},Object(h.jsx)(P.Icons,{icon:"zoomreset"})))},R=function(e,n){var t=Object(k.useState)(1),o=t[0],s=t[1];return Object(k.useEffect)((function(){s(e)}),n),{scale:o,zoomIn:Object(k.useCallback)((function(){s((function(e){return e+.1}))}),[s]),zoomOut:Object(k.useCallback)((function(){s((function(e){return Math.max(e-.1,.1)}))}),[s]),resetZoom:Object(k.useCallback)((function(){s(1)}),[s])}},_=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},U=function(e){var n=e.config,t=R(n.scale||1,[n.scale]),o=Object(k.useMemo)((function(){return{transform:"scale("+t.scale+")"}}),[t.scale]);return Object(h.jsx)("div",{css:Y},Object(h.jsx)(P.FlexBar,{border:!0},Object(h.jsx)(k.Fragment,{key:"left"},Object(h.jsx)("p",null,Object(h.jsx)("b",null,"Image")),Object(h.jsx)(P.Separator,null),Object(h.jsx)(B,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),Object(h.jsx)(E,{css:H,defaultValue:n.offset},Object(h.jsx)("img",{css:X,src:n.url,style:o})))},Y=Object(h.css)(a||(a=_(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]))),H=Object(h.css)(l||(l=_(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]))),X=Object(h.css)(u||(u=_(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n\n  pointer-events: none;\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n"]))),G=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},J=function(e){var n,t,o,s=e.config;return Object(h.jsx)("div",{css:K},Object(h.jsx)(P.Link,{cancel:!1,href:s.url,target:null!==(n=s.target)&&void 0!==n?n:"_blank",rel:null!==(t=s.rel)&&void 0!==t?t:"noopener",withArrow:null===(o=s.showArrow)||void 0===o||o},s.label||s.url))},K=Object(h.css)(b||(b=G(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),V=t(272),W=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},$=Object(h.jsx)(P.Placeholder,null,"Loading PDF..."),q=function(e){var n=e.config,t=function(e){void 0===e&&(e=1);var n=Object(k.useState)(1),t=n[0],o=n[1],s=Object(k.useState)(1),r=s[0],c=s[1],i=Object(k.useCallback)((function(n){c(n),o(n>0?e:0)}),[e,c,o]),a=Object(k.useCallback)((function(e){o(e>r?r:e<=0?1:e)}),[r,o]);Object(k.useEffect)((function(){a(e)}),[e]);var l=t<=1,u=t>=r,b=Object(k.useCallback)((function(){u||o((function(e){return e+1}))}),[u,o]),f=Object(k.useCallback)((function(){l||o((function(e){return e-1}))}),[l,o]);return{current:t,total:r,isFirst:l,isLast:u,next:b,prev:f,jump:a,init:i}}(n.page),o=Object(k.useCallback)((function(e){t.init(e.numPages)}),[t.init]),s=R(n.scale||1,[n.scale]),r=s.scale,c=s.zoomIn,i=s.zoomOut,a=s.resetZoom;return Object(h.jsx)("div",{css:Q},Object(h.jsx)(P.FlexBar,{border:!0},Object(h.jsx)(k.Fragment,{key:"left"},Object(h.jsx)("p",null,Object(h.jsx)("b",null,"PDF")),Object(h.jsx)(P.Separator,null),Object(h.jsx)(B,{onReset:a,onZoomIn:c,onZoomOut:i}),Object(h.jsx)(P.Separator,null),Object(h.jsx)(P.IconButton,{css:ee,onClick:t.prev,disabled:t.isFirst},Object(h.jsx)(P.Icons,{icon:"arrowleft"})),Object(h.jsx)("div",{css:oe},t.current," / ",t.total),Object(h.jsx)(P.IconButton,{css:ee,onClick:t.next,disabled:t.isLast},Object(h.jsx)(P.Icons,{icon:"arrowright"})))),Object(h.jsx)(E,{css:ne,defaultValue:n.offset},Object(h.jsx)(V.Document,{file:n.url,loading:$,onLoadSuccess:o},Object(h.jsx)(V.Page,{css:te,loading:$,pageNumber:t.current,scale:r}))))},Q=Object(h.css)(f||(f=W(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]))),ee=function(e){return Object(h.css)(d||(d=W(["\n  &[disabled] {\n    color: ",";\n    cursor: not-allowed;\n  }\n"],["\n  &[disabled] {\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),e.color.medium)},ne=Object(h.css)(j||(j=W(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]))),te=Object(h.css)(p||(p=W(["\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n\n  transform: translate(-50%, -50%);\n"],["\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n\n  border-radius: 1px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n\n  transform: translate(-50%, -50%);\n"]))),oe=Object(h.css)(m||(m=W(["\n  display: flex;\n  align-items: center;\n"],["\n  display: flex;\n  align-items: center;\n"]))),se=function(e){var n=e.tabs,t=Object(k.useState)(n[0].id),o=t[0],s=t[1];return Object(h.jsx)(P.Tabs,{absolute:!0,selected:o,actions:{onSelect:s}},n.map((function(e){return Object(h.jsx)("div",{key:e.id,id:e.id,title:e.name},e.offscreen||o===e.id?e.content:null)})))},re=function(){return(re=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var s in n=arguments[t])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},ce=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),s=0;for(n=0;n<t;n++)for(var r=arguments[n],c=0,i=r.length;c<i;c++,s++)o[s]=r[c];return o},ie=function(e){var n=e.config;if(!n||"length"in n&&0===n.length)return Object(h.jsx)(P.Placeholder,null,Object(h.jsx)(k.Fragment,null,"No designs found"),Object(h.jsx)(k.Fragment,null,"Learn how to"," ",Object(h.jsx)(P.Link,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));var t=ce(n instanceof Array?n:[n]).map((function(e,n){var t,o={id:"addon-designs-tab--"+n,name:e.name||e.type.toUpperCase(),offscreen:null===(t=e.offscreen)||void 0===t||t};switch(e.type){case"iframe":return re(re({},o),{content:Object(h.jsx)(I,{config:e})});case"figma":return re(re({},o),{content:Object(h.jsx)(A,{config:e}),offscreen:!1});case"pdf":return re(re({},o),{content:Object(h.jsx)(q,{config:e})});case"image":return re(re({},o),{content:Object(h.jsx)(U,{config:e})});case"link":return re(re({},o),{content:Object(h.jsx)(J,{config:e})})}return re(re({},o),{content:Object(h.jsx)(P.Placeholder,null,Object(h.jsx)(k.Fragment,null,"Invalid config type"),Object(h.jsx)(k.Fragment,null,"Config type you set is not supported. Please choose one from"," ",Object(h.jsx)(P.Link,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))})}));return 1===t.length?Object(h.jsx)("div",null,t[0].content):Object(h.jsx)(se,{tabs:t})},ae=function(e){var n=e.active,t=e.api,o=e.channel,s=Object(k.useState)(),r=s[0],c=s[1],i=Object(k.useState)(),a=i[0],l=i[1];return Object(k.useEffect)((function(){var e=function(e){l(e);var n=t.getParameters(e,"design");c((function(e){return n!==e?n:e}))};return o.on(w.UpdateConfig,c),o.on(C.STORY_CHANGED,e),function(){o.removeListener(w.UpdateConfig,c),o.removeListener(C.STORY_CHANGED,e)}}),[]),n?Object(h.jsx)(ie,{key:a,config:r}):null};g="panel",x.a.register(v,(function(e){var n=function(n){var t=n.active,o=n.key;return Object(h.jsx)(ae,{key:o,channel:x.a.getChannel(),api:e,active:t})};"tab"===g?x.a.add(y,{title:"Design",render:n,type:O.types.TAB,paramKey:"design",route:function(e){return"/design/"+e.storyId},match:function(e){return"design"===e.viewMode}}):x.a.addPanel(y,{title:"Design",paramKey:"design",render:n})}))},426:function(e,n,t){e.exports=t.p+"static/media/logo-with-text.39ee7ff9.svg"},427:function(e){e.exports=JSON.parse('{"name":"storybook-addon-designs","version":"5.4.2","description":"Storybook addon for embedding your design preview in addon panel","main":"cjs/index.js","module":"esm/index.js","types":"esm/index.d.ts","repository":"git@github.com:pocka/storybook-addon-designs.git","homepage":"https://github.com/pocka/storybook-addon-designs","author":"pocka <pockawoooh@gmail.com>","license":"MIT","files":["esm","cjs","blocks.js","register.js","register-tab.js","preset.js"],"devDependencies":{"@storybook/addon-docs":"^5.3.19","@storybook/addons":"^5.3.19","@storybook/client-api":"^5.3.19","@storybook/components":"^5.3.19","@storybook/core-events":"^5.3.19","@storybook/theming":"^5.3.19","@types/pdfjs-dist":"^2.0.0","@types/react":"^16.8.8","@types/webpack-env":"^1.13.9","react":"^16.8.4","typescript":"^3.7.0"},"peerDependencies":{"@storybook/addons":"^5.0.0 || ^6.0.0","@storybook/components":"^5.0.0 || ^6.0.0","@storybook/theming":"^5.0.0 || ^6.0.0","react":">=16.8.0"},"scripts":{"dev":"tsc --watch --preserveWatchOutput","build":"yarn build:esm && yarn build:cjs","build:esm":"tsc","build:cjs":"tsc --module commonjs --outDir cjs","test":"echo \'No tests\' && exit 0","clean":"rm -r esm cjs","prepublishOnly":"cp ../../README.md ./ && yarn build"},"dependencies":{"react-pdf":"^4.0.5"},"publishConfig":{"tag":"latest"}}')},429:function(e,n,t){t(430),t(573),t(1256),t(1305),t(1296),e.exports=t(1298)},492:function(e,n){}},[[429,1,2]]]);