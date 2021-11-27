import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './RegisterPage.module.css';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleChange = e => {
    // e.target.name e.target.value
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Registration Form</h1>

      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            placeholder="User Name"
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            placeholder="E-mail : exapmle@mail.ru"
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="Password: XXXXXXXX"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Sing Up
        </button>
      </form>
    </div>
  );
}