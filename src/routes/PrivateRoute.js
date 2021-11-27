import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isLoggedIn, component: Component }) {
  return (
    <>
      <h1>PrivateRoute</h1>
      {isLoggedIn ? <Component /> : <Navigate to="/login" />}
    </>
  );
}
