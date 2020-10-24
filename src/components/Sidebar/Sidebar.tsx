import './Sidebar.css';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { CSSTransition } from 'react-transition-group';

import { CurrentUserType } from '../../state/Auth/types';
import SidebarMenu from './components/SidebarMenu';

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
  const ref = useRef(null);

  return (
    <CSSTransition
      in={!!currentUser}
      timeout={1000}
      classNames="sidebar-animation"
      nodeRef={ref}>
      <nav id="sidebar" ref={ref}>
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
          <div className="sidebar-container">
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
            <SidebarMenu />
          </div>
        )}
      </nav>
    </CSSTransition>
  );
};

export default Sidebar;
