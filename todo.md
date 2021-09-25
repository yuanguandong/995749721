setState 怎么获取到更新后的值？异步函数中为什么setState 会立即更新？
实现两个大数相加


```tsx





<div className="art-container">
  <Draw name="hooks" />
</div>

<div className="art-container">
  <a href="https://codesandbox.io/s/usestate-zoj75?file=/src/index.js:0-984" target="_blank" style={{marginBottom:20,width:184,height:40, display:'block',background:'url("https://codesandbox.io/static/img/play-codesandbox.svg")'}}>
  </a>
</div>




react15 和16的区别
https://blog.csdn.net/u010821983/article/details/108036918


context实现


babel核心
https://www.jianshu.com/p/154ff50ca963


字典树

https://blog.csdn.net/dingshao1114/article/details/107282626/

```





## react 性能优化

### 找病根
使用工具来分析性能瓶颈，react dev tools




### 服药
Code Splitting
可以帮你“懒加载”代码，如果你没办法直接减少应用的体积，那么不妨尝试把应用从单个 bundle 拆分成单个 bundle + 多份动态代码的形式。

组件尽可能的进行拆分、解耦
列表类组件优化
如果是class组件，bind函数优化,constructor绑定
不要滥用props,props尽量只传需要的数据，避免多余的更新，尽量避免使用{…props}
  动态导入
  ```js
  import(``"./math"``).then(math => {
  console.log(math.add(16, 26));
  });
  ```
  react-loadable
使用不可突变数据结构
render里不要直接写对象
如果是类组件，使用shouldComponentUpdate减少重新渲染，如果是函数组件，要写清楚依赖项数组
如果要操作Vitural Dom，尽量减少dom结构更改
列表要声明key


