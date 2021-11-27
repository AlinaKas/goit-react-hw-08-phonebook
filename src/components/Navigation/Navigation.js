import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <NavLink to="/" className={s.link}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={s.link}>
        Phonebook
      </NavLink>
    </>
  );
}

export default Navigation;
