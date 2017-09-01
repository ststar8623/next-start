import { Provider } from 'react-redux';
import { initStore } from '../reducers/index';
import reducer from '../reducers/index';
<<<<<<< 0b6c14f76c44ebeecccd22825b7d7328b0367642
import Layout from '../components/layout/layout';

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
    // this.store = initStore(reducer, props.initialState, props.isServer);
=======
import Nav from '../components/nav/nav';
import { Sidebar, Segment, Menu, Header } from 'semantic-ui-react';

class Index extends React.Component {
  static async getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(reducer, null, isServer);
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    let pageProps = {};

    return { initialState: store.getState(), isServer, userAgent };
  }

  constructor(props) {
    super(props);
    this.store = initStore(reducer, props.initialState, props.isServer);

    this.state = {
      showSidebar: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
>>>>>>> rebasing
  }

  render() {
    return (
<<<<<<< 0b6c14f76c44ebeecccd22825b7d7328b0367642
      // <Provider store={this.store}>
      <Layout>
        <h3>Application Content</h3>
      </Layout>
      // </Provider>
=======
      <Provider store={this.store}>
        <div id="main">
          <Nav toggleSidebar={this.toggleSidebar} />
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="slide along"
              visible={this.state.showSidebar}
              vertical
              inverted
              width="thin"
            >
              <Menu.Item>Order</Menu.Item>
              <Menu.Item>History</Menu.Item>
              <Menu.Item>Setting</Menu.Item>
              <Menu.Item>About</Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment
                inverted
                color="grey"
                style={{ height: '100vh', borderRadius: 0 }}
              >
                <Header as="h3">Application Content</Header>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Provider>
>>>>>>> rebasing
    );
  }
}

export default Index;
