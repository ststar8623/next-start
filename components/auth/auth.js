import Link from 'next/link';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

const Auth = ({ session }) => {
  let authMenu = 'Sign in';
  if (session.user) { authMenu = 'Sign out'; }

  return (
    <Link href={`/${authMenu.split(' ').join('').toLowerCase()}`} passHref>
      <Menu.Item link>{authMenu}</Menu.Item>
    </Link>
  );
};

const mapStateToProps = state => ({ session: state.session });

export default connect(mapStateToProps)(Auth);