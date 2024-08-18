import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ResetPasswordWithToken } from "../../../lib/api/AutentificareInregistrare/autentificare";
import { useTranslation } from 'react-i18next';
import '../../../util/i18n';

const ResetPasswordWithTokenComponent = () => {
  const [newPassword, setNewPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Extragem token-ul din URL
  const token = searchParams.get('token');
  console.log('Token:', token); 

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      console.log('Resetting password with:', { token, newPassword }); 
      await ResetPasswordWithToken(token, newPassword);
      alert('Password has been reset successfully.');
      navigate('/'); 
    } catch (error) {
      setError(error.message || 'An error occurred during the password reset process.');
    }
  };

  return (
    <div className="modal-background">
      <div className="login-frame">
          <div className="input">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 14C6.45 14 5.97917 13.8042 5.5875 13.4125C5.19583 13.0208 5 12.55 5 12C5 11.45 5.19583 10.9792 5.5875 10.5875C5.97917 10.1958 6.45 10 7 10C7.55 10 8.02083 10.1958 8.4125 10.5875C8.80417 10.9792 9 11.45 9 12C9 12.55 8.80417 13.0208 8.4125 13.4125C8.02083 13.8042 7.55 14 7 14ZM7 18C5.33333 18 3.91667 17.4167 2.75 16.25C1.58333 15.0833 1 13.6667 1 12C1 10.3333 1.58333 8.91667 2.75 7.75C3.91667 6.58333 5.33333 6 7 6C8.11667 6 9.12917 6.275 10.0375 6.825C10.9458 7.375 11.6667 8.1 12.2 9H21L24 12L19.5 16.5L17.5 15L15.5 16.5L13.375 15H12.2C11.6667 15.9 10.9458 16.625 10.0375 17.175C9.12917 17.725 8.11667 18 7 18ZM7 16C7.93333 16 8.75417 15.7167 9.4625 15.15C10.1708 14.5833 10.6417 13.8667 10.875 13H14L15.45 14.025L17.5 12.5L19.275 13.875L21.15 12L20.15 11H10.875C10.6417 10.1333 10.1708 9.41667 9.4625 8.85C8.75417 8.28333 7.93333 8 7 8C5.9 8 4.95833 8.39167 4.175 9.175C3.39167 9.95833 3 10.9 3 12C3 13.1 3.39167 14.0417 4.175 14.825C4.95833 15.6083 5.9 16 7 16Z" fill="#5F6368" />
            </svg>
            <input
              type="password"
              placeholder={t('signin.password')}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 14C6.45 14 5.97917 13.8042 5.5875 13.4125C5.19583 13.0208 5 12.55 5 12C5 11.45 5.19583 10.9792 5.5875 10.5875C5.97917 10.1958 6.45 10 7 10C7.55 10 8.02083 10.1958 8.4125 10.5875C8.80417 10.9792 9 11.45 9 12C9 12.55 8.80417 13.0208 8.4125 13.4125C8.02083 13.8042 7.55 14 7 14ZM7 18C5.33333 18 3.91667 17.4167 2.75 16.25C1.58333 15.0833 1 13.6667 1 12C1 10.3333 1.58333 8.91667 2.75 7.75C3.91667 6.58333 5.33333 6 7 6C8.11667 6 9.12917 6.275 10.0375 6.825C10.9458 7.375 11.6667 8.1 12.2 9H21L24 12L19.5 16.5L17.5 15L15.5 16.5L13.375 15H12.2C11.6667 15.9 10.9458 16.625 10.0375 17.175C9.12917 17.725 8.11667 18 7 18ZM7 16C7.93333 16 8.75417 15.7167 9.4625 15.15C10.1708 14.5833 10.6417 13.8667 10.875 13H14L15.45 14.025L17.5 12.5L19.275 13.875L21.15 12L20.15 11H10.875C10.6417 10.1333 10.1708 9.41667 9.4625 8.85C8.75417 8.28333 7.93333 8 7 8C5.9 8 4.95833 8.39167 4.175 9.175C3.39167 9.95833 3 10.9 3 12C3 13.1 3.39167 14.0417 4.175 14.825C4.95833 15.6083 5.9 16 7 16Z" fill="#5F6368" />
            </svg>
            <input
              type="password"
              placeholder={t('signin.confirmPassword')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        
       
        <button className="button-reset-password" onClick={handleResetPassword}>{t('signin.resetPassword')}</button>
      </div>
    </div>
  );
};

export default ResetPasswordWithTokenComponent;
