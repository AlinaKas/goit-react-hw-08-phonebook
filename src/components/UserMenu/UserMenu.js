import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';
import avatarDefault from 'images/avatar-default.png';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = avatarDefault;

  return (
    <div className={s.container}>
      <img src={avatar} alt="default avatar" className={s.avatar} />
      <span className={s.text}>
        Welcome, <span className={s.name}>{name}</span>
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
