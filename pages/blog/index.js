import React from 'react'
import { Post } from "../../components/Post";
import { blogPosts } from "../../getAllPosts";

export default function BlogPage() {
  return (
    <>
      {blogPosts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
