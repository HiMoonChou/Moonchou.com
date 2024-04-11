import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, excerpt, slug}: Props) => {
  return (
    <div className=" max-w-full my-4 inline-block hover:text-white underlinemotion ">
      <div className=" ">
      <div className=" mb-4 ">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      </div>
      <h3 className="text-xl leading-snug h-8 md:h-12 mx-2">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {title}
        </Link>
      </h3>
      <p className="text-md font-light mx-2 text-gray-400 leading-snug mb-2">
        {excerpt}
      </p>
    </div>
  );
};

export default PostPreview;
