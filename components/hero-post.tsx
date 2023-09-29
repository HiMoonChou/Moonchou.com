import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      
      <div className=" mt-8 md:grid text-gray-400 md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-8 ">
        <div>
          <h3 className="mb-4 text-2xl lg:text-4xl leading-tight text-white">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
            >
              {title}
            </Link>
          </h3>
          <hr className="border-1 border-gray-400 pb-4 lg:my-8" />
          {/* <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div> */}
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 ">{excerpt}</p>
        </div>
      </div>
      <div className="my-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
    </section>
  )
}

export default HeroPost
