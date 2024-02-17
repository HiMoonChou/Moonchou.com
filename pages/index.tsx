import Container from "../components/Container";
import MoreStories from "../components/MoreStories";
import HeroPost from "../components/HeroPost";
import Intro from "../components/Introduce";
import Layout from "../components/Layout";
import Clients from "../components/Clients";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import { FadeIn } from "../components/FadeIn"; 
import TopProjects from "../components/TopProjects";
import Link from 'next/link'

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
    <FadeIn>
      <Layout>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <Clients/>
          <TopProjects/>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
      </FadeIn>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
