import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Avatar from "./avatar";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, excerpt, slug,}: Props) => {
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
          {/* <Avatar
          myRole={`My Role ${author.myRole}`}
          category={`Category ${author.category}`}
          status={`Status ${author.status}`}
        /> */}
      </h3>
      <p className="text-lg text-gray-400 leading-snug mb-2">
        {excerpt}
      </p>
    </div>
  );
};

export default PostPreview;
