import Layout from '../components/layout/layout';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../reducers';
import { updateSession } from '../reducers/session';

class Index extends React.Component {
  static async getInitialProps({ store, req, isServer }) {
    if (isServer) {
      let session = { user: req.user, isLoggedIn: req.isAuthenticated() };
      store.dispatch(updateSession(session));
    }
    return { isServer };
  }

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

export default withRedux(makeStore)(Index);
