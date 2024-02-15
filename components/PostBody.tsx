import markdownStyles from './markdown-styles.module.css'
import { FadeIn } from './FadeIn'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <FadeIn>
    <div className="grid mb-[340px] text-white md:grid-cols-12 pb-64 md:mb-[1000px] rounded-b-lg">
    <div className="mx-auto box-border md:col-start-5 col-end-12  ">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
   

    </div>
    </FadeIn>
  )
}

export default PostBody
