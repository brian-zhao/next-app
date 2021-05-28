import React from 'react'
import { Post } from "../../components/Post";
import { blogPosts } from "../../getAllPosts";

export default function IndexPage() {
  return (
    <>
      {blogPosts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
