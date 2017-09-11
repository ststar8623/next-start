import Layout from '../components/layout/layout';
import withRedux from 'next-redux-wrapper';
import io from 'socket.io-client';
import { makeStore } from '../reducers';

class Index extends React.Component {
  static async getInitialProps({ store, req, isServer }) {
    if (isServer) {
      let user = req.user;
      let isLoggedIn = req.isAuthenticated();
      store.dispatch({
        type: 'UPDATE_SESSION',
        payload: { user, isLoggedIn }
      });
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
