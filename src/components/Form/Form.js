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
        (contact.name.toLowerCase() === name.toLowerCase() &&
          toast.info(`The contact with name "${name}" already exists`)) ||
        (contact.number === number &&
          toast.info(`The contact with tel. "${number}" already exists`))
      );
    });

    if (duplicateContact) {
      resetForm();
      return;
    }

    dispatch(addContact({ name, number }));
    toast.success(`Success`);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      {/* <h1 className={s.title}>My PhoneBook</h1> */}
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <label className={s.label}>
            <span className={s.description}>Name</span>
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
            <span className={s.description}>Number</span>
            <input
              className={s.input}
              type="tel"
              name="number"
              placeholder="+38(0XX)-XXX-XX-XX"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={handleInputChange}
            />
          </label>
        </div>

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
