import ContactList from 'components/ContactList';
import Form from 'components/Form';
import Filter from 'components/Filter';

export default function ContactsPage() {
  return (
    <>
      <h1>PHONEBOOK</h1>;
      <Form />
      <Filter />
      <ContactList />
    </>
  );
}
