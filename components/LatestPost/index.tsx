import Image from 'next/image'
import Link from 'next/link'

interface LatestPostProps {
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

export function LatestPost({
  title,
  description,
  date,
  author,
  coverImage,
  slug,
  className
}: LatestPostProps) {
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
      className={`group relative block w-full h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h2 className="mb-2 text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">
          {title}
        </h2>
        <p className="mb-4 line-clamp-2 text-sm text-white/90">{description}</p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={author.avatar}
              alt={author.name}
              width={24}
              height={24}
              className="rounded-full ring-2 ring-white/20"
            />
            <span className="text-sm font-medium text-white/90">{author.name}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <time>{formatDate(date)}</time>
          </div>
        </div>
      </div>
    </Link>
  )
} 