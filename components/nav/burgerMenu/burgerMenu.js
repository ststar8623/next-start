import { burgerMenuStyle } from './burgerMenuStyle';

const BurgerMenu = ({ _className }) => (
  <div className={_className}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
    <style jsx>{burgerMenuStyle}</style>
  </div>
);

export default BurgerMenu;
