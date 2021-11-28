import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <ul className={s.menu}>
      <li className={s.item}>
        <NavLink to="/login">LogIn</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/register">SignUp</NavLink>
      </li>
    </ul>
  );
}

export default AuthNav;
