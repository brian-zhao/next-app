import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3P9T2SJ1S"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S3P9T2SJ1S');
        </script>
        <script data-ad-client="ca-pub-4612414230756953" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap");
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          background: #333;
          color: #fff;
          font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        }
        a {
          color: #fff;
        }
        .content {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
      `}</style>
      <main>
        <Header />
        <div className="content">{children}</div>
      </main>
    </>
  );
}
