import BurgerMenu from './burgerMenu/burgerMenu';
import { Menu, Segment } from 'semantic-ui-react';

const Nav = ({ toggleSidebar, showSidebar }) => (
  <Segment inverted style={{padding: 0, margin: 0, borderRadius: 0}}>
    <Menu inverted text style={{margin: 0}}>
      <Menu.Item position="left" onClick={toggleSidebar}>
        <BurgerMenu _className={showSidebar ? 'change' : null}/>
      </Menu.Item>
    </Menu>
  </Segment>
);

export default Nav;
