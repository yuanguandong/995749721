import React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { TreeNode } from './types'
import TreeList from './TreeList'

interface TreeItemProps {
  item: TreeNode
  level: number
}

const TreeItem: React.FC<TreeItemProps> = ({ item, level }) => {
  const isDirectory = item.type === 'directory'
  const hasChildren = isDirectory && item.children && item.children.length > 0
  const path = item.path.replace(/\/index\.mdx$/, '')

  return (
    <li className={styles.treeItem}>
      <div className={styles.itemContent}>
        <span className={styles.icon}>
          {isDirectory ? (hasChildren ? '📁' : '📂') : '📄'}
        </span>
        {isDirectory ? (
          <span className={styles.title}>{item.title}</span>
        ) : (
          <Link href={`/posts/${path}`}>
            <span className={styles.link}>{item.title}</span>
          </Link>
        )}
        {item.meta?.date && (
          <span className={styles.date}>{item.meta.date}</span>
        )}
      </div>
      {hasChildren && item.children && (
        <TreeList data={item.children} level={level + 1} />
      )}
    </li>
  )
}

export default TreeItem 