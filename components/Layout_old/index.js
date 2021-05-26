import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from '../Nav'
import Footer from '../Footer'

const Layout = props => (
  <Wrapper>
    <Head>
      <title>{ props.title }</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>
      { props.children }
    </main>

    <Footer>
      Footer
    </Footer>
  </Wrapper>
)

export default Layout