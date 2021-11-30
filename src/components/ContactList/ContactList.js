import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import PreLoader from 'components/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import {
  // getContacts,
  // getFilter,
  getVisibleContacts,
  getLoader,
} from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const loading = useSelector(getLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length === 0 ? (
        <div className={s.titleWrap}>
          <h2 className={s.title}>No contacts in the PhoneBook</h2>
        </div>
      ) : (
        <div className={s.container}>
          <h2 className={s.title}>Contacts</h2>
          <ul className={s.list}>
            {[...contacts]
              .sort((a, b) => a.name.localeCompare(b.name)) //cортировка в алфавитном порядке  [...contacts].sort((a, b) => a.name.localeCompare(b.name));
              .map(({ name, number, id }) => (
                <li key={id} className={s.item}>
                  <span className={s.name}> {`${name}: `}</span>
                  {`${number}`}
                  <button
                    className={s.btn}
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}

      {loading && <PreLoader />}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  // onDeleteContact: PropTypes.func,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
