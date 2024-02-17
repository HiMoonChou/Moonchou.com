import PostPreview from "./PostPreview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="text-white rounded-b-lg ">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Works 2019-2023
      </h2>
      <div className="cloumns-1 pb-16 mb-[340px] md:columns-3  md:gap-x-8 text-left lg:gap-x-4 gap-y-8 md:gap-y-16 md:mb-[1000px] ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
          
        ))}
        </div>
    </section>
  );
};

export default MoreStories;