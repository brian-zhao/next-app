import { HeadPost } from './HeadPost.js'

export default function BlogPost({ children, meta}) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  )
}
