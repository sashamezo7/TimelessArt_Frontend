import { useTranslation } from "react-i18next";
import { useState } from "react";

import InputField from "../components/InputField/InputField";
import userIcon from "../../../assets/user.svg";
import phoneIcon from "../../../assets/phone.svg";
import emailIcon from "../../../assets/mail.svg";
import TextBox from "../components/TextBox/TextBox";
import ButtonFilled from "../components/ButtonFilled/ButtonFilled";
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSend = () => {};

  return (
    <>
    
      <div className="contact-email-container">
      <h2 className="title-contact-email roboto-medium">{t("contact.title")}</h2>
      <p className="text-contact roboto-regular">{t("contact.text")}</p>
        <InputField
          icon={userIcon}
          placeholder={t("account.name")}
          value={name}
          setValue={setName}
          className='input-contact-page'
        />
        <InputField
          icon={phoneIcon}
          placeholder={t("account.phone")}
          value={phone}
          setValue={setPhone}
        />
        <InputField
          icon={emailIcon}
          placeholder={t("account.email")}
          value={email}
          setValue={setEmail}
        />
        <TextBox
          message={message}
          setMessage={setMessage}
          placeholder={t("contact.textBoxPlaceholder")}
          className = "text-box-contact"
        />
        <div className="contact-button-container">
          <ButtonFilled
            placeholder={t("contact.send")}
            fontSize={"1.2em"}
            width={"200px"}
            onClick={handleEmailSend}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
