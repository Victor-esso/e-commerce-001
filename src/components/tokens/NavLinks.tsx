
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop' },
  { name: 'Product', to: '/product' },
  { name: 'Contact Us', to: '/contact' },
];

export default function NavLinks() {
  return (
    <nav className="nav-links-container">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={ ({ isActive }) => `${ isActive ? 'active' : '' } nav-link` }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
