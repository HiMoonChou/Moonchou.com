import markdownStyles from '../styles/markdown-styles.module.css'
import { FadeIn } from './FadeIn'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <FadeIn>
    <div className="grid mb-[340px] text-white  pb-64 md:mb-[1000px] rounded-b-lg">
    <div className="mx-auto box-border ">
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
