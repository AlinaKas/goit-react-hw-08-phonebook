import ContactList from 'components/ContactList';
import Form from 'components/Form';
import Filter from 'components/Filter';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <div className={s.container}>
      {/* <h1 className={s.title}>PHONEBOOK</h1> */}
      <div className={s.wrapper}>
        <Form />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
}
