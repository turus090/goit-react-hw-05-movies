import { NavLink, Outlet } from 'react-router-dom';
import s from './header.module.scss';
const Header = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.header_nav}>
          <NavLink className={s.header_nav_link} to="/">
            Home
          </NavLink>
          <NavLink className={s.header_nav_link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
