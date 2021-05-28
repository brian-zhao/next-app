import React from 'react'

import { Post } from "../components/Post";
import { daoArticles } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      {daoArticles.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
