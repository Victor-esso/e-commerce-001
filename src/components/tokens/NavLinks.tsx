
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop' },
  { name: 'Product', to: '/product' },
  { name: 'Contact Us', to: '/contact' },
];
type props = {
  setSideBarOpen? : (open : boolean) => void;
}

const NavLinks : React.FC<props>  = ({ setSideBarOpen }) =>  {
  return (
    <nav className="nav-links-container">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={ ({ isActive }) => `${ isActive ? 'active' : '' } nav-link` }
          onClick={() => setSideBarOpen?.(false)}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavLinks
