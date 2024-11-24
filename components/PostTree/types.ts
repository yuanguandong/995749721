export interface TreeNode {
  title: string
  path: string
  type: 'file' | 'directory'
  children?: TreeNode[]
  meta?: {
    title?: string
    date?: string
    author?: string
    excerpt?: string
  }
} 