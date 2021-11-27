import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <span className={s.text}> Welcome, {name}</span>
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
