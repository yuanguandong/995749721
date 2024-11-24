import React, { useState } from 'react'
import { TreeNode } from './types'
import styles from './index.module.css'
import Link from 'next/link'

interface PostTreeProps {
  data: TreeNode[]
}

const PostTree: React.FC<PostTreeProps> = ({ data }) => {
  // 获取所有一级目录作为 tabs
  const tabs = data.filter(item => item.type === 'directory')
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || '')

  // 获取当前激活tab的文章列表
  const activeTabContent = tabs.find(tab => tab.title === activeTab)?.children || []

  return (
    <div className={styles.container}>
      {/* Tab 导航 */}
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.title}
            className={`${styles.tab} ${activeTab === tab.title ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab 内容区 */}
      <div className={styles.tabContent}>
        {activeTabContent.map(post => (
          <Link 
            key={post.path} 
            href={`/posts/${post.path.replace(/\/index\.mdx$/, '')}`}
            className={styles.postLink}
          >
            <article className={styles.postCard}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              {post.meta?.excerpt && (
                <p className={styles.postExcerpt}>{post.meta.excerpt}</p>
              )}
              <div className={styles.postMeta}>
                {post.meta?.date && (
                  <span className={styles.postDate}>{post.meta.date}</span>
                )}
                {post.meta?.author && (
                  <span className={styles.postAuthor}>{post.meta.author}</span>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PostTree 