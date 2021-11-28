import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  // isLoggedIn,
  component: Component,
  redirectTo,
  restricted = false,
  // ...props
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // const shouldRedirect = isLoggedIn && restricted;
  // console.log(isLoggedIn);
  // console.log(restricted);

  return (
    <>
      <h1>PublicRoute</h1>
      {/* {shouldRedirect ? <Navigate to="/" /> : <Component />} */}
      {isLoggedIn && restricted ? <Navigate to={redirectTo} /> : <Component />}
    </>
  );
}
