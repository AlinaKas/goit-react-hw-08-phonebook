import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={s.link} activeStyle={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/login" className={s.link} activeStyle={s.activeLink}>
        Log In
      </NavLink>
      <NavLink to="/register" className={s.link} activeStyle={s.activeLink}>
        Sign Up
      </NavLink>
    </nav>
  );
}

export default Navigation;
