import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import s from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>LOG IN</h1>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          E-mail
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          LOG IN
        </button>
      </form>
    </div>
  );
}
