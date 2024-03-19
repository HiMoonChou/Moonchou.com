import markdownStyles from '../styles/markdown-styles.module.css'
import { FadeIn } from './FadeIn'

type Props = {
  content: string
  videoLink: string;
}

const PostBody = ({ content, videoLink }: Props) => {
  return (
    <FadeIn>
      <div className="grid mb-[340px] text-white  pb-64 md:mb-[1000px] rounded-b-lg">

        {videoLink && (
        <div className="flex aspect-video w-1/2 md:mt-16 justify-self-end pb-20">
          <iframe width="100%" height="100%" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
        </div>
        )}
        
        <div className="mx-auto w-full box-border ">
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
