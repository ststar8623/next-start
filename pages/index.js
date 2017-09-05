import Layout from '../containers/layout/layout';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../reducers';
import { bindActionCreators } from 'redux';
import { updateSession } from '../reducers/session';

class Index extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    if (isServer) {
      store.dispatch(updateSession(req.user));
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
