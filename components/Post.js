import Link from "next/link";
import { HeadPost } from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
    nav
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={"/" + nav + link}>
        <a>Read more &rarr;</a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </article>
  );
};
