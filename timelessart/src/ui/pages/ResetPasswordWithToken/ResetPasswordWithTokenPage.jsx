import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar/Navbar.jsx';
import InputField from '../components/InputField/InputField.jsx'
import passwordIcon from '../../../assets/password.svg'
import ResetPasswordWithTokenComponent from '../../components/Navbar/ResetPasswordForm.jsx';


import { useState } from 'react';

const ResetPasswordWithTokenPage = () => {

    const {t, i18n} = useTranslation();
    const [newPassword, setnewPassword] = useState('');
    
    return (
        <>
        <div className="reset-password-container">
        <ResetPasswordWithTokenComponent />
        </div>
        </>
    );
}

export default ResetPasswordWithTokenPage;