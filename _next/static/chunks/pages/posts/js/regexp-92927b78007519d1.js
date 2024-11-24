(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9931],{12318:(e,d,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/js/regexp",function(){return s(85022)}])},85022:(e,d,s)=>{"use strict";s.r(d),s.d(d,{default:()=>c,useTOC:()=>l});var r=s(86070),h=s(19422),t=s(72522),n=s(24756);let i={src:"/_next/static/media/hero.10362055.webp",height:900,width:1200,blurDataURL:"data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoIAAYAAkA4JbACdDXAAUEYaKgA/vX4ln0Mwld+bAVAs0Q7Hxzk8SUKrIFV9nT82K7P/PVOOX4G2j/Qn/+WsL/wHW+LW9g8Z1ODjNa/Sdmf8ya0gAA=",blurWidth:8,blurHeight:6};function l(e){return[{value:"字符",id:"字符",depth:2},{value:"分组和引用",id:"分组和引用",depth:2},{value:"锚点/边界",id:"锚点边界",depth:2},{value:"数量表示",id:"数量表示",depth:2},{value:"预查断言",id:"预查断言",depth:2},{value:"特殊标志",id:"特殊标志",depth:2}]}s(88564);let c=(0,h.e)(function(e){let{toc:d=l(e)}=e,s={h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Regexp",placeholder:"blur",src:i})}),"\n",(0,r.jsx)("div",{className:"img-desc",children:"图：Peter Tarka"}),"\n","\n",(0,r.jsx)(s.h2,{id:d[0].id,children:d[0].value}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"表达式"}),(0,r.jsx)(s.th,{children:"描述"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"[abc]"}),(0,r.jsx)(s.td,{children:"字符集。匹配集合中所含的任一字符。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"[ ^abc]"}),(0,r.jsx)(s.td,{children:"否定字符集。匹配任何不在集合中的字符。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"[a-z]"}),(0,r.jsx)(s.td,{children:"字符范围。匹配指定范围内的任意字符。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"."}),(0,r.jsx)(s.td,{children:"匹配除换行符以外的任何单个字符。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\"}),(0,r.jsx)(s.td,{children:"转义字符。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\w"}),(0,r.jsx)(s.td,{children:"匹配任何字母数字，包括下划线（等价于[A-Za-z0-9_]）。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\W"}),(0,r.jsx)(s.td,{children:"匹配任何非字母数字（等价于[ ^a-za-z0-9_]）。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\d"}),(0,r.jsx)(s.td,{children:"数字。匹配任何数字。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\D"}),(0,r.jsx)(s.td,{children:"非数字。匹配任何非数字字符。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\s"}),(0,r.jsx)(s.td,{children:"空白。匹配任何空白字符，包括空格、制表符等。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\S"}),(0,r.jsx)(s.td,{children:"非空白。匹配任何非空白字符。"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:d[1].id,children:d[1].value}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"表达式"}),(0,r.jsx)(s.th,{children:"描述"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"(expression)"}),(0,r.jsx)(s.td,{children:"分组。匹配括号里的整个表达式。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"(?:expression)"}),(0,r.jsx)(s.td,{children:"非捕获分组。匹配括号里的整个字符串但不获取匹配结果，拿不到分组引用。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\num"}),(0,r.jsx)(s.td,{children:"对前面所匹配分组的引用。比如(\\d)\\1 可以匹配两个相同的数字，(Code)(Sheep)\\1\\2 则可以匹配 CodeSheepCodeSheep。"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:d[2].id,children:d[2].value}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"表达式"}),(0,r.jsx)(s.th,{children:"描述"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"^"}),(0,r.jsx)(s.td,{children:"匹配字符串或行开头。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"$"}),(0,r.jsx)(s.td,{children:"匹配字符串或行结尾。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\b"}),(0,r.jsx)(s.td,{children:"匹配单词边界。比如 Sheep\\b 可以匹配 CodeSheep 末尾的 Sheep，不能匹配 CodeSheepCode 中的 Sheep"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\\B"}),(0,r.jsx)(s.td,{children:"匹配非单词边界。比如 Code\\B 可以匹配 HelloCodeSheep 中的 Code，不能匹配 HelloCode 中的 Code。"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:d[3].id,children:d[3].value}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"表达式"}),(0,r.jsx)(s.th,{children:"描述"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"?"}),(0,r.jsx)(s.td,{children:"匹配前面的表达式 0 个或 1 个。即表示可选项。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"+"}),(0,r.jsx)(s.td,{children:"匹配前面的表达式至少 1 个。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"匹配前面的表达式 0 个或多个。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"|"}),(0,r.jsx)(s.td,{children:"或运算符。并集，可以匹配符号前后的表达式。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"{m}"}),(0,r.jsx)(s.td,{children:"匹配前面的表达式 m 个。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"{m,}"}),(0,r.jsx)(s.td,{children:"匹配前面的表达式最少 m 个。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"{m,n}"}),(0,r.jsx)(s.td,{children:"匹配前面的表达式最少 m 个，最多 n 个。"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:d[4].id,children:d[4].value}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"表达式"}),(0,r.jsx)(s.th,{children:"描述"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"(?=)"}),(0,r.jsx)(s.td,{children:"正向预查。比如 Code(?=Sheep)能匹配 CodeSheep 中的 Code，但不能匹配 CodePig 中的 Code。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"(?!)"}),(0,r.jsx)(s.td,{children:"正向否定预查。比如 Code(?!Sheep)不能匹配 CodeSheep 中的 Code，但能匹配 CodePig 中的 Code。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"(?<=)"}),(0,r.jsx)(s.td,{children:"反向预查。比如(?<=Code)Sheep 能匹配 CodeSheep 中的 Sheep，但不能匹配 ReadSheep 中的 Sheep。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"(?<!)"}),(0,r.jsx)(s.td,{children:"反向否定预查。比如(?<!Code)Sheep 不能匹配 CodeSheep 中的 Sheep，但能匹配 ReadSheep 中的 Sheep。"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:d[5].id,children:d[5].value}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"表达式"}),(0,r.jsx)(s.th,{children:"描述"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"/…/i"}),(0,r.jsx)(s.td,{children:"忽略大小写。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"/…/g"}),(0,r.jsx)(s.td,{children:"全局匹配。"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"/…/m"}),(0,r.jsx)(s.td,{children:"多行修饰符。用于多行匹配。"})]})]})]})]})},"/posts/js/regexp",{filePath:"pages/posts/js/regexp/index.mdx",timestamp:1732442721e3,pageMap:t.O,frontMatter:{slug:"js-regexp",title:"正则表达式",author:"Favori",date:"2018-07-30",hero:"./hero.webp",excerpt:"正则表达式一锅端"},title:"正则表达式"},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)},88564:(e,d,s)=>{"use strict";s.d(d,{A:()=>h});var r=s(86070);s(30758);let h=e=>{let{name:d}=e;return(0,r.jsx)("img",{src:"http://github.com/yuanguandong/code/blob/master/draw/".concat(d,".png?raw=true")})}}},e=>{var d=d=>e(e.s=d);e.O(0,[2195,636,6593,8792],()=>d(12318)),_N_E=e.O()}]);