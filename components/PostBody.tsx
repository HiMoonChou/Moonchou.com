import markdownStyles from '../styles/markdown-styles.module.css'
import { FadeIn } from './FadeIn'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { createRoot } from 'react-dom/client'
import remarkGfm from 'remark-gfm'
import  Markup  from 'react-render-markup'
import rehypeRaw from 'rehype-raw'
import remarkHtml from 'remark-html'
import { HtmlContext } from 'next/dist/shared/lib/html-context.shared-runtime'

type Props = {
  content: string
  videoLink: string;
}


const PostBody = ({ content, videoLink }: Props) => {
  return (
    <FadeIn>
      <div className="grid mb-[340px] text-white pb-12  mb:pb-40 md:mb-[50%] rounded-b-lg">

        {videoLink && (
          <div className="flex aspect-video w-full md:w-1/2 justify-self-end md:pb-20">
            <iframe width="100%" height="100%" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
          </div>
        )}

        <div className="mx-auto w-full box-border ">

          <ReactMarkdown
           
            className={markdownStyles['markdown']}
            rehypePlugins={[rehypeRaw]} children={content}
            components={{
              img: (props) => (
                <Image src={props.src} alt={props.alt}  
                width={1920}
                height={500}
                blurDataURL="" //automatically provided
                placeholder="blur" // Optional blur-up while loading
                />
              ),
            }}
          >
          </ReactMarkdown>

          {/* <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          /> */}
        </div>




      </div>
    </FadeIn>
  )
}

export default PostBody
