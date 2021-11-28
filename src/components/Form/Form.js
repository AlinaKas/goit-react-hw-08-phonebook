import { useState } from 'react';
import s from './Form.module.css';
import { addContact } from 'redux/contacts/contacts-operations';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (duplicateContact) {
      alert(`${name} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <div className={s.container}>
      {/* <h1 className={s.title}>Phonebook</h1> */}
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Rosie Simpson"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="+38(0XX)-XXX-XX-XX"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={phone}
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

// const mapDispatchToProps = dispatch => ({
//   addContact: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(Form);

export default Form;
