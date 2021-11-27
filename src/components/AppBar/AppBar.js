import Navigation from '../Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <nav className={s.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
}

export default AppBar;
