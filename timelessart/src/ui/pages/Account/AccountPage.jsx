import { useTranslation } from 'react-i18next';
import './account.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import InputField from '../components/InputField/InputField.jsx'
import mailIcon from '../../../assets/mail.svg'
import passwordIcon from '../../../assets/password.svg'
import homeIcon from '../../../assets/home.svg'
import phoneIcon from '../../../assets/phone.svg'
import userIcon from '../../../assets/user.svg'


import { useState } from 'react';

const AccountPage = () => {

    const {t, i18n} = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [province, SetProvince] = useState('');


    return (
        <>
        <Navbar/>
        
        <div className="account-content">
            <div className="title-account-frame"><p className='title-account'>{t('account.account')}</p></div>
            <InputField
                className='inputField-frame'
                icon={mailIcon} 
                placeholder={t('account.email')} 
                value={email}
                setValue={setEmail}
            />
            <InputField
                className='inputField-frame'
                icon={passwordIcon} 
                placeholder={t('account.password')} 
                value={password}
                setValue={setPassword}
            />
            <InputField
                className='inputField-frame'
                icon={userIcon} 
                placeholder={t('account.surname')} 
                value={firstName}
                setValue={setFirstName}
            />
            <InputField
                className='inputField-frame'
                icon={userIcon} 
                placeholder={t('account.name')} 
                value={lastName}
                setValue={setLastName}
            />
            <InputField
                className='inputField-frame'
                icon={phoneIcon} 
                placeholder={t('account.phone')} 
                value={phone}
                setValue={setPhone}
            />
        
        </div>
        </>
    );
}

export default AccountPage;