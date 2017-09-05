import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

const Auth = () => {
  let isLoggedIn = false; // temporary, should login status from server or props
  let authMenu = 'Sign in';
  if (isLoggedIn) {
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

export default Auth;