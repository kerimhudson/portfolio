import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostSlugs, getPost } from "../../utils/posts";

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <meta name="description" content={post.data.excerpt} />
        <meta name="author" content="Kerim Hudson" />
        <meta charset="UTF-8" />
        <meta property="og:title" content={post.data.title} />
        <meta property="og:description" content={post.data.excerpt} />
        <meta property="twitter:title" content={post.data.title} />
        <meta property="twitter:description" content={post.data.excerpt} />
        <meta
          property="og:url"
          content={`https://kerim.sh/blog/${post.data.slug}`}
        />
        <meta
          property="twitter:url"
          content={`https://kerim.sh/blog/${post.data.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <Layout title={post.data.title}>
        <article
          className="post"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Layout>
    </>
  );
};

export default Post;

export const getStaticPaths = () => {
  const paths = getAllPostSlugs().map((slug) => ({
    params: { post: slug.split(".")[0] },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: await getPost(params.post),
    },
  };
};
