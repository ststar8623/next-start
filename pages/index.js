import Layout from '../containers/layout/layout';
import withRedux from 'next-redux-wrapper';

class Index extends React.Component {
  // static async getInitialProps({ req }) {
  //   const isServer = !!req;
  //   const store = initStore(reducer, null, isServer);
  //   const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  //   let pageProps = {};

  //   return { initialState: store.getState(), isServer, userAgent };
  // }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <h3>Application Content</h3>
      </Layout>
    );
  }
}
export default Index;
// export default withRedux()(Index);
