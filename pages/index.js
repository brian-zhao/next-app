import React from 'react'

import { Post } from "../components/Post";
import { daoArticles } from "../getAllPosts";


daoArticles.sort(function(a, b) {
  return a.index - b.index;
})

export default function IndexPage() {
  return (
    <>
      {daoArticles.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
