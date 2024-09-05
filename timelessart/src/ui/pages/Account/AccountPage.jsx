import { useTranslation } from "react-i18next";
import "./account.css";
import AccountForm from "../../components/Navbar/AccountForm.jsx";

const AccountPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <AccountForm t={t} />
    </>
  );
};

export default AccountPage;
