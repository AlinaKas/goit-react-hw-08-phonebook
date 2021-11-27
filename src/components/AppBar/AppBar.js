import Navigation from '../Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';

function AppBar() {
  return (
    <header>
      <nav className={s.nav}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </nav>
    </header>
  );
}

export default AppBar;
