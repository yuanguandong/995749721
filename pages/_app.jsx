import { ThemeProvider } from 'next-themes'
import "../styles/globals.css"
import Layout from '../layout/Layout'

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}