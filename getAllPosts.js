function importAll(r, nav) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
    nav: nav,
    index: fileName.substr(6).replace(/\/index\.mdx$/, "")
  }));
}

export const daoArticles = importAll(
  require.context("./pages/dao/", true, /\.mdx$/), "dao"
);

export const blogPosts = importAll(
  require.context("./pages/blog/", true, /\.mdx$/), "blog"
);
