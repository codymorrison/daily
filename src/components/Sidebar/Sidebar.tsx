import React from 'react';
import './Sidebar.css';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { CurrentUserType } from '../../state/Auth/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

type SidebarPropsType = {
  currentUser?: CurrentUserType;
  onLoginSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onLoginFailure: (error: Error) => void;
};

const Sidebar = ({
  currentUser,
  onLoginSuccess,
  onLoginFailure,
}: SidebarPropsType) => {
  return (
    <nav id="sidebar" className={`${!currentUser ? 'fullscreen' : ''}`}>
      {!currentUser && (
        <div className="login-required">
          <h2>This app is currently in beta.</h2>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID as string}
            buttonText="Sign in"
            fetchBasicProfile={true}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
      )}

      {!!currentUser && (
        <header>
          <h2>Project</h2>
          <nav>
            <ul>
              <li>
                <button className="settings-button">
                  <FontAwesomeIcon icon={faCogs} />
                </button>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </nav>
  );
};

/* ; */

export default Sidebar;
