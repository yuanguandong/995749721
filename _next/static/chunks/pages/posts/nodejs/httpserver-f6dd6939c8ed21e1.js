(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4577],{67486:(s,i,h)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/nodejs/httpserver",function(){return h(70444)}])},70444:(s,i,h)=>{"use strict";h.r(i),h.d(i,{default:()=>k,useTOC:()=>d});var n=h(86070),l=h(19422),e=h(72522),r=h(24756);let a={src:"/_next/static/media/hero.a08b9393.webp",height:665,width:893,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoAAwbE+0AA/uF7GJjFq9wJjlRL90ALGxmp9HN+1MEkZOQAAAA=",blurWidth:8,blurHeight:6};var t=h(39942);function d(s){return[{value:"如何使用NodeJs创建HTTP服务？",id:"如何使用nodejs创建http服务",depth:2}]}let k=(0,l.e)(function(s){let{toc:i=d(s)}=s,h={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...(0,r.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.p,{children:(0,n.jsx)(h.img,{alt:"Httpserver",placeholder:"blur",src:a})}),"\n",(0,n.jsx)("div",{className:"img-desc",children:"图：Nguyen Nhut"}),"\n",(0,n.jsx)(h.h2,{id:i[0].id,children:i[0].value}),"\n",(0,n.jsxs)(h.ol,{children:["\n",(0,n.jsx)(h.li,{children:"http-server.js"}),"\n"]}),"\n",(0,n.jsx)(h.pre,{icon:t.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" http"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" require"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'http'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"http."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"createServer"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"req"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"res"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    res."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"writeHead"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"200"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'Content-Type'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'text/plain'"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    })"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    res."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"end"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'Hello World'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"})."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"listen"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"80"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'127.0.0.1'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsx)(h.span,{children:" "}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'Server running at http://127.0.0.1:80/'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]})]})}),"\n",(0,n.jsxs)(h.ol,{start:"2",children:["\n",(0,n.jsx)(h.li,{children:"浏览器访问"}),"\n"]}),"\n",(0,n.jsx)(h.p,{children:(0,n.jsx)(h.a,{href:"http://127.0.0.1:80/",children:"http://127.0.0.1:80/"})}),"\n",(0,n.jsxs)(h.ol,{start:"3",children:["\n",(0,n.jsx)(h.li,{children:"用curl访问"}),"\n"]}),"\n",(0,n.jsxs)(h.p,{children:["curl -v ",(0,n.jsx)(h.a,{href:"http://127.0.0.1:80",children:"http://127.0.0.1:80"})]}),"\n",(0,n.jsx)(h.p,{children:"看一下请求报文"}),"\n",(0,n.jsx)(h.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"// 三次握手"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"* Rebuilt URL to: http://127.0.0.1:80/"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"*   Trying 127.0.0.1..."})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"* TCP_NODELAY set"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"// 客户端向服务端发送请求报文"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"> GET / HTTP/1.1"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"> Host: 127.0.0.1:80"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"> User-Agent: curl/7.54.0"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"> Accept: */*"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:">"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"// 服务端响应客户端内容"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"< HTTP/1.1 200 OK"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"< Content-Type: text/plain"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"< Date: Wed, 04 Aug 2021 15:55:55 GMT"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"< Connection: keep-alive"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"< Keep-Alive: timeout=5"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"< Transfer-Encoding: chunked"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"<"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"* Connection #0 to host 127.0.0.1 left intact"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"Hello World%"})})]})}),"\n",(0,n.jsxs)(h.ol,{start:"4",children:["\n",(0,n.jsx)(h.li,{children:"htttp-client.js"}),"\n"]}),"\n",(0,n.jsx)(h.pre,{icon:t.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" http"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" require"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'http'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsx)(h.span,{children:" "}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" options"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    hostname: "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'127.0.0.1'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    port: "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"80"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    path: "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'/'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    method: "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'GET'"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" req"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" http."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"request"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(options, ("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"res"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"`Status=${"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"res"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"statusCode"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}, Headers=${"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"JSON"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"stringify"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"res"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"headers"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:")"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}`"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    res."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"setEncoding"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'utf8'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    res."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"on"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'data'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", ("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"data"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(data)"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    })"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"})"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"req."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"end"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]})]})})]})},"/posts/nodejs/httpserver",{filePath:"pages/posts/nodejs/httpserver/index.mdx",timestamp:1732445328e3,pageMap:e.O,frontMatter:{slug:"nodejs-httpserver",title:"如何使用NodeJs创建HTTP服务？",author:"Favori",date:"2021-08-17",hero:"./hero.webp",excerpt:"如何使用NodeJs创建HTTP服务？"},title:"如何使用NodeJs创建HTTP服务？"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)}},s=>{var i=i=>s(s.s=i);s.O(0,[2195,636,6593,8792],()=>i(67486)),_N_E=s.O()}]);