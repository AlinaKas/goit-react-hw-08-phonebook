import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import avatarDefault from 'images/avatar-home.png';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  const name = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const avatar = avatarDefault;
  return (
    <div className={s.container}>
      <div className={s.wrap}>
        {isLoggedIn ? (
          <>
            <h1 className={s.title}>
              Hello, <span className={s.name}>{name}</span>!
            </h1>
            <p className={s.text}>
              PhoneBook is the easy way to keep all your contacts in one place.
            </p>
            <p className={s.text}>
              You can store, search, update your contacts anytime.
            </p>
            <NavLink to="/contacts">
              <div className={s.content}>
                <span className={s.label}>YOUR PHONEBOOK</span>
                <img src={avatar} alt="default avatar" className={s.avatar} />
              </div>
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">
            <div className={s.content}>
              <img src={avatar} alt="default avatar" className={s.avatar} />
              <h1>PhoneBookApp</h1>
            </div>
          </NavLink>
        )}

        {/* {!isLoggedIn && (
          <>
            <p className={s.text}>
              Are you a new user? Fill out the registration form to create your
              account.
            </p>
            <p className={s.text}>Do you have an account, please login.</p>
          </>
        )} */}
      </div>
    </div>
  );
}
