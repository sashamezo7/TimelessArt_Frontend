import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import InputField from '../../../ui/pages/components/InputField/InputField.jsx';
import userIcon from '../../../assets/user.svg';
import phoneIcon from '../../../assets/phone.svg';
import homeIcon from '../../../assets/home.svg';
import { Register, getAccountData } from '../../../lib/api/AccountData/accountData.jsx';
import '../../../ui/pages/Account/account.css';

const AccountForm = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Funcție pentru a obține datele utilizatorului la încărcarea componentelor
        const fetchData = async () => {
            try {
                const data = await getAccountData();
                setName(data.name || '');
                setFirstName(data.firstName || '');
                setPhone(data.phone || '');
                setAddress(data.address || '');
                setCity(data.city || '');
                setPostalCode(data.postalCode || '');
                setCountry(data.country || '');
                setBirthDate(data.birthDate || '');
            } catch (error) {
                console.error("Error fetching account data:", error);
            }
        };

        fetchData(); // Apelează funcția de fetch
    }, []);
    
    const handleSave  = async ()  => {
        try {
            const response = await Register(name, firstName, phone, address, city, postalCode, country, birthDate);
            localStorage.setItem('name', response.name);
            localStorage.setItem('firstName', response.firstName);
            localStorage.setItem('phone', response.phone);
            localStorage.setItem('address', response.address); // Corectat
            localStorage.setItem('city', response.city);
            localStorage.setItem('postalCode', response.postalCode); // Corectat
            localStorage.setItem('country', response.country);
            localStorage.setItem('birthDate', response.birthDate);
            navigate('/');
        } catch (error) {
            alert(error.message || 'An error occurred during saving the data');
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
