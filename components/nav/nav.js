import BurgerMenu from './burgerMenu/burgerMenu';
import { Menu } from 'semantic-ui-react';
import { navStyle } from './navStyle';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu style={navStyle} inverted>
        <Menu.Item position="left" onClick={this.props.toggleSidebar}>
          Menu
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
