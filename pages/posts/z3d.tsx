import { NextPage } from "next";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Head from "next/head";

import PostHeader from "../../components/PostHeader";

const Z3d: NextPage = () => {
    const router = useRouter
    return (
        <Layout>
            <Container>
                <Header />
                <article className="mb-32">
                    <Head>
                        <meta property="og:image" content="{post.ogImage.url}" />
                    </Head>
                </article>
                <video src="/videos/postervideo.mp4" width="500px" autoPlay muted loop>
                    <source src="videos/postervideo.mp4" type="video/mp4" />
                </video>
                <div className=" aspect-video pb-20 ">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_XmkxmQ2Ebk?si=2FrjmOfZmmoDgqh0&amp;controls=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
                </div>
                {/* <Video src={Poster} /> */}
            </Container>
        </Layout>
    )


}


export default Z3d;


