import Image from 'next/image'
import Link from 'next/link'

interface HorizontalPostProps {
  title: string
  description: string
  date: string
  author: {
    name: string
    avatar: string
  }
  coverImage: string
  slug: string
  className?: string
}

export function HorizontalPost({
  title,
  description,
  date,
  author,
  coverImage,
  slug,
  className
}: HorizontalPostProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Link 
      href={slug} 
      className={`group relative flex transition-all duration-300 ${className}`}
    >
      {/* 左侧内容 */}
      <div className="flex-1 p-2 md:p-6">
        <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {description}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={author.avatar}
              alt={author.name}
              width={24}
              height={24}
              className="rounded-full ring-2 ring-gray-100"
            />
            <span className="text-sm font-medium text-gray-700">{author.name}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time>{formatDate(date)}</time>
          </div>
        </div>
      </div>

      {/* 右侧图片 */}
      <div className="relative w-[240px] shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 30vw, 240px"
        />
      </div>
    </Link>
  )
} 