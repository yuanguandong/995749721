import Layout from './layout/Layout'
import { useRouter } from 'next/navigation'

export default {
  layout: Layout,
  logo: <span>Favori的博客</span>,
  // darkMode: true,
  search: {
    component: true,
    placeholder: '搜索文章...',
    loading: '搜索中...',
    error: '搜索出错',
    emptyResult: '没有找到相关内容'
  },
  navs: [
    {
      url: '/posts',
      name: '博客'
    },
    {
      url: 'https://github.com/yuanguandong',
      name: 'GitHub'
    }
  ],
  head: ({ title, meta }:any) => (
    <>
      {meta.title && <meta name="title" content={meta.title} />}
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <link rel="icon" type="image/png" sizes="70x70" href="/favicon-70x70.png" />
      <title>{title}</title>
    </>
  ),
  postFooter: ({ date, tag, author }:any) => (
    <div className="post-footer">
      {date && <div>发布于 {date}</div>}
      {author && <div>作者: {author}</div>}
      {tag && <div>标签: {tag}</div>}
    </div>
  ),
  footer: null,
  
}