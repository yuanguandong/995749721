import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface TreeNode {
  title: string
  path: string
  type: 'file'
  meta: {
    title?: string
    date?: string
    author?: string
    excerpt?: string
    group: string
    [key: string]: any
  }
}

function getMetaFromFile(filePath: string): any {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const metaMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (metaMatch) {
      const metaStr = metaMatch[1]
      const meta: any = {}
      metaStr.split('\n').forEach(line => {
        const [key, ...values] = line.split(':')
        if (key && values.length) {
          meta[key.trim()] = values.join(':').trim()
        }
      })
      return meta
    }
  } catch (error) {
    console.error(`Error reading meta from ${filePath}:`, error)
  }
  return {}
}

function getMetaFromJs(filePath: string): any {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const titleMatch = content.match(/title:\s*['"](.+?)['"]/)
    return titleMatch ? { title: titleMatch[1] } : {}
  } catch (error) {
    console.error(`Error reading meta from ${filePath}:`, error)
  }
  return {}
}

function buildTree(baseDir: string, currentDir: string = ''): TreeNode[] {
  const fullPath = path.join(baseDir, currentDir)
  const items = fs.readdirSync(fullPath)
  const nodes: TreeNode[] = []
  
  const directories = items
    .filter(item => {
      const itemPath = path.join(fullPath, item)
      return fs.statSync(itemPath).isDirectory() && !item.startsWith('.')
    })
    .sort()

  // 处理所有子目录
  for (const dir of directories) {
    // 递归处理子目录，将结果合并到当前数组
    const children = buildTree(baseDir, path.join(currentDir, dir))
    nodes.push(...children)
  }

  // 只处理非根目录的 index.mdx
  if (currentDir !== '') {
    const indexFile = items.find(item => item === 'index.mdx')
    if (indexFile) {
      const meta = getMetaFromFile(path.join(fullPath, indexFile))
      const parentDir = path.dirname(currentDir)
      nodes.push({
        title: meta.title || path.basename(currentDir),
        path: currentDir,
        type: 'file',
        meta: {
          ...meta,
          group: parentDir === '.' ? currentDir : parentDir
        }
      })
    }
  }

  // 按日期倒序排列
  return nodes.sort((a, b) => {
    const dateA = new Date(a.meta.date || '1970-01-01')
    const dateB = new Date(b.meta.date || '1970-01-01')
    return dateB.getTime() - dateA.getTime()
  })
}

// 新增：复制文件的函数
function copyFile(source: string, target: string) {
  try {
    // 确保目标目录存在
    const targetDir = path.dirname(target)
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true })
    }
    
    fs.copyFileSync(source, target)
    // console.log(`Copied: ${source} -> ${target}`)
  } catch (error) {
    console.error(`Error copying file ${source}:`, error)
  }
}

// 新增：复制 hero 图片的函数
function copyHeroImages(baseDir: string, currentDir: string = '') {
  const fullPath = path.join(baseDir, currentDir)
  const items = fs.readdirSync(fullPath)
  
  // 处理当前目录中的 hero 图片
  const heroFiles = items.filter(item => 
    /^hero\.(jpg|jpeg|png|gif|webp)$/i.test(item)
  )
  
  for (const heroFile of heroFiles) {
    const sourcePath = path.join(fullPath, heroFile)
    const targetPath = path.join(
      process.cwd(),
      'public/posts',
      currentDir,
      heroFile
    )
    copyFile(sourcePath, targetPath)
  }
  
  // 递归处理子目录
  const directories = items.filter(item => {
    const itemPath = path.join(fullPath, item)
    return fs.statSync(itemPath).isDirectory() && !item.startsWith('.')
  })
  
  for (const dir of directories) {
    copyHeroImages(baseDir, path.join(currentDir, dir))
  }
}

function generateTree() {
  const postsDir = path.join(process.cwd(), 'pages/posts')
  const tree = buildTree(postsDir)
  
  // 确保 constants 目录存在
  const constantsDir = path.join(process.cwd(), 'constants')
  if (!fs.existsSync(constantsDir)) {
    fs.mkdirSync(constantsDir)
  }
  
  // 确保 public/posts 目录存在并清空它
  const publicPostsDir = path.join(process.cwd(), 'public/posts')
  if (fs.existsSync(publicPostsDir)) {
    fs.rmSync(publicPostsDir, { recursive: true })
  }
  fs.mkdirSync(publicPostsDir, { recursive: true })
  
  // 复制所有 hero 图片
  copyHeroImages(postsDir)
  
  // 生成 JSON 文件到 constants 目录
  const treeJson = JSON.stringify(tree, null, 2)
  const outputPath = path.join(constantsDir, 'posts-tree.json')
  fs.writeFileSync(outputPath, treeJson)

  console.log('✅ Generated posts tree at:', outputPath)
  console.log('✅ Copied hero images to public/posts directory')
  return tree
}

// 执行生成
generateTree() 