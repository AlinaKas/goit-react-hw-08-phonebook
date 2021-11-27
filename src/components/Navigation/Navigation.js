import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <NavLink to="/" className={s.link} activeStyle={s.activeLink}>
      Home
    </NavLink>
  );
}

export default Navigation;
