(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5468],{28270:(i,s,h)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/engin/ast",function(){return h(87101)}])},87101:(i,s,h)=>{"use strict";h.r(s),h.d(s,{default:()=>p,useTOC:()=>k});var n=h(86070),e=h(19422),l=h(72522),r=h(24756);let a={src:"/_next/static/media/hero.27db8af5.webp",height:900,width:1200,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAYAAkA4JYwCdAD0sDhmAAD+76tP1TPxiqMl3j+g8O193xkjN+kBHOEPJvZKJDX1z4GOL5HGlBdvrYqq6ivpdjwAAA==",blurWidth:8,blurHeight:6},d={src:"/_next/static/media/ast.ac4622c5.jpg",height:300,width:548,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACwA//EABcQAQADAAAAAAAAAAAAAAAAAAEAESH/2gAIAQEAAT8AbE2f/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:4};var t=h(39942);function k(i){return[{value:"简介",id:"简介",depth:2},{value:"编译原理",id:"编译原理",depth:2},{value:"JavaScript 词法解析",id:"javascript-词法解析",depth:2},{value:"JavaScript 语法解析",id:"javascript-语法解析",depth:2},{value:"JavaScript Parser",id:"javascript-parser",depth:2},{value:"应用",id:"应用",depth:2}]}let p=(0,e.e)(function(i){let{toc:s=k(i)}=i,h={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...(0,r.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.p,{children:(0,n.jsx)(h.img,{alt:"Ast",placeholder:"blur",src:a})}),"\n",(0,n.jsx)("div",{className:"img-desc",children:"图：Mako Tsereteli"}),"\n",(0,n.jsx)(h.h2,{id:s[0].id,children:s[0].value}),"\n",(0,n.jsxs)(h.p,{children:["AST（Abstract Syntax Tree，抽象语法树）在 ",(0,n.jsx)(h.a,{href:"https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Abstract_syntax_tree",children:"Wikipedia"})," 的定义如下："]}),"\n",(0,n.jsxs)(h.blockquote,{children:["\n",(0,n.jsx)(h.p,{children:"In computer science, an abstract syntax tree (AST), or just syntax tree, is a tree representation of the abstract syntactic structure of source code written in a programming language."}),"\n"]}),"\n",(0,n.jsx)(h.p,{children:"指的是：源代码的抽象语法结构的树状表现形式"}),"\n",(0,n.jsx)(h.h2,{id:s[1].id,children:s[1].value}),"\n",(0,n.jsx)(h.p,{children:"先回顾下编译原理的几大过程："}),"\n",(0,n.jsx)(h.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"**词法分析**   ===>   单词与记号、正则表达式、有限自动机、从正则表达式到有限自动机的转换、词法分析器的实现"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"        ││"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"    **语法分析**   ===>   上下文无关文法、递归下降分析、LR 分析、错误处理、语法分析器自动生成"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"        ││"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"    **语义分析**   ===>   类型系统、属性文法、语法制导翻译、符号表管理、抽象语法树、线性中间表示、图中间表示"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"        ││"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"  **中间代码生成**   ===>   变量地址分配、算术表达式翻译、布尔表达式翻译、数组、结构体和字符串的翻译、控制流的翻译、函数调用的翻译"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"        ││"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"**目标代码优化与生成**   ===>   目标体系结构、树匹配代码生成、基于动态规划的代码生成、寄存器分配、指令调度、控制流分析、数据流分析、死代码删除、常量传播、拷贝传播、静态单赋值形式"})})]})}),"\n",(0,n.jsx)(h.p,{children:"JavaScript 是一门解释型语言，但其在执行过程中仍然需要即时编译（JIT），其编译过程也遵循这些流程："}),"\n",(0,n.jsx)(h.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"**分词／词法分析**   ===>   把字符串分解成有意义的代码块，这些代码块被称为词法单元"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"      ││"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"**解析／语法分析**   ===>   词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树，即 AST"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"      ││"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{children:"  **代码生成**   ===>   将 AST 转换为可执行代码"})})]})}),"\n",(0,n.jsx)(h.p,{children:"总结一下：通过 Parser 把代码转化为抽象语法树（AST），该树定义了代码的结构，通过对树的处理，能实现对代码的分析、优化等操作。"}),"\n",(0,n.jsx)(h.h2,{id:s[2].id,children:s[2].value}),"\n",(0,n.jsx)(h.p,{children:"通过分析每行代码字符串，通过识别关键字来判断某句代码是什么表达式类型，然后把这些信息生成 AST 语法树"}),"\n",(0,n.jsx)(h.pre,{icon:t.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"if"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" (b "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"==="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  a "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 2"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  alert"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(a);"})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,n.jsx)(h.p,{children:"词法分析思维抽象如图"}),"\n",(0,n.jsxs)(h.p,{children:[(0,n.jsx)(h.img,{placeholder:"blur",src:d})," "]}),"\n",(0,n.jsx)(h.h2,{id:s[3].id,children:s[3].value}),"\n",(0,n.jsx)(h.p,{children:"在编译过程中，代码会被映射为 AST，那么就可以通过 AST 对代码进行分析、转换。像 webpack、babel、eslint 等涉及代码分析的工具类库，其背后都有 AST 的影子。"}),"\n",(0,n.jsxs)(h.p,{children:["先看看 AST 长什么样，通过 ",(0,n.jsx)(h.a,{href:"https://astexplorer.net/",children:"AST Explorer"})," 或者",(0,n.jsx)(h.a,{href:"https://esprima.org/demo/parse.html",children:"Parser"}),"可以实时解析和查看 JavaScript 的 AST。"]}),"\n",(0,n.jsx)(h.pre,{icon:t.js,tabIndex:"0","data-language":"js","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(h.code,{children:(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" a"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]})})}),"\n",(0,n.jsx)(h.p,{children:"对应的 AST"}),"\n",(0,n.jsx)(h.pre,{tabIndex:"0","data-language":"json","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  "type"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Program"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  "body"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": ["})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    {"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'      "type"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"VariableDeclaration"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'      "declarations"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": ["})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        {"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "type"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"VariableDeclarator"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "id"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "type"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Identifier"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "name"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"a"'})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"          },"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'          "init"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "type"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"Literal"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "value"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'            "raw"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"1"'})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"          }"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        }"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      ],"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'      "kind"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"const"'})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  ],"})}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  "sourceType"'}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"script"'})]}),"\n",(0,n.jsx)(h.span,{children:(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,n.jsxs)(h.p,{children:["AST 的格式每种 Parser 都有各自的标准，",(0,n.jsx)(h.a,{href:"https://docs.esprima.org/en/4.0/syntax-tree-format.html",children:"Esprima"})," 的语法树结构文档 Syntax Tree Format，下面是 type 的类型列表。"]}),"\n",(0,n.jsx)(h.pre,{icon:t.$0,tabIndex:"0","data-language":"ts","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(h.code,{children:[(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"type"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Expression"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ThisExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Identifier"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Literal"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ArrayExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ObjectExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" FunctionExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ArrowFunctionExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ClassExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" TaggedTemplateExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" MemberExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Super"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" MetaProperty"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" NewExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" CallExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" UpdateExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" AwaitExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" UnaryExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" BinaryExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" LogicalExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" ConditionalExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" YieldExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" AssignmentExpression"})]}),"\n",(0,n.jsxs)(h.span,{children:[(0,n.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  |"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" SequenceExpression"}),(0,n.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]})]})}),"\n",(0,n.jsx)(h.h2,{id:s[4].id,children:s[4].value}),"\n",(0,n.jsx)(h.p,{children:"介绍完 AST 树，下面列举常用的 JavaScript Parser"}),"\n",(0,n.jsxs)(h.ul,{children:["\n",(0,n.jsx)(h.li,{children:(0,n.jsx)(h.a,{href:"https://link.zhihu.com/?target=http%3A//esprima.org/",children:"Esprima"})}),"\n",(0,n.jsx)(h.li,{children:(0,n.jsx)(h.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/mishoo/UglifyJS2",children:"UglifyJS2"})}),"\n",(0,n.jsx)(h.li,{children:(0,n.jsx)(h.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/google/traceur-compiler",children:"Traceur"})}),"\n",(0,n.jsx)(h.li,{children:(0,n.jsx)(h.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/acornjs/acorn",children:"acorn"})}),"\n",(0,n.jsx)(h.li,{children:(0,n.jsx)(h.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/eslint/espree",children:"espree eslint"})}),"\n",(0,n.jsx)(h.li,{children:(0,n.jsx)(h.a,{href:"https://link.zhihu.com/?target=https%3A//github.com/shapesecurity/shift-parser-js",children:"Shift"})}),"\n"]}),"\n",(0,n.jsx)(h.p,{children:"各个 parser 的速度对比可以参见 Speed Comparison"}),"\n",(0,n.jsx)(h.h2,{id:s[5].id,children:s[5].value}),"\n",(0,n.jsx)(h.p,{children:"AST 的应用很广，从技术角度出发，所有涉及对代码处理的场景，AST 都有其用武之地。"}),"\n",(0,n.jsx)(h.p,{children:"编译器、代码压缩、代码混淆、代码优化，所有的 lint（不仅仅是 JavaScript），所有的打包构建工具及其插件，包括 webpack、rollup、parcel、browserify 等…"}),"\n",(0,n.jsx)(h.p,{children:"\uD83C\uDF7B"})]})},"/posts/engin/ast",{filePath:"pages/posts/engin/ast/index.mdx",timestamp:1732445328e3,pageMap:l.O,frontMatter:{slug:"engin-ast",title:"JavaScript AST 抽象语法树",author:"Favori",date:"2020-08-02",hero:"./hero.webp",excerpt:"源代码的抽象语法结构的树状表现形式"},title:"JavaScript AST 抽象语法树"},"undefined"==typeof RemoteContent?k:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[2195,636,6593,8792],()=>s(28270)),_N_E=i.O()}]);