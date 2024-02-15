import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-4 md:mb-12">
      {children}
    </h1>
  )
}

export default PostTitle
