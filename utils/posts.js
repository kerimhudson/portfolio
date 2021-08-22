import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
export const getAllPosts = async () => {
  let posts = getAllPostSlugs();
  posts = await Promise.all(posts.map(readPostData));
  return posts;
};

export const getAllPostSlugs = () =>
  fs.readdirSync(path.join(process.cwd(), "/posts"));

const readPostData = async (slug) => {
  const postContent = fs.readFileSync(path.join(process.cwd(), "/posts", slug));
  let { content, data } = matter(postContent);
  content = await remark().use(html).process(content);

  data.slug = slug.split(".")[0];
  return { content: content.value, data };
};

export const getPost = async (slug) => readPostData(`${slug}.md`);
