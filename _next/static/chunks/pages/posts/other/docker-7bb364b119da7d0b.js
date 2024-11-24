(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5497],{73250:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/other/docker",function(){return e(51882)}])},51882:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>c,useTOC:()=>t});var h=e(86070),n=e(19422),d=e(72522),a=e(24756);let l={src:"/_next/static/media/hero.d4b30017.webp",height:494,width:658,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAYAAkA4JagCdLoB+AADsAD+7D7jQOfD/8y/9Fp7pr/vkPYxAnn/zNDPQd5Kf/Rh/DD+NI+HMAAA",blurWidth:8,blurHeight:6};var r=e(39942);function t(i){return[{value:"Docker",id:"docker",depth:2},{value:"编写 dockerfile",id:"编写-dockerfile",depth:2},{value:"打包镜像",id:"打包镜像",depth:2},{value:"启动镜像(实例化为容器)",id:"启动镜像实例化为容器",depth:2},{value:"停止容器",id:"停止容器",depth:2},{value:"目录挂载",id:"目录挂载",depth:2},{value:"Docker-compose",id:"docker-compose",depth:2},{value:"进入容器终端",id:"进入容器终端",depth:2},{value:"复制文件到容器",id:"复制文件到容器",depth:2},{value:"常见参数",id:"常见参数",depth:2}]}let c=(0,n.e)(function(i){let{toc:s=t(i)}=i,e={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",span:"span",...(0,a.R)(),...i.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.p,{children:(0,h.jsx)(e.img,{alt:"Docker",placeholder:"blur",src:l})}),"\n",(0,h.jsx)("div",{className:"img-desc",children:"图：network"}),"\n",(0,h.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,h.jsx)(e.p,{children:"Docker 是一个应用打包、分发、部署的工具,你也可以把它理解为一个轻量的虚拟机是运行环境和应用的集合"}),"\n",(0,h.jsx)(e.h2,{id:s[1].id,children:s[1].value}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"dockerfile","data-word-wrap":"","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"FROM"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" node:16"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"LABEL"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" maintainer="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"favori"'})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# 复制代码"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"ADD"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" . /app"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# 设置容器启动后的默认运行目录"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"WORKDIR"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" /app"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# 运行命令，安装依赖"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# RUN 命令可以有多个，但是可以用 && 连接多个命令来减少层级。"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# 例如 RUN npm install && cd /app && mkdir logs"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"RUN"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" npm install"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# CMD 指令只能一个，是容器启动后执行的命令，算是程序的入口。"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# 如果还需要运行其他命令可以用 && 连接，也可以写成一个shell脚本去执行。"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# 例如 CMD cd /app && ./start.sh"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"CMD"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" npm run start"})]})]})}),"\n",(0,h.jsx)(e.h2,{id:s[2].id,children:s[2].value}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" build"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -t"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test:v2"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ."})]})})}),"\n",(0,h.jsx)(e.p,{children:"参数说明："}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.a,{href:"https://docs.docker.com/engine/reference/commandline/build/",children:"https://docs.docker.com/engine/reference/commandline/build/"})}),"\n",(0,h.jsx)(e.h2,{id:s[3].id,children:s[3].value}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" run"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -p"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 8080:8080"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --name"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test:v2"})]})})}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" run"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -p"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 8080:8080"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --name"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test:v2"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -d"})]})})}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" run"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --name"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" repo"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" alpine/git"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" clone"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" https://github.com/docker/getting-started.git"})]})})}),"\n",(0,h.jsx)(e.h2,{id:s[4].id,children:s[4].value}),"\n",(0,h.jsx)(e.p,{children:"停止某一个容器"}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" stop"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test"})]})})}),"\n",(0,h.jsx)(e.p,{children:"停止所有容器运行："}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" stop"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" $("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ps"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -a"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -q"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]})})}),"\n",(0,h.jsx)(e.p,{children:"删除所有停止运行的容器："}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" rm"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" $("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ps"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -a"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -q"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]})})}),"\n",(0,h.jsx)(e.h2,{id:s[5].id,children:s[5].value}),"\n",(0,h.jsx)(e.pre,{icon:r.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"docker"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" run"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -p"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 9090:8080"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --name"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test-volumes"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -v"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" /Users/yuanguandong/Desktop/github/code/docker/demoweb:/app"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -d"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test:v2"})]}),"\n",(0,h.jsx)(e.span,{children:" "})]})}),"\n",(0,h.jsx)(e.h2,{id:s[6].id,children:s[6].value}),"\n",(0,h.jsx)(e.p,{children:"通过 docker-compose.yml 拉起多个 docker 容器"}),"\n",(0,h.jsx)(e.p,{children:"要把项目依赖的多个服务集合到一起，我们需要编写一个 docker-compose.yml 文件，描述依赖哪些服务"}),"\n",(0,h.jsxs)(e.p,{children:["参考文档：",(0,h.jsx)(e.a,{href:"https://docs.docker.com/compose/",children:"https://docs.docker.com/compose/"})]}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"yml","data-word-wrap":"","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"version"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"3.7"'})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"services"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"  app"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"    build"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"./"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"    ports"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      - "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"80:8080"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"    volumes"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      - "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"./:/app"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"    environment"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      - "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"TZ=Asia/Shanghai"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"  redis"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"    image"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"redis:5.0.13"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"    volumes"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      - "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"redis:/data"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"    environment"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      - "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"TZ=Asia/Shanghai"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"volumes"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"},children:"  redis"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:":"})]})]})}),"\n",(0,h.jsx)(e.p,{children:"在 docker-compose.yml 文件所在目录，执行："}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker-compose up"})})})}),"\n",(0,h.jsx)(e.p,{children:"就可以跑起来了。"}),"\n",(0,h.jsxs)(e.p,{children:["命令参考：",(0,h.jsx)(e.a,{href:"https://docs.docker.com/compose/reference/up/",children:"https://docs.docker.com/compose/reference/up/"})]}),"\n",(0,h.jsx)(e.p,{children:"在后台运行只需要加一个 -d 参数"}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker-compose up -d"})})})}),"\n",(0,h.jsx)(e.p,{children:"查看运行状态："}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker-compose ps"})})})}),"\n",(0,h.jsx)(e.p,{children:"停止运行："}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker-compose stop"})})})}),"\n",(0,h.jsx)(e.p,{children:"重启："}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker-compose restart"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{})})]})}),"\n",(0,h.jsx)(e.p,{children:"重启单个服务："}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker-compose restart service-name"})})})}),"\n",(0,h.jsx)(e.p,{children:"进入容器命令行："}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker-compose exec service-name sh"})})})}),"\n",(0,h.jsx)(e.p,{children:"查看容器运行"}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"log：docker-compose logs [service-name]"})})})}),"\n",(0,h.jsx)(e.h2,{id:s[7].id,children:s[7].value}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker exec -it test-v bash"})})})}),"\n",(0,h.jsx)(e.h2,{id:s[8].id,children:s[8].value}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"plaintext","data-word-wrap":"","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{children:"docker cp fromPath container:targetPath"})})})}),"\n",(0,h.jsx)(e.h2,{id:s[9].id,children:s[9].value}),"\n",(0,h.jsx)(e.p,{children:"-i : 让容器的标准输入保持打开"}),"\n",(0,h.jsx)(e.p,{children:"-t : 让 docker 分配一个伪终端并绑定到容器的标准输入上"})]})},"/posts/other/docker",{filePath:"pages/posts/other/docker/index.mdx",timestamp:1732442721e3,pageMap:d.O,frontMatter:{slug:"other-docker",title:"Docker 常用命令",author:"Favori",date:"2022-11-06",hero:"./hero.webp",excerpt:"精简 Docker 常用命令"},title:"Docker 常用命令"},"undefined"==typeof RemoteContent?t:RemoteContent.useTOC)}},i=>{var s=s=>i(i.s=s);i.O(0,[2195,636,6593,8792],()=>s(73250)),_N_E=i.O()}]);