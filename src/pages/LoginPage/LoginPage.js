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
      <h1 className={s.title}>Log in</h1>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          <p className={s.text}>E-mail</p>
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="exapmle@mail.ru"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          <p className={s.text}>Password</p>
          <input
            className={s.input}
            type="password"
            name="password"
            placeholder="*******"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Enter
        </button>
      </form>
    </div>
  );
}
