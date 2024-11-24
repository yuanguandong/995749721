import React, { useState, useRef, useEffect } from 'react'
import postsTree from '@/constants/posts-tree.json'
import { LatestPost } from '@/components/LatestPost'
import { HorizontalPost } from '@/components/HorizontalPost'

interface HomeProps {
  children: React.ReactNode
}

interface PostMeta {
  slug: string
  title: string
  author: string
  date: string
  hero: string
  excerpt: string
  group: string
}

interface Post {
  title: string
  path: string
  type: string
  meta: PostMeta
}

// 去重并按日期排序获取最新的3篇文章
const getLatestPosts = () => {
  const uniquePosts = postsTree.reduce<Post[]>((acc, current) => {
    const x = acc.find(item => item.meta.slug === current.meta.slug);
    if (!x) {
      return acc.concat([current as Post]);
    } else {
      return acc;
    }
  }, []);

  return uniquePosts
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
    .slice(0, 3);
}

export const Home: React.FC<HomeProps> = ({ children }) => {
  const latestPosts = getLatestPosts();
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const morePosts = postsTree.slice(3);

  // 添加键盘事件处理
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // 添加搜索过滤函数
  const filteredPosts = morePosts.filter(post => 
    post.meta.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.meta.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-[1280px] px-4 md:px-0">
      <div className="home-hero my-12">
        <h1 className="text-4xl font-bold mb-4">欢迎来到重剑的博客</h1>
        <p className="text-xl text-gray-600">在这里分享技术与思考</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* 左侧大图文章 */}
        <div className="md:col-span-2 h-[400px]">
          {latestPosts[0] && (
            <LatestPost
              title={latestPosts[0].meta.title}
              description={latestPosts[0].meta.excerpt}
              date={latestPosts[0].meta.date}
              author={{
                name: latestPosts[0].meta.author,
                avatar: "/avatar.png"
              }}
              coverImage={`/posts/${latestPosts[0].path}/hero.webp`}
              slug={`/posts/${latestPosts[0].path}`}
              className="h-full"
            />
          )}
        </div>

        {/* 右侧两个小图文章 */}
        <div className="md:col-span-1 grid grid-rows-2 gap-6 h-[400px]">
          {latestPosts.slice(1, 3).map((post, index) => (
            <LatestPost
              key={`latest-${post.meta.slug}-${index}`}
              title={post.meta.title || ''}
              description={post.meta.excerpt || ''}
              date={post.meta.date || ''}
              author={{
                name: post.meta.author || '',
                avatar: "/avatar.png"
              }}
              coverImage={`/posts/${post.path}/hero.webp`}
              slug={`/posts/${post.path}`}
              className="h-full"
            />
          ))}
        </div>
      </div>

      {/* 修改更多文章部分，添加搜索框 */}
      <div className="space-y-6 my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">更多文章</h2>
          <div className="relative w-72">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-12 py-[5px] bg-[#f6f8fa] border border-[#d0d7de] rounded-md 
                focus:outline-none focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da]
                placeholder:text-[#656d76] text-sm leading-[20px]"
            />
            {/* 搜索图标 */}
            <svg
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-[#656d76]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>
            {/* 快捷键提示 */}
            <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2 flex items-center">
              <kbd className="border border-[#d0d7de] rounded px-1.5 py-0.5 text-xs font-sans font-medium text-[#656d76] bg-[#f6f8fa]">
                /
              </kbd>
            </div>
          </div>
        </div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            没有找到相关文章
          </div>
        ) : (
          filteredPosts.map((post, index) => (
            <HorizontalPost
              key={`filtered-${post.meta.slug}-${index}`}
              title={post.meta.title || ''}
              description={post.meta.excerpt || ''}
              date={post.meta.date || ''}
              author={{
                name: post.meta.author || '',
                avatar: "/avatar.png"
              }}
              coverImage={`/posts/${post.path}/hero.webp`}
              slug={`/posts/${post.path}`}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Home
