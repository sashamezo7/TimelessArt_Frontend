import { useTranslation } from 'react-i18next';
import './account.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import AccountForm from '../../components/Navbar/AccountForm.jsx';

const AccountPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <AccountForm t={t} />
        </>
    );
};

export default AccountPage;