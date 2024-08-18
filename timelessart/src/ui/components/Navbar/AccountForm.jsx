import InputField from '../../../ui/pages/components/InputField/InputField.jsx';
import userIcon from '../../../assets/user.svg';
import phoneIcon from '../../../assets/phone.svg';
import homeIcon from '../../../assets/home.svg';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import { Register } from '../../../lib/api/AccountData/accountData.jsx';
import '../../../ui/pages/Account/account.css';
const AccountForm= () => {

    const {t, i18n} = useTranslation();
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const navigate = useNavigate();
    const handleSave  = async ()  => {
        try {
            const response = await Register(name,firstName,phone,address,city,postalCode,country,birthDate);
            localStorage.setItem('name', response.name);
            localStorage.setItem('firstName', response.firstName);
            localStorage.setItem('phone', response.phone);
            localStorage.setItem('adress', response.address);
            localStorage.setItem('city',response.city);
            localStorage.setItem('postaleCode', response.postalCode);
            localStorage.setItem('country', response.country);
            localStorage.setItem('birthDate', response.birthDate);
            navigate('/');
          } catch (error) {
            alert(error.message || 'An error occurred during login');
          }
        console.log("Account details saved");
    };
    return (
        <div className="account-content">
            <div className="title-account-frame"><p className='title-account'>{t('account.account')}</p></div>
            <InputField
                className='inputField-frame'
                icon={userIcon}
                placeholder={t('account.name')}
                value={name}
                setValue={setName}
            />
            <InputField
                className='inputField-frame'
                icon={userIcon}
                placeholder={t('account.firstName')}
                value={firstName}
                setValue={setFirstName}
            />
            <InputField
                className='inputField-frame'
                icon={phoneIcon}
                placeholder={t('account.phone')}
                value={phone}
                setValue={setPhone}
            />
            <InputField
                className='inputField-frame'
                icon={homeIcon}
                placeholder={t('account.address')}
                value={address}
                setValue={setAddress}
            />
            <InputField
                className='inputField-frame'
                icon={homeIcon}
                placeholder={t('account.city')}
                value={city}
                setValue={setCity}
            />
            <InputField
                className='inputField-frame'
                icon={homeIcon}
                placeholder={t('account.postalCode')}
                value={postalCode}
                setValue={setPostalCode}
            />
            <InputField
                className='inputField-frame'
                icon={homeIcon}
                placeholder={t('account.country')}
                value={country}
                setValue={setCountry}
            />
            <InputField
                className='inputField-frame'
                icon={userIcon}
                placeholder={t('account.birthDate')}
                value={birthDate}
                setValue={setBirthDate}
            />
            <button className="button-account" onClick={handleSave}>{t('account.Save')}</button>
        </div>
    );
};

export default AccountForm;
