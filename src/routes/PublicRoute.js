import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  component: Component,
  redirectTo,
  restricted = false,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn && restricted ? <Navigate to={redirectTo} /> : <Component />}
    </>
  );
}
