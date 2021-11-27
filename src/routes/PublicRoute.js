import { Navigate } from 'react-router-dom';

export default function PublicRoute({ isLoggedIn, component: Component }) {
  return (
    <>
      <h1>PublicRoute</h1>
      {isLoggedIn ? <Navigate to="/" /> : <Component />}
    </>
  );
}
