import React from 'react'
import styles from './index.module.css'
import TreeItem from './TreeItem'
import { TreeNode } from './types'

interface TreeListProps {
  data: TreeNode[]
  level: number
}

const TreeList: React.FC<TreeListProps> = ({ data, level }) => {
  return (
    <ul className={`${styles.treeList} ${level === 0 ? styles.rootList : ''}`}>
      {data
        .filter(item => item.path !== 'index.mdx')
        .map(item => (
          <TreeItem key={item.path} item={item} level={level} />
        ))}
    </ul>
  )
}

export default TreeList 