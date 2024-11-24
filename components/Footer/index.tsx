import { useEffect, useState } from 'react'
import styles from './index.module.css'
import mottos from '@/public/motto'

interface Motto {
  author: string
  content: string
}

export default function Footer() {
  const [motto, setMotto] = useState<Motto>({ author: '', content: '' })

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * mottos.length)
    setMotto(mottos[randomIndex])
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <div className={styles.footerMotto}>
              <p className={styles.mottoContent}>{motto.content}</p>
              <p className={styles.mottoAuthor}>—— {motto.author}</p>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerLinks}>
              <a href="https://github.com/yuanguandong" className={styles.footerLink}>GitHub</a>
            </div>
            <div className={styles.footerCopyright}>
              © {new Date().getFullYear()} 重剑的博客 All rights reserved.
            </div>
            <div className={styles.footerICP}>
              <a 
                href="https://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                蜀ICP备2024070350号-3
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 