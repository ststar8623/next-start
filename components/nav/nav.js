import BurgerMenu from './burgerMenu/burgerMenu';
import { Menu } from 'semantic-ui-react';
import { navStyle } from './navStyle';

const Nav = ({ toggleSidebar }) => (
  <Menu style={navStyle} inverted>
    <Menu.Item position="left" onClick={toggleSidebar}>
      Menu
    </Menu.Item>
  </Menu>
);

export default Nav;
