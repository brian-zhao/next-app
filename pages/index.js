import React from 'react'
// import Layout from '../components/Layout'
// import { getPosts } from '../api/posts'
// import Post from '../components/Post'

import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

// const IndexPage = ({ posts }) => (
//   <Layout>
//     <ul>
//       {posts.map(p => (
//         <Post key={p.title} post={p} />
//       ))}
//     </ul>
//   </Layout>
// )

// IndexPage.getInitialProps = async ({ req }) => {
//   const res = await getPosts()
//   const json = await res.json()
//   return { posts: json }
// }

// export default IndexPage

export default function IndexPage() {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}