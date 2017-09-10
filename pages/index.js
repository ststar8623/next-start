import Layout from '../components/layout/layout';
import withRedux from 'next-redux-wrapper';
import io from 'socket.io-client';
import { makeStore } from '../reducers';
import { updateSession } from '../reducers/session';

class Index extends React.Component {
  static async getInitialProps({ store, req, isServer }) {
    if (isServer) {
      store.dispatch(updateSession({ 
        user: req.user,
        isLoggedIn: req.isAuthenticated() 
      }));
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
