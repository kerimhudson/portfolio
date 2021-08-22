import Layout from "../../components/layout";
import { getAllPosts } from "../../utils/posts";
import tinydate from "tinydate";
import Link from "next/link";
const dateFormatter = tinydate(`{DD}.{MM}.{YYYY}`);

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div className="blog">
        {posts.map((post) => (
          <Link
            key={post.data.slug}
            href="/blog/[post]"
            as={`/blog/${post.data.slug}`}
          >
            <a>
              <summary>
                <h2>{post.data.title}</h2>
                <time dateTime={post.data.published}>
                  {dateFormatter(new Date(post.data.published))}
                </time>
                <p className="line-clamp-3">{post.data.excerpt}</p>
              </summary>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
