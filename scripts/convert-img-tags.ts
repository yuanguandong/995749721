import fs from 'fs'
import path from 'path'

const postsDir = path.join(process.cwd(), 'pages/posts')

// 递归遍历目录
function walkDir(dir: string) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      walkDir(filePath)
    } else if (path.extname(file) === '.mdx') {
      convertImgTags(filePath)
    }
  })
}

// 转换单个文件中的 img 标签
function convertImgTags(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8')
  
  // 匹配 <img> 标签的正则
  const imgRegex = /<img\s+src=["']([^"']+)["']\s*\/?>/g
  
  // 替换为 markdown 格式
  content = content.replace(imgRegex, '![]($1)')
  
  // 写回文件
  fs.writeFileSync(filePath, content)
  
  console.log(`Processed: ${filePath}`)
}

// 开始执行
try {
  walkDir(postsDir)
  console.log('All img tags have been converted successfully!')
} catch (error) {
  console.error('Error occurred:', error)
} 