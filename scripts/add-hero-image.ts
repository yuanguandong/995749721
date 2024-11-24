import fs from 'fs'
import path from 'path'

function addHeroImage(filePath: string) {
  // 读取 MDX 文件内容
  const content = fs.readFileSync(filePath, 'utf-8')
  const dir = path.dirname(filePath)
  
  // 检查目录下是否存在 hero 图片
  const files = fs.readdirSync(dir)
  const heroImage = files.find(file => 
    file.startsWith('hero.') && 
    (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp'))
  )
  
  if (!heroImage) {
    console.log(`No hero image found in ${dir}`)
    return
  }

  // 从文件名提取文章标题
  const folderName = path.basename(dir)
  let title = folderName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // 检查是否已经有图片引用
  if (content.includes(`![${title}](./hero`)) {
    console.log(`Hero image already exists in ${filePath}`)
    return
  }

  // 查找 frontmatter 的结束位置
  const frontmatterEnd = content.indexOf('---', 3) + 3

  // 在 frontmatter 后添加图片引用
  const newContent = 
    content.slice(0, frontmatterEnd) + 
    `\n\n![${title}](./${heroImage})\n\n` +
    content.slice(frontmatterEnd)

  // 写回文件
  fs.writeFileSync(filePath, newContent)
  console.log(`Added hero image to ${filePath}`)
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      walkDir(filePath)
    } else if (file === 'index.mdx') {
      addHeroImage(filePath)
    }
  })
}

// 从 posts 目录开始遍历
walkDir('pages/posts') 