import React from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import './App.css';
import { setUser, removeUser, selectors } from '../../state/Auth';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';

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
    <main className="App">
      <Sidebar
        currentUser={currentUser}
        onLoginSuccess={onGoogleAuthSuccess}
        onLoginFailure={onGoogleAuthFailure}
      />
    </main>
  );
}

export default App;
