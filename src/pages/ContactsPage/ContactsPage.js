import ContactList from 'components/ContactList';
import Form from 'components/Form';
import Filter from 'components/Filter';
import s from './ContactsPage.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function ContactsPage() {
  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      <h1 className={s.title}>
        Hello, <span className={s.name}>{name}!</span>
      </h1>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
}
