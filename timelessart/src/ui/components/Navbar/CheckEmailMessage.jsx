import React, { useState } from "react";
import "./resetPassword.css";
import '../../../util/i18n'
import { useTranslation } from 'react-i18next';

const CheckEmailMessage = ({closeCheckEmailMessage}) => {

  const [email, setEmail] = useState('');
  const {t, i18n} = useTranslation();

  return (
    <div className="modal-background">
      <div className="login-frame">
        <button className="button-exit-login" onClick={() => closeCheckEmailMessage(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z" fill="black" />
          </svg>
        </button>

        <div className="login-title">
          <p>{t('checkEmail.emailCheckText')}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckEmailMessage;
