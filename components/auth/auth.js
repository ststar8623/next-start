import Link from 'next/link';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

const Auth = ({ session }) => {
  console.log('Auth: ', session);
  let authMenu = 'Sign in';
  if (session.user) {
    console.log('inside session if statement: ', true);
    authMenu = 'Sign out';
  }

  return (
    <Menu.Item link>
      <Link href={`/${authMenu.split(' ').join('').toLowerCase()}`}>
        <a>{authMenu}</a>
      </Link>
    </Menu.Item>
  );
};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps)(Auth);