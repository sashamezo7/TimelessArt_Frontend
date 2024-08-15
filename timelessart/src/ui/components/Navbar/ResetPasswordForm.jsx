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
        <h2>{t('signin.resetPassword')}</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}  
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleResetPassword}>{t('signin.resetPassword')}</button>
      </div>
    </div>
  );
};

export default ResetPasswordWithTokenComponent;
