import fs from 'fs'
import path from 'path'

function createMetaFile(dirPath: string) {
  const metaPath = path.join(dirPath, '_meta.js')
  if (!fs.existsSync(metaPath)) {
    const dirName = path.basename(dirPath)
    const content = `export default {
  title: '${dirName}',
  date: '${new Date().toISOString().split('T')[0]}'
}`
    fs.writeFileSync(metaPath, content)
    console.log(`Created _meta.js in ${dirPath}`)
  }
}

function walkDir(dir: string) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      createMetaFile(filePath)
      walkDir(filePath)
    }
  })
}

walkDir('pages/posts') 