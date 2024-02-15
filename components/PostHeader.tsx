import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";
import { FadeIn } from "./FadeIn";
import Avatar from "./Avatar";

// import Avatar from "./Avatar";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <FadeIn>
        <div className="mt-24 mix-blend-difference md:grid grid-cols-8 text-gray-400">
          <div className="hidden  md:mb-12 "></div>

          <div className=" text-left md:fixed  md:w-[30%]">
            <PostTitle>{title}</PostTitle>
            <div className="block  md:hidden"></div>

            <div className="text-lg mb-8">
              <DateFormatter dateString={date} />
            </div>

              <Avatar
                myRole={`My Role ${author.myRole}`}
                category={`Category ${author.category}`}
                status={`Status ${author.status}`}
              />
            </div>

            
          </div>
  

        <div className="mb-8 w-auto justify-center  md:mb-8   sm:mx-0 ">
          <CoverImage title={title} src={coverImage} />
        </div>
      </FadeIn>
    </>
  );
};

export default PostHeader;