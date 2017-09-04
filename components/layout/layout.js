import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from '../nav/nav';
import Auth from '../auth/auth';
import { Sidebar, Segment, Menu, Header } from 'semantic-ui-react';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      loadingContent: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    const menus = [
      {href: '/', name: 'Order'},
      {href: '/history', name: 'History'},
      {href: '/settings', name: 'Settings'},
      {href: '/about', name: 'About'}
    ];

    return (
      <div>
        <Head>
          <title>No-line</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css'></link>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'></link>
        </Head>
        <Nav toggleSidebar={this.toggleSidebar}/>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='slide along'
            visible={this.state.showSidebar}
            vertical
            inverted
            width='thin'
          >
            {menus.map((menu, index) => 
              <Menu.Item link={true} key={index}>
                <Link href={menu.href}><a>{menu.name}</a></Link>
              </Menu.Item>
            )}
            <Auth />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment 
              inverted
              color='grey'
              style={{height: '100vh', borderRadius: 0}}
              loading={this.state.loadingContent}
            >
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Layout;