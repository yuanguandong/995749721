(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3173],{73262:(e,i,d)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/other/cache",function(){return d(12324)}])},12324:(e,i,d)=>{"use strict";d.r(i),d.d(i,{default:()=>t,useTOC:()=>s});var n=d(86070),h=d(19422),c=d(72522),r=d(24756);let l={src:"/_next/static/media/hero.c4d7c07e.webp",height:1200,width:1600,blurDataURL:"data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoIAAYAAkA4JbACdAD0j1FkF8AA/vBKKWa6m1OEYcg3AIQfK4FrxEdqO6I4OC2DkUA/9kqvz63v7x6+1v7999QgAAA=",blurWidth:8,blurHeight:6};function s(e){return[{value:"缓存好处",id:"缓存好处",depth:2},{value:"缓存种类",id:"缓存种类",depth:2},{value:"强缓存",id:"强缓存",depth:2},{value:"如何设置强缓存？",id:"如何设置强缓存",depth:3},{value:"expires",id:"expires",depth:2},{value:"Cache-Control",id:"cache-control",depth:2},{value:"缓存位置",id:"缓存位置",depth:2},{value:"Service Worker",id:"service-worker",depth:3},{value:"Memory Cache",id:"memory-cache",depth:3},{value:"Disk Cache",id:"disk-cache",depth:3},{value:"协商缓存",id:"协商缓存",depth:2},{value:"Last-Modified / If-Modified-Since",id:"last-modified--if-modified-since",depth:3},{value:"Etag / If-None-Match",id:"etag--if-none-match",depth:3},{value:"缓存方案",id:"缓存方案",depth:2},{value:"强缓存与协商缓存的区别",id:"强缓存与协商缓存的区别",depth:2},{value:"刷新对于强缓存和协商缓存的影响",id:"刷新对于强缓存和协商缓存的影响",depth:2}]}d(88564);let t=(0,h.e)(function(e){let{toc:i=s(e)}=e,d={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.p,{children:(0,n.jsx)(d.img,{alt:"Cache",placeholder:"blur",src:l})}),"\n",(0,n.jsx)("div",{className:"img-desc",children:"图：Vivivian"}),"\n","\n",(0,n.jsx)(d.h2,{id:i[0].id,children:i[0].value}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"缓解服务器压力，不用每次都去请求数据"}),"\n",(0,n.jsx)(d.li,{children:"提升性能，打开本地资源肯定比服务器快"}),"\n",(0,n.jsx)(d.li,{children:"减少带宽消耗"}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:i[1].id,children:i[1].value}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"类型"}),(0,n.jsx)(d.th,{children:"描述"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"数据库缓存"}),(0,n.jsx)(d.td,{children:"当 web 应用关系复杂，数据表往上增长时，可以将查询后的数据放到内存中进行缓存，下次再查询时，就直接从内存中获取，从而提高响应速度"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"CDN 缓存"}),(0,n.jsx)(d.td,{children:"当我们发送一个 web 请求时，CDN 会帮我们计算去哪得到这些内容的路径短且快，这个是从网站管理员部署的，所以他们也可以将大家经常访问的内容放在 CDN 里，从而加快响应"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"代理服务器缓存"}),(0,n.jsx)(d.td,{children:"代理服务器缓存，根浏览器缓存性质类似，但是代理服务器缓存面向的群体更广，规模更大，它不只是一个用户服务，一般为大量用户提供服务，同一个副本会被重用多次，因此在减少响应时间方面很有效"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"浏览器缓存"}),(0,n.jsx)(d.td,{children:"每个浏览器都实现了 HTTP 缓存，我们通过浏览器使用 HTTP 协议与服务器交互的时候，浏览器就会根据一套与服务器约定的规则进行缓冲工作，当我们在浏览器中点击前进和后退时，利用的就是浏览器的缓存机制"})]})]})]}),"\n",(0,n.jsx)(d.p,{children:"所谓浏览器缓存其实就是指在本地使用的计算机中开辟一个内存区，同时也开辟一个硬盘区作为数据传输的缓冲区，然后用这个缓冲区来暂时保存用户以前访问过的信息。"}),"\n",(0,n.jsx)(d.p,{children:"浏览器缓存过程： 强缓存，协商缓存。"}),"\n",(0,n.jsx)(d.p,{children:"浏览器缓存位置一般分为四类： Service Worker—>Memory Cache—>Disk Cache—>Push Cache。"}),"\n",(0,n.jsx)(d.h2,{id:i[2].id,children:i[2].value}),"\n",(0,n.jsx)(d.p,{children:"强缓存是当我们访问 URL 的时候，不会向服务器发送请求，直接从缓存中读取资源，但是会返回 200 的状态码。"}),"\n",(0,n.jsx)(d.h3,{id:i[3].id,children:i[3].value}),"\n",(0,n.jsx)(d.p,{children:"我们第一次进入页面，请求服务器，然后服务器进行应答，浏览器会根据 response Header 来判断是否对资源进行缓存，如果响应头中 expires、pragma 或者 cache-control 字段，代表这是强缓存，浏览器就会把资源缓存在 memory cache 或 disk cache 中。"}),"\n",(0,n.jsx)(d.p,{children:"第二次请求时，浏览器判断请求参数，如果符合强缓存条件就直接返回状态码 200，从本地缓存中拿数据。否则把响应参数存在 request header 请求头中，看是否符合协商缓存，符合则返回状态码 304，不符合则服务器会返回全新资源。"}),"\n",(0,n.jsx)(d.h2,{id:i[4].id,children:i[4].value}),"\n",(0,n.jsx)(d.p,{children:"是 HTTP1.0 控制网页缓存的字段，值为一个时间戳，准确来讲是格林尼治时间，服务器返回该请求结果缓存的到期时间，意思是，再次发送请求时，如果未超过过期时间，直接使用该缓存，如果过期了则重新请求。\n有个缺点，就是它判断是否过期是用本地时间来判断的，本地时间是可以自己修改的。"}),"\n",(0,n.jsx)(d.h2,{id:i[5].id,children:i[5].value}),"\n",(0,n.jsx)(d.p,{children:"是 HTTP1.1 中控制网页缓存的字段，当 Cache-Control 都存在时，Cache-Control 优先级更高，主要取值为：\npublic：资源客户端和服务器都可以缓存。\nprivite：资源只有客户端可以缓存。\nno-cache：客户端缓存资源，但是是否缓存需要经过协商缓存来验证。\nno-store：不使用缓存。\nmax-age：缓存保质期。"}),"\n",(0,n.jsx)(d.p,{children:"Cache-Control 使用了 max-age 相对时间，解决了 expires 的问题。"}),"\n",(0,n.jsx)(d.h2,{id:i[6].id,children:i[6].value}),"\n",(0,n.jsx)(d.p,{children:"上面我们说，强缓存我们会把资源房放到 memory cache 和 disk cache 中，那什么资源放在 memory cache，什么资源放在 disk cache 中？"}),"\n",(0,n.jsx)(d.p,{children:"存存储图像和网页等资源主要缓存在 disk cache，操作系统缓存文件等资源大部分都会缓存在 memory cache 中。具体操作浏览器自动分配，看谁的资源利用率不高就分给谁。"}),"\n",(0,n.jsx)(d.p,{children:"查找浏览器缓存时会按顺序查找: Service Worker—>Memory Cache—>Disk Cache—>Push Cache。"}),"\n",(0,n.jsx)(d.h3,{id:i[7].id,children:i[7].value}),"\n",(0,n.jsx)(d.p,{children:"是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。"}),"\n",(0,n.jsx)(d.h3,{id:i[8].id,children:i[8].value}),"\n",(0,n.jsx)(d.p,{children:"内存中的缓存，主要包含的是当前中页面中已经抓取到的资源，例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快，内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。"}),"\n",(0,n.jsx)(d.h3,{id:i[9].id,children:i[9].value}),"\n",(0,n.jsx)(d.p,{children:"存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。\n在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。绝大部分的缓存都来自 Disk Cache。\nmemory cache 要比 disk cache 快的多。举个例子：从远程 web 服务器直接提取访问文件可能需要 500 毫秒(半秒)，那么磁盘访问可能需要 10-20 毫秒，而内存访问只需要 100 纳秒，更高级的还有 L1 缓存访问(最快和最小的 CPU 缓存)只需要 0.5 纳秒。"}),"\n",(0,n.jsx)(d.h2,{id:i[10].id,children:i[10].value}),"\n",(0,n.jsx)(d.p,{children:"协商缓存就是强缓存失效后，浏览器携带缓存标识向服务器发送请求，由服务器根据缓存标识来决定是否使用缓存的过程。"}),"\n",(0,n.jsx)(d.p,{children:"主要有以下两种情况："}),"\n",(0,n.jsx)(d.p,{children:"协商缓存生效，返回 304"}),"\n",(0,n.jsx)(d.p,{children:"协商缓存失效，返回 200 和请求结果"}),"\n",(0,n.jsx)(d.p,{children:"如何设置协商缓存？"}),"\n",(0,n.jsx)(d.h3,{id:i[11].id,children:i[11].value}),"\n",(0,n.jsx)(d.p,{children:"Last-Modified 是服务器响应请求时，返回该资源文件在服务器最后被修改的时间。"}),"\n",(0,n.jsx)(d.p,{children:"If-Modified-Since 则是客户端再次发起该请求时，携带上次请求返回的 Last-Modified 值，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有 If-Modified-Since 字段，则会根据 If-Modified-Since 的字段值与该资源在服务器的最后被修改时间做对比，若服务器的资源最后被修改时间大于 If-Modified-Since 的字段值，则重新返回资源，状态码为 200；否则则返回 304，代表资源无更新，可继续使用缓存文件。"}),"\n",(0,n.jsx)(d.h3,{id:i[12].id,children:i[12].value}),"\n",(0,n.jsx)(d.p,{children:"Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)。"}),"\n",(0,n.jsx)(d.p,{children:"If-None-Match 是客户端再次发起该请求时，携带上次请求返回的唯一标识 Etag 值，通过此字段值告诉服务器该资源上次请求返回的唯一标识值。服务器收到该请求后，发现该请求头中含有 If-None-Match，则会根据 If-None-Match 的字段值与该资源在服务器的 Etag 值做对比，一致则返回 304，代表资源无更新，继续使用缓存文件；不一致则重新返回资源文件，状态码为 200。"}),"\n",(0,n.jsxs)(d.blockquote,{children:["\n",(0,n.jsx)(d.p,{children:"Etag / If-None-Match 优先级高于 Last-Modified / If-Modified-Since，同时存在则只有 Etag / If-None-Match 生效。"}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:i[13].id,children:i[13].value}),"\n",(0,n.jsx)(d.p,{children:"目前的项目大多使用这种缓存方案的："}),"\n",(0,n.jsx)(d.p,{children:"HTML: 协商缓存；"}),"\n",(0,n.jsx)(d.p,{children:"css、js、图片：强缓存，文件名带上 hash。"}),"\n",(0,n.jsx)(d.h2,{id:i[14].id,children:i[14].value}),"\n",(0,n.jsxs)(d.ol,{children:["\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"强缓存不发请求到服务器，所以有时候资源更新了浏览器还不知道，但是协商缓存会发请求到服务器，所以资源是否更新，服务器肯定知道。"}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"大部分 web 服务器都默认开启协商缓存。"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:i[15].id,children:i[15].value}),"\n",(0,n.jsxs)(d.ol,{children:["\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"当 ctrl+f5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存。"}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"当 f5 刷新网页时，跳过强缓存，但是会检查协商缓存。"}),"\n"]}),"\n",(0,n.jsxs)(d.li,{children:["\n",(0,n.jsx)(d.p,{children:"浏览器地址栏中写入 URL，回车 浏览器发现缓存中有这个文件了，不用继续请求了，直接去缓存拿。（最快）"}),"\n"]}),"\n"]})]})},"/posts/other/cache",{filePath:"pages/posts/other/cache/index.mdx",timestamp:1732445328e3,pageMap:c.O,frontMatter:{slug:"other-cache",title:"前端缓存",author:"Favori",date:"2021-02-28",hero:"./hero.webp",excerpt:"对于性能优化离不开缓存"},title:"前端缓存"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},88564:(e,i,d)=>{"use strict";d.d(i,{A:()=>h});var n=d(86070);d(30758);let h=e=>{let{name:i}=e;return(0,n.jsx)("img",{src:"http://github.com/yuanguandong/code/blob/master/draw/".concat(i,".png?raw=true")})}}},e=>{var i=i=>e(e.s=i);e.O(0,[2195,636,6593,8792],()=>i(73262)),_N_E=e.O()}]);