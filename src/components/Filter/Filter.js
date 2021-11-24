import s from './Filter.module.css';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Type name for search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  // onChange: PropTypes.func,
};

// const mapStateToProps = state => ({ value: state.contacts.filter });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(filterContact(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
