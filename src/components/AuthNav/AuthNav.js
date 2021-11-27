import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <>
      <NavLink to="/login" className={s.link}>
        Log In
      </NavLink>
      <NavLink to="/register" className={s.link}>
        Sign Up
      </NavLink>
    </>
  );
}

export default AuthNav;
