import React, { Fragment } from 'react';
import { Route, HashRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Home from '@pages/Home';
import Signup from '@pages/Signup';
import useSetUser from '@store/hooks';
import store from '@src/store';

const App = () => {
  useSetUser({ ...store });
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <ToastContainer autoClose={6000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
    </Fragment>
  )
};

const AppWithRouter = withRouter(App)

const Routes = () => (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);

export default Routes;
