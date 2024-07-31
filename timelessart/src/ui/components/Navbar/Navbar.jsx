import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./login.css"
import Signin from "./Signin";
import ResetPassword from "./ResetPassword";

import '../../../util/i18n'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);



  const {t, i18n} = useTranslation();


  const handleClick = () => {
    setIsRotated(!isRotated);
  };


  return (
    <>
    {isLoginOpen && <Login closeLogin={setIsLoginOpen} closeSignin={setIsSigninOpen} closeResetPassword={setIsResetPasswordOpen}/>}
    {isSigninOpen && <Signin closeSignin={setIsSigninOpen} closeLogin={setIsLoginOpen}/>}
    {isResetPasswordOpen && <ResetPassword closeResetPassword={setIsResetPasswordOpen}/>}
      <div className="navbar-container">
        <div className="navbar-frame">
          <nav className="navbar">
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <div className="links">
              <Link to="/">{t('navbar.home')}</Link>
              <Link to="/about">{t('navbar.aboutUs')}</Link>
              <div
                className="clickable-container"
                onClick={handleClick}
              >
                <Link to="/art">
                {t('navbar.art')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                    viewBox="0 0 10 5"
                    fill="none"
                    className={isRotated ? 'rotate' : ''}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.48622 4.80911C5.35946 4.93134 5.18755 5 5.00831 5C4.82906 5 4.65715 4.93134 4.53039 4.80911L0.706369 1.12092C0.641806 1.06078 0.590308 0.98884 0.554881 0.909297C0.519453 0.829754 0.500805 0.744202 0.500026 0.657634C0.499246 0.571066 0.516349 0.485216 0.550338 0.405091C0.584327 0.324966 0.634521 0.252172 0.69799 0.190957C0.76146 0.129742 0.836934 0.0813313 0.92001 0.0485497C1.00309 0.0157682 1.0921 -0.000727636 1.18185 2.46164e-05C1.27161 0.000776869 1.36031 0.0187623 1.44278 0.0529313C1.52526 0.0871004 1.59985 0.136769 1.6622 0.199038L5.00831 3.42629L8.35441 0.199038C8.4819 0.0802769 8.65265 0.0145621 8.82989 0.0160475C9.00713 0.017533 9.17668 0.0860998 9.30201 0.20698C9.42734 0.327861 9.49843 0.491383 9.49997 0.662327C9.50151 0.833271 9.43338 0.99796 9.31024 1.12092L5.48622 4.80911Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </Link>
              </div>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="button-container-navbar">
              <button className="button-navbar-signin" onClick={() => {setIsSigninOpen(true)}}>{t('signin.createAccount')}</button>
              <button className="button-navbar-login"onClick={() => {setIsLoginOpen(true)}}>{t('signin.authenticate')}</button>
            </div>
          </nav>
        </div>
      </div>
    </>

  );
};

export default Navbar;
