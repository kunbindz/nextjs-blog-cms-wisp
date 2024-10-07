import { cn } from '@/lib/utils'
import Link from 'next/link'
interface Props {
  tagName: string
  count?: number
  className?: string
}

const Tag = ({ tagName, count, className }: Props) => {
  return (
    <Link href={`/tag/${tagName}`} className={' text-sm font-medium uppercase'}>
      <div className="inline-block relative py-1 text-xs group">
        <div className="absolute inset-0 text-cyan-500 group-hover:text-cyan-600 dark:group-hover:text-primary-400 flex">
          <svg height="100%" viewBox="0 0 50 100">
            <path
              d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
              fill="currentColor"
            />
          </svg>
          <div className="flex-grow h-full -ml-px bg-cyan-500 group-hover:bg-cyan-600 dark:group-hover:bg-primary-400 rounded-md rounded-l-none"></div>
        </div>
        <span className="relative text-white uppercase font-semibold px-2">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {tagName.toLocaleUpperCase()}
          <span>&nbsp;</span>
          {count && `[ ${count} ]`}
          <span>&nbsp;</span>
        </span>
      </div>
    </Link>
  )
}

export default Tag