import PostPreview from "./PostPreview";
import type Post from "../interfaces/post";
import Image from "next/image";
import Link from "next/link";

//assets
import Z3dCover from "../public/assets/blog/projectCovers/Z3dsystem.jpg"
import Omibet from "../public/assets/blog/projectCovers/omibet.jpg"
import illustrationSystem from "../public/assets/blog/projectCovers/illustration-system.jpg"
import Fanxing from "../public/assets/blog/projectCovers/fanxing-brand.jpg"
import { link } from "fs";

const Projects = [
  ["Omibet", Omibet],
  ["3D system", Z3dCover],
  ["illustration system", illustrationSystem],
  ["Fanxing Education", Fanxing]
];

type Props = {
  posts: Post[];
};


const TopProjects = ({ posts }: Props ) => {
  return (
    <section className="text-white rounded-b-lg ">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Key Projects
      </h2>

      <div className="cloumns-1 pb-16  md:columns-2  md:gap-x-8 text-left lg:gap-x-4 gap-y-8 md:gap-y-16  ">
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

export default TopProjects;
