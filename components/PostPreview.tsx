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
      <div className=" bg-white">
      <div className=" mb-4 hover:grayscale hover:mix-blend-difference ">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      </div>
      <h3 className="text-xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg text-gray-400 leading-snug mb-2">
        {excerpt}
      </p>
    </div>
  );
};

export default PostPreview;
