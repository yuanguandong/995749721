import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Layout.module.css'
import { useRouter } from 'next/router'
import Home from '../pages/home'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/' || router.pathname === '/home'

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {isHomePage ? (
          <Home>{children}</Home>
        ) : (
          children
        )}
      </main>
      <Footer />
    </div>
  )
} 