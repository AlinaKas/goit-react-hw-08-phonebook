import { useState } from 'react';
import s from './Form.module.css';
import { addContact } from 'redux/contacts/contacts-operations';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const duplicateContact = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
      );
    });

    if (duplicateContact) {
      toast.info(`You have the same contact in the PhoneBook.`);
      resetForm();
      return;
    }

    // if (duplicateContact === number) {
    //   toast.info(`${number} is already in contacts`);
    //   resetForm();
    //   return;
    // }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>My PhoneBook</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.descriptionName}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Rosie Simpson"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          <span className={s.descriptionNumber}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="+38(0XX)-XXX-XX-XX"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
