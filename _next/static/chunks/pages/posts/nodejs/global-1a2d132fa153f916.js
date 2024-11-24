(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2261],{37098:(i,s,h)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/nodejs/global",function(){return h(22584)}])},22584:(i,s,h)=>{"use strict";h.r(s),h.d(s,{default:()=>k,useTOC:()=>t});var n=h(86070),l=h(19422),e=h(72522),d=h(24756);let a={src:"/_next/static/media/hero.1682e905.webp",height:652,width:878,blurDataURL:"data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAYAAkA4JagCdAEPAKk3AAD++LjdyYNJHfZf3N+hX1tcvyOd7SceAAA=",blurWidth:8,blurHeight:6};var r=h(39942);function t(i){return[{value:"全局对象解析",id:"全局对象解析",depth:2},{value:"全局对象和全局变量",id:"全局对象和全局变量",depth:2},{value:"__filename",id:"__filename",depth:2},{value:"__dirname",id:"__dirname",depth:2},{value:"setTimeout(cb, ms)",id:"settimeoutcb-ms",depth:2},{value:"clearTimeout",id:"cleartimeout",depth:2},{value:"setInterval",id:"setinterval",depth:2},{value:"clearInterval",id:"clearinterval",depth:2},{value:"console",id:"console",depth:2},{value:"process",id:"process",depth:2},{value:"退出的状态码",id:"退出的状态码",depth:3},{value:"看看这段代码输出什么",id:"看看这段代码输出什么",depth:2}]}let k=(0,l.e)(function(i){let{toc:s=t(i)}=i,h={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...(0,d.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.p,{children:(0,n.jsx)(h.img,{alt:"Global",placeholder:"blur",src:a})}),"\n",(0,n.jsx)("div",{className:"img-desc",children:"图：Nguyen Nhut"}),"\n",(0,n.jsx)(h.h2,{id:s[0].id,children:s[0].value}),"\n",(0,n.jsx)(h.p,{children:"JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。"}),"\n",(0,n.jsx)(h.p,{children:"在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。"}),"\n",(0,n.jsx)(h.p,{children:"在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。"}),"\n",(0,n.jsx)(h.h2,{id:s[1].id,children:s[1].value}),"\n",(0,n.jsx)(h.p,{children:"global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量："}),"\n",(0,n.jsx)(h.p,{children:"在最外层定义的变量；\n全局对象的属性；\n隐式定义的变量（未定义直接赋值的变量）。\n当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。"}),"\n",(0,n.jsx)(h.p,{children:"注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。"}),"\n",(0,n.jsx)(h.h2,{id:s[2].id,children:s[2].value}),"\n",(0,n.jsx)(h.p,{children:"__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。"}),"\n",(0,n.jsx)(h.pre,{icon:r.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(h.code,{children:(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"( __filename );"})]})})}),"\n",(0,n.jsx)(h.h2,{id:s[3].id,children:s[3].value}),"\n",(0,n.jsx)(h.p,{children:"__dirname 表示当前执行脚本所在的目录。"}),"\n",(0,n.jsx)(h.pre,{icon:r.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(h.code,{children:(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"( __dirname );"})]})})}),"\n",(0,n.jsx)(h.h2,{id:s[4].id,children:s[4].value}),"\n",(0,n.jsx)(h.p,{children:"setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。"}),"\n",(0,n.jsx)(h.p,{children:"返回一个代表定时器的句柄值。"}),"\n",(0,n.jsx)(h.pre,{icon:r.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" printHello"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(){"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"   console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"( "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Hello, World!"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// 两秒后执行以上函数"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"setTimeout"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(printHello, "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"2000"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(h.span,{children:" "})]})}),"\n",(0,n.jsx)(h.h2,{id:s[5].id,children:s[5].value}),"\n",(0,n.jsx)(h.h2,{id:s[6].id,children:s[6].value}),"\n",(0,n.jsx)(h.h2,{id:s[7].id,children:s[7].value}),"\n",(0,n.jsx)(h.h2,{id:s[8].id,children:s[8].value}),"\n",(0,n.jsx)(h.h2,{id:s[9].id,children:s[9].value}),"\n",(0,n.jsx)(h.p,{children:"process 是一个全局变量，即 global 对象的属性。"}),"\n",(0,n.jsx)(h.p,{children:"它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。下面将会介绍 process 对象的一些最常用的成员方法。"}),"\n",(0,n.jsxs)(h.ol,{children:["\n",(0,n.jsxs)(h.li,{children:["\n",(0,n.jsx)(h.p,{children:"exit\n当进程准备退出时触发。"}),"\n"]}),"\n",(0,n.jsxs)(h.li,{children:["\n",(0,n.jsx)(h.p,{children:"beforeExit\n当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 ‘beforeExit’ 的监听器可以异步调用，这样 node 就会继续执行。"}),"\n"]}),"\n",(0,n.jsxs)(h.li,{children:["\n",(0,n.jsx)(h.p,{children:"uncaughtException\n当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。"}),"\n"]}),"\n",(0,n.jsxs)(h.li,{children:["\n",(0,n.jsx)(h.p,{children:"Signal 事件\n当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(h.pre,{icon:r.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"process."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"on"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'exit'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"code"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  // 以下代码永远不会执行"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  setTimeout"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"该代码不会执行"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }, "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"0"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"   "})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'退出码为:'"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", code);"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"});"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"程序执行结束"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(h.span,{children:" "})]})}),"\n",(0,n.jsx)(h.h3,{id:s[10].id,children:s[10].value}),"\n",(0,n.jsxs)(h.ol,{children:["\n",(0,n.jsx)(h.li,{children:"Uncaught Fatal Exception\n有未捕获异常，并且没有被域或 uncaughtException 处理函数处理。"}),"\n"]}),"\n",(0,n.jsx)(h.p,{children:"3	Internal JavaScript Parse Error\nJavaScript的源码启动 Node 进程时引起解析错误。非常罕见，仅会在开发 Node 时才会有。"}),"\n",(0,n.jsx)(h.p,{children:"4	Internal JavaScript Evaluation Failure\nJavaScript 的源码启动 Node 进程，评估时返回函数失败。非常罕见，仅会在开发 Node 时才会有。"}),"\n",(0,n.jsx)(h.p,{children:"5	Fatal Error\nV8 里致命的不可恢复的错误。通常会打印到 stderr ，内容为： FATAL ERROR"}),"\n",(0,n.jsx)(h.p,{children:"6	Non-function Internal Exception Handler\n未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用。"}),"\n",(0,n.jsx)(h.p,{children:"7	Internal Exception Handler Run-Time Failure\n未捕获的异常， 并且异常处理函数处理时自己抛出了异常。例如，如果 process.on(‘uncaughtException’) 或 domain.on(‘error’) 抛出了异常。"}),"\n",(0,n.jsx)(h.p,{children:"9	Invalid Argument\n可能是给了未知的参数，或者给的参数没有值。"}),"\n",(0,n.jsx)(h.p,{children:"10	Internal JavaScript Run-Time Failure\nJavaScript的源码启动 Node 进程时抛出错误，非常罕见，仅会在开发 Node 时才会有。"}),"\n",(0,n.jsx)(h.p,{children:"12	Invalid Debug Argument\n设置了参数–debug 和/或 –debug-brk，但是选择了错误端口。"}),"\n",(0,n.jsxs)(h.blockquote,{children:["\n",(0,n.jsx)(h.p,{children:"128	Signal Exits\n如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP，那么退出代码就是128 加信号代码。这是标准的 Unix 做法，退出信号代码放在高位。"}),"\n"]}),"\n",(0,n.jsx)(h.pre,{icon:r.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// 输出到终端"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"process.stdout."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"write"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Hello World!"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" +"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"\\n"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// 通过参数读取"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"process.argv."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"forEach"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"val"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"index"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"array"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"   console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(index "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"+"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ': '"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" +"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" val);"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"});"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// 获取执行路局"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(process.execPath);"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" "})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// 平台信息"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(process.platform);"})]}),"\n",(0,n.jsx)(h.span,{children:" "})]})}),"\n",(0,n.jsx)(h.h2,{id:s[11].id,children:s[11].value}),"\n",(0,n.jsx)(h.pre,{icon:r.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// this in NodeJS global scope is the current module.exports object, not the global object."})}),"\n",(0,n.jsx)(h.span,{children:" "}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"this"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");    "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// {}"})]}),"\n",(0,n.jsx)(h.span,{children:" "}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"module"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"exports"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:".foo "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 5"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(h.span,{children:" "}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"this"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");   "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// { foo:5 }"})]})]})})]})},"/posts/nodejs/global",{filePath:"pages/posts/nodejs/global/index.mdx",timestamp:1732445328e3,pageMap:e.O,frontMatter:{slug:"nodejs-global",title:"NodeJS全局对象",author:"Favori",date:"2021-05-18",hero:"./hero.webp",excerpt:"JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。"},title:"NodeJS全局对象"},"undefined"==typeof RemoteContent?t:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[2195,636,6593,8792],()=>s(37098)),_N_E=i.O()}]);