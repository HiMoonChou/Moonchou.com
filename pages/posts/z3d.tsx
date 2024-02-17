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
            </Container>
        </Layout>
    )


}

export default Z3d;
