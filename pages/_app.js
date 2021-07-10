import Layout from "../components/Layout";
import CodeBlock from '../components/CodeBlock';
import {MDXProvider} from '@mdx-js/react';

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <MDXProvider components={components}>
          <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}
