import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <h1 className={s.title}>Hello</h1>
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </>
  );
}
