import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppBar.module.css';
import { useUser } from '../../context/userContext';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar = () => {
  const { isLoggedIn } = useUser();
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <span role="img" aria-label="computer icon">
          💻
        </span>{' '}
        GoMerch Store
      </NavLink>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="/dashboard" className={buildLinkClass}>
            Dashboard
          </NavLink>
        ) : (
          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};
