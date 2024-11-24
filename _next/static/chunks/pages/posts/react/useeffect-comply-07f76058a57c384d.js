(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4067],{69902:(i,s,h)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/react/useeffect-comply",function(){return h(28464)}])},28464:(i,s,h)=>{"use strict";h.r(s),h.d(s,{default:()=>d,useTOC:()=>a});var l=h(86070),n=h(19422),e=h(72522),k=h(24756);let r={src:"/_next/static/media/hero.016da910.webp",height:900,width:1200,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoIAAYAAkA4JZACdAEf/x4T+AAA/vrhrJS/fric/qHndWE0VtsU/Bj3F/14ixfHeiI/06Y/EF5MxDXHYHtjpPAA",blurWidth:8,blurHeight:6};h(88564);var t=h(39942);function a(i){return[{value:"Mini实现",id:"mini实现",depth:2}]}let d=(0,n.e)(function(i){let{toc:s=a(i)}=i,h={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",span:"span",...(0,k.R)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.p,{children:(0,l.jsx)(h.img,{alt:"Useeffect Comply",placeholder:"blur",src:r})}),"\n",(0,l.jsx)("div",{className:"img-desc",children:"图：Tran Mau Tri Tam"}),"\n","\n",(0,l.jsx)(h.h2,{id:s[0].id,children:s[0].value}),"\n",(0,l.jsx)(h.p,{children:"当做启发，不是真实内部实现"}),"\n",(0,l.jsx)(h.pre,{icon:t.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,l.jsxs)(h.code,{children:[(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" React, { useState } "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "react"'}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ReactDOM "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "react-dom"'}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" CounterEffect"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    effectCursor "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"; "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// 注意将 effectCursor 重置为0"})]}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ["}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"count"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"setCount"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"] "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" useState"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"0"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ["}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"count1"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"setCount1"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"] "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" useState"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"0"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    useEffect"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(() "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        console."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(count);"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }, [count]);"})}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    useEffect"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(() "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        console."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"log"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(count1 "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"+"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "哈哈哈"'}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }, [count1]);"})}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" onClick"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" () "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        setCount"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(count "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"+"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    };"})}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" onClick1"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" () "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        setCount1"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(count1 "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"+"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    };"})}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    return"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        <"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"            <"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">{count}</"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"            <"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"button"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" onClick"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{onClick}>点击</"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"button"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"            <"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">{count1}</"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"            <"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"button"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" onClick"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{onClick1}>点击</"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"button"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        </"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"div"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    );"})}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" allDeps"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Array"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"any"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[] "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"|"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" undefined"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"> "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" [];"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"let"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" effectCursor"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" number"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 0"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"function"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" useEffect"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"callback"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" () "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" void"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"depArray"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"?:"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" any"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"[]) {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"!"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"depArray) {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        callback"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        allDeps[effectCursor] "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" depArray;"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        effectCursor"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"++"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        return"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" deps"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" allDeps[effectCursor];"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    const"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" hasChangedDeps"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" deps"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        ?"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" depArray."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"some"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"el"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"i"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"=>"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" el "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"!=="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" deps[i])"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"        :"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" true"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    if"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (hasChangedDeps) {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"        callback"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        allDeps[effectCursor] "}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" depArray;"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    effectCursor"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"++"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(h.span,{children:" "}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" function"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" render"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"() {"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    ReactDOM."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"render"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        <"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"React.StrictMode"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"            <"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"CounterEffect"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" />"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        </"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"React.StrictMode"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,l.jsxs)(h.span,{children:[(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        document."}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"getElementById"}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"root"'}),(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    );"})}),"\n",(0,l.jsx)(h.span,{children:(0,l.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(h.span,{children:" "})]})}),"\n",(0,l.jsx)("div",{className:"art-container",children:(0,l.jsx)("a",{href:"https://codesandbox.io/s/react-useeffect-zjfdv",target:"_blank",children:(0,l.jsx)("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})})]})},"/posts/react/useeffect-comply",{filePath:"pages/posts/react/useeffect-comply/index.mdx",timestamp:1732445328e3,pageMap:e.O,frontMatter:{slug:"react-useeffect-comply",title:"Mini useEffect实现",author:"Favori",date:"2021-09-11",hero:"./hero.webp",excerpt:"如何实现useEffect?"},title:"Mini useEffect实现"},"undefined"==typeof RemoteContent?a:RemoteContent.useTOC)},88564:(i,s,h)=>{"use strict";h.d(s,{A:()=>n});var l=h(86070);h(30758);let n=i=>{let{name:s}=i;return(0,l.jsx)("img",{src:"http://github.com/yuanguandong/code/blob/master/draw/".concat(s,".png?raw=true")})}}},i=>{var s=s=>i(i.s=s);i.O(0,[2195,636,6593,8792],()=>s(69902)),_N_E=i.O()}]);