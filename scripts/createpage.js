var fs = require('fs');
var path = require('path')
var moment = require('moment');

// 递归创建目录 异步方法  
function mkdirs(dirname, callback) {  
  const exists = fs.existsSync(dirname)
  if (exists) {  
      callback();  
  } else {  
      mkdirs(path.dirname(dirname), function () {  
          fs.mkdir(dirname, callback);  
          console.log('在' + path.dirname(dirname) + '目录创建好' + dirname  +'目录');
      });  
  }  
}  


var arguments = process.argv.splice(2);
const createPath = arguments[0]
const slug = createPath.replace(new RegExp(/\//,'g'),'-')


mkdirs(`${__dirname}/../content/posts/${createPath}`,() => {
  fs.writeFile(`${__dirname}/../content/posts/${createPath}/index.mdx`, 
  `---
slug: ${slug}
title: 
author: 袁官东
date: ${moment(new Date()).format('YYYY-MM-DD')}
hero: ./hero.jpg
excerpt: 
---
<div className={'img-desc'}>图：xxx</div>


## 
  `, 
  function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
})

