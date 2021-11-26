// import ContactList from 'components/ContactList';
// import Form from 'components/Form';
// import Filter from 'components/Filter';
import PreLoader from 'components/Preloader/Preloader';
import AppBar from 'components/AppBar';
import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import { ToastContainer, toast } from 'react-toastify';
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

// const NotFoundPage = lazy(() =>
//   import(
//     './pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
//   ),
// );

const isAuth = false;
function App() {
  // render() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<PreLoader />}>
          <Routes>
            <Route
              path="/"
              element={<PrivateRoute component={HomePage} isAuth={isAuth} />}
            />
            <Route
              path="/login"
              element={<PublicRoute component={LoginPage} isAuth={isAuth} />}
            />
            <Route
              path="/register"
              element={<PublicRoute component={RegisterPage} isAuth={isAuth} />}
            />
            {/* <Form />
            <Filter />
            <ContactList /> */}
          </Routes>
        </Suspense>
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </main>
    </>
  );
}
// }

export default App;
