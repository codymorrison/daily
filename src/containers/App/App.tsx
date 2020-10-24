import './App.css';

import React from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Home from '../../pages/Home';
import { removeUser, selectors, setUser } from '../../state/Auth';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectors.selectCurrentUser);

  const onGoogleAuthSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log('success response: ', response);
    if ('profileObj' in response) dispatch(setUser(response.profileObj));
  };

  const onGoogleAuthFailure = (error: Error) => {
    console.error('failure response: ', error);
    dispatch(removeUser());
  };

  return (
    <Router>
      <main className="App">
        <Sidebar
          currentUser={currentUser}
          onLoginSuccess={onGoogleAuthSuccess}
          onLoginFailure={onGoogleAuthFailure}
        />

        <section id="page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default App;
