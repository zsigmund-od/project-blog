import React from "react";

import BlogHero from "@/components/BlogHero";
import { loadBlogPost } from "@/helpers/file-helpers";

import styles from "./postSlug.module.css";

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const { frontmatter, content } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={new Date(frontmatter.publishedOn)}
      />
      <div className={styles.page}>
        <p>This is where the blog post will go!</p>
        <p>
          You will need to use <em>MDX</em> to render all of the elements
          created from the blog post in this spot.
        </p>
      </div>
    </article>
  );
}

export default BlogPost;
