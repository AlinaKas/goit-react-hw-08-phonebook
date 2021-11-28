import s from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function HomePage() {
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Hello, <span className={s.name}>{name}!</span>
      </h1>
      <p className={s.text}> Welcome to PhoneBookApp.</p>
      <p className={s.text}>
        It's the easy way to keep all your contacts in one place.
      </p>
      <p className={s.text}>
        In you personal PHONEBOOK you could create, filter, delete your
        contacts.
      </p>
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </div>
  );
}
