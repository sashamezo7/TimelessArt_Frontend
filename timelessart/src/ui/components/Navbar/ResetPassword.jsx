import React, { useState } from "react";
import "./resetPassword.css";
import '../../../util/i18n'
import { useTranslation } from 'react-i18next';

const ResetPassword = ({closeResetPassword}) => {

  const [email, setEmail] = useState('');
  const {t, i18n} = useTranslation();

  return (
    <div className="modal-background">
      <div className="login-frame">
        <button className="button-exit-login" onClick={() => closeResetPassword(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z" fill="black" />
          </svg>
        </button>

        <div className="login-title">
          <p>{t('signin.resetPassword')}</p>
        </div>
        <div className="inputs">
          <div className="input">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="#5F6368" />
            </svg>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button className="button-reset-password">{t('signin.resetPassword')}</button>
      </div>
    </div>
  );
};

export default ResetPassword;
