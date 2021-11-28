import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({ component: Component, redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log('LOGIN', isLoggedIn);
  return <>{isLoggedIn ? <Component /> : <Navigate to={redirectTo} />}</>;
}
