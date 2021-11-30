// import ContactList from 'components/ContactList';
// import Form from 'components/Form';
// import Filter from 'components/Filter';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import PreLoader from 'components/Preloader/Preloader';
import { authOperations } from 'redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

// const NotFoundPage = lazy(() =>
//   import(
//     './pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
//   ),
// );

function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsCurrentUser)

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<PreLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute component={HomePage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  component={LoginPage}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={RegisterPage}
                  redirectTo="/"
                  restricted
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
            {/* <Route path="*" element={'Error'} /> */}
          </Routes>
        </Suspense>
        <ToastContainer position="top-right" autoClose={5000} theme="dark" />
      </main>
    </Container>
  );
}
// }

export default App;
