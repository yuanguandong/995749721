(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8276],{24292:(i,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/js/browser",function(){return n(24713)}])},24713:(i,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>a,useTOC:()=>t});var e=n(86070),l=n(19422),h=n(72522),d=n(24756);let r={src:"/_next/static/media/hero.bfe8ba73.webp",height:900,width:1200,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAQAgCdASoIAAYAAkA4JagCdLoAArqMYnQoAP7il7cdqRV8lV+RXtOKwKeNL3rO8niTCFesGCBMQHz9aqFLtKDrULt4YAAA",blurWidth:8,blurHeight:6};function t(i){return[{value:"地址栏输入一个 url 开始，浏览器都做了什么工作？",id:"地址栏输入一个-url-开始浏览器都做了什么工作",depth:2},{value:"js 会阻塞 HTML 的解析过程吗？为什么？",id:"js-会阻塞-html-的解析过程吗为什么",depth:2},{value:"什么情况下会触发回流/重排？浏览器本身会有什么优化动作吗？",id:"什么情况下会触发回流重排浏览器本身会有什么优化动作吗",depth:2},{value:"如何尽量避免回流的出现？",id:"如何尽量避免回流的出现",depth:2},{value:"浏览器多进程架构的好处是什么?",id:"浏览器多进程架构的好处是什么",depth:2},{value:"容错性",id:"容错性",depth:3},{value:"安全性和沙盒性",id:"安全性和沙盒性",depth:3},{value:"每个进程可以拥有更多内存",id:"每个进程可以拥有更多内存",depth:3},{value:"z-index 的生效规则",id:"z-index-的生效规则",depth:2},{value:"只有定位元素才会生效",id:"只有定位元素才会生效",depth:3},{value:"层叠顺序",id:"层叠顺序",depth:3},{value:"同级比较",id:"同级比较",depth:3}]}n(88564);let a=(0,l.e)(function(i){let{toc:s=t(i)}=i,n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,d.R)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"Browser",placeholder:"blur",src:r})}),"\n",(0,e.jsx)("div",{className:"img-desc",children:"图：Mako Tsereteli"}),"\n","\n",(0,e.jsx)(n.h2,{id:s[0].id,children:s[0].value}),"\n",(0,e.jsx)(n.p,{children:"1.URL 解析"}),"\n",(0,e.jsx)(n.p,{children:"浏览器先去判断这个 URL 是否是正确的 URL，若是正确合法的 url, 那么浏览器进程会根据输入的内容进行下一步操作。"}),"\n",(0,e.jsx)(n.p,{children:"2.DNS 查询"}),"\n",(0,e.jsx)(n.p,{children:"通过根域名服务器->顶级域名服务器->二级权限域名服务器逐级进行迭代查询，到达最终的服务器"}),"\n",(0,e.jsx)(n.p,{children:"3、TCP 连接"}),"\n",(0,e.jsx)(n.p,{children:"在确定目标服务器的 IP 地址后，则经历三次握手建立 TCP 连接"}),"\n",(0,e.jsx)(n.p,{children:"4、发起 HTTP 请求"}),"\n",(0,e.jsx)(n.p,{children:"当建立 tcp 连接之后，就可以发送 http 请求到目标服务器\n请求的内容包括：请求行、请求头、请求主体"}),"\n",(0,e.jsx)(n.p,{children:"5、收到 http 响应请求"}),"\n",(0,e.jsx)(n.p,{children:"服务器收到请求后进行逻辑操作，处理完成之后返回一个 http 响应消息，包括：状态行、响应头、响应正文\n服务器响应之后，由于现在 http 默认开启长链接 keep-alive,当页面关闭之后，tcp 链接则会经过四次挥手完成断开"}),"\n",(0,e.jsx)(n.p,{children:"6、页面渲染"}),"\n",(0,e.jsx)(n.p,{children:"当浏览器接收到服务器响应的资源后，首先会对资源进行解析："}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"查看响应头的信息，根据不同的指示做对应处理，比如重定向，存储 cookie,解压 gzip,缓存资源等等"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"查看响应头的 Content-Type 的值，根据不同的资源类型采用不同的解析方式"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"解析 HTML,构建 DOM 树"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"解析 CSS, 生成 CSS 规则树"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"合并 DOM 树和 CSS 规则，生成 render 树"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"布局 render 树（Layout/reflow）,负责各元素尺寸、位置的计算"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"绘制 render 树（paint）,绘制页面像素信息"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(n.p,{children:"浏览器会将各层的信息发送给 GPU,GPU 会将各层合成（composite）,显示在屏幕上"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:s[1].id,children:s[1].value}),"\n",(0,e.jsx)(n.p,{children:"会，当 HTML 解析器碰到 script 标签的时候，它会停止 HTML 文档的解析从而转向 JavaScript 代码的加载，解析以及执行。因为 js 里会执行 document.wirte 等能改变 dom 的动作，html 的解析不得不等 js 执行完毕之后再进行解析"}),"\n",(0,e.jsx)(n.h2,{id:s[2].id,children:s[2].value}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"添加或删除元素"}),"\n",(0,e.jsx)(n.li,{children:"元素的尺寸大小"}),"\n",(0,e.jsx)(n.li,{children:"位置发生改变"}),"\n",(0,e.jsx)(n.li,{children:"内容改变"}),"\n",(0,e.jsx)(n.li,{children:"一开始渲染时"}),"\n",(0,e.jsx)(n.li,{children:"浏览器窗口大小改变时"}),"\n"]}),"\n",(0,e.jsx)(n.p,{children:"时会发生重排，当颜色变化时会发生回流，还有当 js 获取诸如"}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,e.jsx)(n.code,{children:(0,e.jsx)(n.span,{children:(0,e.jsx)(n.span,{children:"offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight"})})})}),"\n",(0,e.jsx)(n.p,{children:"也会发生重排和回流，原因是浏览器对于重排和回流做的优化的副作用引起的\n浏览器为了减少重排发生的频率，把重排的动作放在一个队列里，直到过了一段时间或者操作达到了一个阈值进行一次性清空队列的操作，而我们获取 offsetTop 肯定是希望拿到最新的值，所以浏览器不得不清空重绘和回流的队列"}),"\n",(0,e.jsx)(n.h2,{id:s[3].id,children:s[3].value}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"如果想设定元素的样式，通过改变元素的 class 类名 (尽可能在 DOM 树的最里层)"}),"\n",(0,e.jsx)(n.li,{children:"避免设置多项内联样式"}),"\n",(0,e.jsx)(n.li,{children:"应用元素的动画，使用 position 属性的 fixed 值或 absolute 值(如前文示例所提)"}),"\n",(0,e.jsx)(n.li,{children:"避免使用 table 布局，table 中每个元素的大小以及内容的改动，都会导致整个 table 的重新计算"}),"\n",(0,e.jsx)(n.li,{children:"对于那些复杂的动画，对其设置 position: fixed/absolute，尽可能地使元素脱离文档流，从而减少对其他元素的影响"}),"\n",(0,e.jsx)(n.li,{children:"使用 css3 硬件加速，可以让 transform、opacity、filters 这些动画不会引起回流重绘，比如做动画时，尽量不要使用 top,left，width , 尺寸大小，位置等属性的改变来做，而使用 transform 属性来做"}),"\n",(0,e.jsx)(n.li,{children:"避免使用 CSS 的 JavaScript 表达式"}),"\n",(0,e.jsx)(n.li,{children:"需要获取 offset 等属性的时候, 最好用一个变量缓存起来, 不要每次都去获取"}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:s[4].id,children:s[4].value}),"\n",(0,e.jsx)(n.h3,{id:s[5].id,children:s[5].value}),"\n",(0,e.jsx)(n.p,{children:"Chrome 会为每个 tab 单独分配一个属于它们的渲染进程（render process）。举个例子，假如你有三个 tab，你就会有三个独立的渲染进程。"}),"\n",(0,e.jsx)(n.p,{children:"当其中一个 tab 的崩溃时，你可以随时关闭这个 tab 并且其他 tab 不受到影响。可是如果所有的 tab 都跑在同一个进程的话，它们就会有连带关系，一个挂全部挂。"}),"\n",(0,e.jsx)(n.h3,{id:s[6].id,children:s[6].value}),"\n",(0,e.jsx)(n.p,{children:"因为操作系统可以提供方法让你限制每个进程拥有的能力，所以浏览器可以让某些进程不具备某些特定的功能。例如，由于 tab 渲染进程可能会处理来自用户的随机输入，所以 Chrome 限制了它们对系统文件随机读写的能力。"}),"\n",(0,e.jsx)(n.h3,{id:s[7].id,children:s[7].value}),"\n",(0,e.jsx)(n.p,{children:"因为每个进程都会分配一块独立的内存空间, 所以理所当然的, 每个进程都会有更多的内存。"}),"\n",(0,e.jsx)(n.h2,{id:s[8].id,children:s[8].value}),"\n",(0,e.jsx)(n.h3,{id:s[9].id,children:s[9].value}),"\n",(0,e.jsx)(n.p,{children:"z-index 这个属性并不是在所有的元素上都有效果。它仅仅只在定位元素（定义了 position 属性，且属性的值为非 static 值的元素）上有效果"}),"\n",(0,e.jsx)(n.h3,{id:s[10].id,children:s[10].value}),"\n",(0,e.jsx)(n.p,{children:"background/border —— 形成层叠上下文的元素的背景和边框，也是层叠上下文中的最低等级。"}),"\n",(0,e.jsx)(n.p,{children:"z-index —— 层叠上下文内有着 负 z-index 值 的子元素。"}),"\n",(0,e.jsx)(n.p,{children:"block 块级盒 —— 文档流中非行内非定位子元素。"}),"\n",(0,e.jsx)(n.p,{children:"float 浮动盒 —— 非定位浮动元素。"}),"\n",(0,e.jsx)(n.p,{children:"inline/inline-block 行内盒 —— 文档流中行内级别非定位子元素。"}),"\n",(0,e.jsx)(n.p,{children:"z-index: 0 —— 定位元素，这些元素将形成了新的层叠上下文。"}),"\n",(0,e.jsx)(n.p,{children:"z-index > 0 —— 定位元素。 层叠上下文中的最高等级。"}),"\n",(0,e.jsx)(n.p,{children:"所有的元素层级是按照上面的排序进行的, 也就是说 z-index > 0 的层级最高, 最靠近屏幕前的我们, 也就是观察者."}),"\n",(0,e.jsx)(n.h3,{id:s[11].id,children:s[11].value}),"\n",(0,e.jsx)(n.p,{children:"有的时候我们发现 z-index9999 居然比 z-index 100 更低? 为什么??"}),"\n",(0,e.jsx)(n.p,{children:"这时候我们要知道 z-index 是同级比较, 比如下面的例子"}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"javascript","data-word-wrap":"","data-copy":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"div1 z"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"index"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    div2 z"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"index"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"200"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    div3 z"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"index"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"999"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"div4 z"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"index"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"20"})]})]})}),"\n",(0,e.jsx)(n.p,{children:"展示的层级高度是怎样的顺序?"}),"\n",(0,e.jsx)(n.p,{children:"是 div4 > div3 > div2 > div1"}),"\n",(0,e.jsx)(n.p,{children:"因为 div1 和 div4 是同级的, div4 比整体的 div1 高."}),"\n",(0,e.jsx)(n.p,{children:"完整的写一下高度, 效果类似于："}),"\n",(0,e.jsx)(n.pre,{tabIndex:"0","data-language":"javascript","data-word-wrap":"","data-copy":"",children:(0,e.jsxs)(n.code,{children:[(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"div1"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"div2"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 200"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"div3"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" -"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 999"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,e.jsxs)(n.span,{children:[(0,e.jsx)(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"div4"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"20"}),(0,e.jsx)(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]})]})})]})},"/posts/js/browser",{filePath:"pages/posts/js/browser/index.mdx",timestamp:1732442721e3,pageMap:h.O,frontMatter:{slug:"js-browser",title:"浏览器原理问题",author:"Favori",date:"2022-01-11",hero:"./hero.webp",excerpt:"浏览器原理问题"},title:"浏览器原理问题"},"undefined"==typeof RemoteContent?t:RemoteContent.useTOC)},88564:(i,s,n)=>{"use strict";n.d(s,{A:()=>l});var e=n(86070);n(30758);let l=i=>{let{name:s}=i;return(0,e.jsx)("img",{src:"http://github.com/yuanguandong/code/blob/master/draw/".concat(s,".png?raw=true")})}}},i=>{var s=s=>i(i.s=s);i.O(0,[2195,636,6593,8792],()=>s(24292)),_N_E=i.O()}]);