import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <h1>
        BZ
      </h1>
      <div>
        <Link href="http://learn.brianzhao.xyz/">
          <a>Learn</a>
        </Link>
        <Link href="http://market.brianzhao.xyz/">
          <a>ASX Market</a>
        </Link>
        <Link href="/blog">
          <a>Tech</a>
        </Link>
        <Link href="/">
          <a>Tao Te Ching</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
