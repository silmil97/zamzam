"use strict";(self.webpackChunkzamzam_contentful=self.webpackChunkzamzam_contentful||[]).push([[561],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),A=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let A=0;A<e.length;A++){const c=e[A];s&&t.test(c)?(e=e.slice(0,A)+"-"+e.slice(A),s=!1,l=i,i=!0,A++):i&&l&&a.test(c)?(e=e.slice(0,A-1)+"-"+e.slice(A-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,A.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(A,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return w},S:function(){return P},_:function(){return l},a:function(){return i},b:function(){return o},g:function(){return d},h:function(){return A}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const A=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function o(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,A){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),A&&(c.objectPosition=A);const o=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return o}const m=["children"],u=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(u,i({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:A}=e,c=l(e,p);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:A?t:void 0,"data-src":A?void 0:t,srcSet:A?a:void 0,"data-srcset":A?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const A=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:A,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:A})})),c):c};var E;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const y=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,y);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],v=["style","className"],B=e=>e.replace(/\n/g,""),j=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:s().object.isRequired,alt:j},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],Q=["style","className"],z=new Set;let S,I;const R=function(e){let{as:t="div",image:n,style:s,backgroundColor:o,className:d,class:m,onStartLoad:u,onLoad:g,onError:p}=e,h=l(e,k);const{width:f,height:b,layout:E}=n,y=c(f,b,E),{style:w,className:x}=y,N=l(y,Q),v=(0,r.useRef)(),B=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const j=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(E,f,b);return(0,r.useEffect)((()=>{S||(S=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&A())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(B);if(I&&z.has(B))return;let t,r;return S.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;v.current&&(v.current.innerHTML=a(i({isLoading:!0,isLoaded:z.has(B),image:n},h)),z.has(B)||(t=requestAnimationFrame((()=>{v.current&&(r=l(v.current,B,z,s,u,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{z.has(B)&&I&&(v.current.innerHTML=I(i({isLoading:z.has(B),isLoaded:z.has(B),image:n},h)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},N,{style:i({},w,s,{backgroundColor:o}),className:`${x}${d?` ${d}`:""}`,ref:v,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},G=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));G.propTypes=C,G.displayName="GatsbyImage";const L=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function F(e){return function(t){let{src:a,__imageData:n,__error:s}=t,A=l(t,L);return s&&console.warn(s),n?r.createElement(e,i({image:n},A)):(console.warn("Image not loaded",a),null)}}const Y=F((function(e){let{as:t="div",className:a,class:n,style:s,image:A,loading:m="lazy",imgClassName:u,imgStyle:p,backgroundColor:h,objectFit:f,objectPosition:b}=e,E=l(e,N);if(!A)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=i({objectFit:f,objectPosition:b,backgroundColor:h},p);const{width:y,height:j,layout:C,images:k,placeholder:Q,backgroundColor:z}=A,S=c(y,j,C),{style:I,className:R}=S,G=l(S,v),L={fallback:void 0,sources:[]};return k.fallback&&(L.fallback=i({},k.fallback,{srcSet:k.fallback.srcSet?B(k.fallback.srcSet):void 0})),k.sources&&(L.sources=k.sources.map((e=>i({},e,{srcSet:B(e.srcSet)})))),r.createElement(t,i({},G,{style:i({},I,s,{backgroundColor:h}),className:`${R}${a?` ${a}`:""}`}),r.createElement(g,{layout:C,width:y,height:j},r.createElement(w,i({},d(Q,!1,C,y,j,z,f,b))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:u},E,o("eager"===m,!1,L,m,p)))))})),D=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},M=new Set(["fixed","fullWidth","constrained"]),T={src:s().string.isRequired,alt:j,width:D,height:D,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};Y.displayName="StaticImage",Y.propTypes=T;const P=F(G);P.displayName="StaticImage",P.propTypes=T},8674:function(e,t,a){a.d(t,{Z:function(){return A}});var r=a(7294),n=a(4160),s=a(7896),i=a.p+"static/logo_f_p-removebg-preview-511083c6e6f83b09173c79c96850b853.png";var l=function(){const[e,t]=r.useState(!1);return r.createElement("nav",{className:"w-screen flex fixed z-10 flex-wrap items-center justify-between bg-primary mb-3"},r.createElement("div",{className:"w-full px-4 h-full mx-auto flex flex-wrap items-center justify-between"},r.createElement("div",{className:"w-full relative bg-primary  flex justify-between md:w-auto md:static md:block md:justify-start"},r.createElement(n.rU,{to:"/",className:"text-sm flex font-bold leading-relaxed mr-4 whitespace-nowrap uppercase ",href:"#pablo"},r.createElement("img",{className:"w-16 py-1",src:i,alt:"Zamzam logo"})),r.createElement("button",{className:" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block md:hidden outline-none focus:outline-none",type:"button",onClick:()=>t(!e)},r.createElement("div",{className:e?"open":" ",id:"nav-icon4"},r.createElement("span",null),r.createElement("span",null),r.createElement("span",null)))),r.createElement("div",{className:"md:flex flex-grow items-center"+(e?" flex":" hidden"),id:"example-navbar-danger"},r.createElement("ul",{className:"flex flex-col h-full md:flex-row list-none md:ml-auto"},r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{to:"/",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary",href:"#pablo"},r.createElement("span",{className:"ml-2"},"Home"))),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{to:"/speisekarte",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary",href:"#pablo"},r.createElement("span",{className:"ml-2"},"Speisekarte"))),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{to:"/catering",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary",href:"#pablo"},r.createElement("span",{className:"ml-2"},"Catering"))),r.createElement("li",{className:"nav-item"},r.createElement(n.rU,{to:"/kontakt",className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-b-4 hover:border-b-tertiary",href:"#pablo"},r.createElement("span",{className:"ml-2"},"Kontakt")))))))};function A(e){let{children:t}=e;const{pathname:a}=(0,s.useLocation)();return r.createElement(r.Fragment,null,r.createElement("header",null,r.createElement(l,null)),t,r.createElement("footer",{className:"/"===a?"relative text-white":"relative"},r.createElement(n.rU,{to:"/impressum",className:"absolute bottom-2 right-2"},"Impressum"),r.createElement(n.rU,{to:"/datenschutz",className:"absolute bottom-2 right-24"},"Datenschutz")))}},738:function(e,t,a){a.r(t);var r=a(7294),n=a(8032),s=a(8674);t.default=function(){return r.createElement(s.Z,null,r.createElement("div",{className:" h-screen w-screen"},r.createElement("div",{className:"h-10 w-full"}),r.createElement("div",{className:"bg-primary md:w-8/12 md:mx-auto mt-14 pb-10 mx-3"},r.createElement("h1",{className:"text-4xl text-center my-10 font-charm"},r.createElement("span",{className:"text-tertiary"},"T"),"agan"," ",r.createElement("span",{className:"text-tertiary"},"C"),"atering"),r.createElement(n.S,{className:"ml-3 float-right",src:"../images/Falafel1.jpg",alt:"Falafel",placeholder:"blurred",quality:50,layout:"fixed",width:300,height:300,__imageData:a(4423)}),r.createElement("p",{className:"m-3"},"Wir bieten Ihnen eine unglaubliche Auswahl an authentischen orientalischen Gerichten, die mit modernen Kochtechniken kombiniert werden, um Ihnen einzigartige Geschmackserlebnisse zu bieten. Unser Kochteam besteht aus erfahrenen, talentierten Köchen, die das Beste aus jedem Gericht herausholen. Unser Anspruch ist es, Ihnen ein unvergessliches Geschmackserlebnis zu bieten."),r.createElement(n.S,{className:"float-left mt-16 mx-3",src:"../images/Kibbah.jpg",alt:"Buffet",placeholder:"blurred",quality:50,layout:"fixed",width:250,height:250,__imageData:a(6582)}),r.createElement("p",{className:"mt-16 m-3"},"Unser Catering-Service bietet Ihnen eine Vielzahl von Gerichten, die für jeden Geschmack etwas zu bieten haben. Wir bieten Ihnen die Möglichkeit, ein einzigartiges Menü zu kreieren, das Ihren speziellen Anforderungen entspricht. Unser Catering-Service ist perfekt für Veranstaltungen jeder Art, ob es sich um eine private Party, einen Geburtstag, eine Hochzeit oder eine Firmenfeier handelt."),r.createElement("p",{className:"m-3 mt-16"},"Wenn Sie ein professionelles Catering für Ihre Veranstaltung benötigen, zögern Sie nicht, uns zu kontaktieren. Unser Kundenservice ist jederzeit für Sie da, um Ihnen bei allen Fragen zu helfen. Rufen Sie uns einfach unter +49 551 38103738 an oder schicken Sie uns eine E-Mail an info@tagan-catering.de. "),r.createElement("p",{className:"m-3 mt-16"},"Gönnen Sie sich und Ihren Gästen ein unvergessliches Geschmackserlebnis und wählen Sie Tagan Catering, wenn es um das perfekte Catering geht. Wir freuen uns auf Ihre Anfrage!"))))}},6582:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAcnZ1zujQpZ5gugP/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQIAAxEiEjH/2gAIAQEAAQUCdyGHa4yyz7XpnECg1BRvgNP/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEhP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEP/aAAgBAgEBPwFxi//EAB0QAAICAgMBAAAAAAAAAAAAAAABAiERMRAiQWH/2gAIAQEABj8CxGjevTrOvj4p7osi2hoyz//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExUUFh/9oACAEBAAE/Iem2XsHurdG/kMGhZ8IM3rZFSGXsGGaHxL8GCeKByWFG5//aAAwDAQACAAMAAAAQSChD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxC5jI5R/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQIRH/2gAIAQIBAT8Qb2DlBk//xAAfEAEAAgICAgMAAAAAAAAAAAABABEhMVFhQYGhwfD/2gAIAQEAAT8QrAYqQtR0AwXKu6EG8+9wfx4LMuJcWsjXrr9zGgqoqMffllAxSA4+IFBc3dRBVApgal3W1b6n/9k="},"images":{"fallback":{"src":"/zamzam/static/41160cce515fb5afa994c6d63d117fe7/58643/Kibbah.jpg","srcSet":"/zamzam/static/41160cce515fb5afa994c6d63d117fe7/58643/Kibbah.jpg 250w,\\n/zamzam/static/41160cce515fb5afa994c6d63d117fe7/8d1f8/Kibbah.jpg 500w","sizes":"250px"},"sources":[{"srcSet":"/zamzam/static/41160cce515fb5afa994c6d63d117fe7/83df6/Kibbah.webp 250w,\\n/zamzam/static/41160cce515fb5afa994c6d63d117fe7/84145/Kibbah.webp 500w","type":"image/webp","sizes":"250px"}]},"width":250,"height":250}')},4423:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFBgP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAH0zboeV1Jh0nOF5pCX/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAAxESBBNB/9oACAEBAAEFAr3Kz3sacoYsxA5EetbEsGrrQmv/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/AWIr/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPwFmjn//xAAhEAABAgQHAAAAAAAAAAAAAAAAAQIQETFBEhMhMlFxgf/aAAgBAQAGPwLLZ7CxTdc6NDC4VqUmcn//xAAdEAADAQACAwEAAAAAAAAAAAAAAREhQcExUWGx/9oACAEBAAE/IeHHK3Rzk81H2aexG71KuhpOBLMIgmr8KJawF0qbPa2f/9oADAMBAAIAAwAAABDL3wL/xAAZEQEBAQADAAAAAAAAAAAAAAABABExQVH/2gAIAQMBAT8QF5LPF3ldv//EABgRAQEBAQEAAAAAAAAAAAAAAAEAMRFB/9oACAECAQE/ENchGN5gv//EAB8QAQEAAgIBBQAAAAAAAAAAAAERACFRoTFBYXGBkf/aAAgBAQABPxAU8beDrh9ZIDgCWacdIwpZX9y4i1etEeneFi4qK9d4XVTepv3znxRGK5H0c+CUFTIKhW1XP//Z"},"images":{"fallback":{"src":"/zamzam/static/394613419153ed0abda6d0b9d5cfcbd1/da0e7/Falafel1.jpg","srcSet":"/zamzam/static/394613419153ed0abda6d0b9d5cfcbd1/da0e7/Falafel1.jpg 300w,\\n/zamzam/static/394613419153ed0abda6d0b9d5cfcbd1/6c36f/Falafel1.jpg 600w","sizes":"300px"},"sources":[{"srcSet":"/zamzam/static/394613419153ed0abda6d0b9d5cfcbd1/7f844/Falafel1.webp 300w,\\n/zamzam/static/394613419153ed0abda6d0b9d5cfcbd1/c348a/Falafel1.webp 600w","type":"image/webp","sizes":"300px"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-catering-jsx-c4541030dc1a7fab123a.js.map