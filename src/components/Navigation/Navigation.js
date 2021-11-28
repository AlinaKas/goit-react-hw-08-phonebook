import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <ul className={s.menu}>
        <li className={s.item}>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && (
          <li className={s.item}>
            <NavLink to="/contacts">PhoneBook</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
