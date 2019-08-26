import React, { Fragment } from 'react';
import { Route, HashRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import useSetUser from '@store/hooks';
import store from '@src/store';
import Home from '@pages/Home';
import Signup from '@pages/Signup';
import Signin from '@pages/Signin';
import Vote from '@pages/Vote';
import MyVote from '@pages/ViewVote';
import PrivateRoute from '@src/Route/PrivateRoute';

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Signin} />
      <PrivateRoute path="/vote" component={Vote} />
      <PrivateRoute path="/myvote" component={MyVote} />
      <ToastContainer autoClose={6000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
    </Fragment>
  )
};

const AppWithRouter = withRouter(App)

const Routes = () => {
  useSetUser({ ...store });
  return (
    <Provider store={store}>
      <Router>
        <AppWithRouter />
      </Router>
    </Provider>
  )
};

export default Routes;
