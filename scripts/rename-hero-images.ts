import fs from 'fs/promises'
import path from 'path'

const POSTS_DIR = path.join(process.cwd(), 'pages', 'posts')
const HERO_OUTPUT_NAME = 'hero.webp'

async function processDirectory(dirPath: string) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)
    
    if (entry.isDirectory()) {
      // 递归处理子目录
      await processDirectory(fullPath)
    } else if (entry.isFile()) {
      // 检查是否是 hero 图片
      const lower = entry.name.toLowerCase()
      if (
        (lower.includes('hero') || lower.includes('cover')) &&
        (lower.endsWith('.png') || lower.endsWith('.jpg') || 
         lower.endsWith('.jpeg') || lower.endsWith('.webp'))
      ) {
        const newPath = path.join(path.dirname(fullPath), HERO_OUTPUT_NAME)
        try {
          await fs.rename(fullPath, newPath)
          console.log(`✅ 已重命名 ${entry.name} 为 hero.webp，在目录 ${path.dirname(fullPath)}`)
        } catch (error) {
          console.error(`重命名失败 ${fullPath}:`, error)
        }
      }
    }
  }
}

async function renameHeroImages() {
  try {
    await processDirectory(POSTS_DIR)
    console.log('所有 hero 图片重命名完成!')
  } catch (error) {
    console.error('处理过程中发生错误:', error)
  }
}

renameHeroImages() 