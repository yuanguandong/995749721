(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{SGPm:function(t,e,r){"use strict";var a,n,o,i,l,s,b,c,p,u,d,x,g,m,f,h,j,w,O=r("7Lum"),v=r("jaJm"),y=(r("CVK7"),r("xwgP")),k=r("ZVDZ"),L=r("Wbzz"),z=r("tOra"),A=r("7iz/"),S=r("P/4x"),q=r("M+iO");e.a=function(t){var e=t.articles,r=t.alwaysShowAllDetails;if(!e)return null;var a=1===e.length,n=Object(y.useContext)(q.a),o=n.gridLayout,i=void 0===o?"tiles":o,l=n.hasSetGridLayout,s=n.getGridLayout,b=e.reduce((function(t,e,r,a){return r%2==0&&t.push(a.slice(r,r+2)),t}),[]);return Object(y.useEffect)((function(){return s()}),[]),Object(k.jsx)(J,{style:{opacity:l?1:0},alwaysShowAllDetails:r},b.map((function(t,e){var r=e%2!=0,n=e%2!=1;return Object(k.jsx)(E,{key:e,gridLayout:i,hasOnlyOneArticle:a,reverse:r},Object(k.jsx)(D,{article:t[0],narrow:r}),Object(k.jsx)(D,{article:t[1],narrow:n}))})))};var D=function(t){var e=t.article,r=t.narrow;if(!e)return null;var a=Object(y.useContext)(q.a).gridLayout,n=r&&e.title.length>35,o=r?e.hero.narrow:e.hero.regular,i=o&&0!==Object.keys(o).length&&o.constructor===Object;return Object(k.jsx)(_,{to:e.slug,"data-a11y":"false"},Object(k.jsx)(K,{gridLayout:a},Object(k.jsx)(M,{narrow:r,gridLayout:a},i?Object(k.jsx)(A.c,{src:o}):Object(k.jsx)(A.a,null)),Object(k.jsx)("div",null,Object(k.jsx)(R,{dark:!0,hasOverflow:n,gridLayout:a},e.title),Object(k.jsx)(T,{narrow:r,hasOverflow:n,gridLayout:a},e.excerpt),Object(k.jsx)(W,null,e.date," · ",e.timeToRead," min read"))))},C=Object(k.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",S.a.phablet(a||(a=Object(O.a)(["\n    -webkit-line-clamp: 3;\n  "]))),""),G={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},J=Object(v.a)("div",{target:"e14bbv6l0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&G}),""),P=function(t){return Object(k.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",S.a.desktop_medium(n||(n=Object(O.a)(["\n    grid-template-columns: 1fr 1fr;\n  "])))," ",S.a.tablet(o||(o=Object(O.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]))),"")},V=function(t){return Object(k.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",S.a.desktop(i||(i=Object(O.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "])))," ",S.a.tablet(l||(l=Object(O.a)(["\n    grid-template-columns: 1fr;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",S.a.phablet(s||(s=Object(O.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))),"")},Y=function(t){return Object(k.css)("position:relative;",S.a.tablet(b||(b=Object(O.a)(["\n    margin-bottom: 60px;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",S.a.phablet(c||(c=Object(O.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))),"")},Z=function(t){return Object(k.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},E=Object(v.a)("div",{target:"e14bbv6l1"})((function(t){return"tiles"===t.gridLayout?P:Z}),""),K=Object(v.a)("div",{target:"e14bbv6l2"})((function(t){return"rows"===t.gridLayout?V:Y}),""),M=Object(v.a)("div",{target:"e14bbv6l3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",S.a.tablet(p||(p=Object(O.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "])))," ",S.a.phablet(u||(u=Object(O.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]))),""),R=Object(v.a)(z.a.h2,{target:"e14bbv6l4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",C,";",S.a.desktop(d||(d=Object(O.a)(["\n    margin-bottom: 15px;\n  "])))," ",S.a.tablet(x||(x=Object(O.a)(["\n    font-size: 24px;  \n  "])))," ",S.a.phablet(g||(g=Object(O.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]))),""),T=Object(v.a)("p",{target:"e14bbv6l5"})(C,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",S.a.desktop(m||(m=Object(O.a)(["\n    display: -webkit-box;\n  "])))," ",S.a.phablet(f||(f=Object(O.a)(["\n    margin-bottom: 15px;\n  "])))," ",S.a.phablet(h||(h=Object(O.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]))),""),W=Object(v.a)("div",{target:"e14bbv6l6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",S.a.phablet(j||(j=Object(O.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]))),""),_=Object(v.a)(L.Link,{target:"e14bbv6l7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",M,",&:focus ",M,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",S.a.phablet(w||(w=Object(O.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "])),M),"")}}]);
//# sourceMappingURL=4041a54c-400b6c8e699c466ce06e.js.map