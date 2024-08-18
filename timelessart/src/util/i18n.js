import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: { 
    en: {
      translation: {
        signin: {
          password: "Password",
          confirmPassword: "Confirm Password",
          authenticate: "Authenticate",
          createAccount: "Create account",
          resetPassword: "Reset Password",
        },
        checkEmail: {
            emailCheckText: "Check your email for account validation"
        },
        navbar: {
            home: 'Home',
            aboutUs: 'About us',
            art: 'Art',
            exhibitions: 'Exhibitions',
            painting: 'Painting',
            sculpture: 'Sculpture',
            graphics: 'Graphics',
            photography: 'Photography',
            other: 'Other',
            all: 'All artworks',
        },
        account: {
          account: 'Account',
          password: 'Password',
          name: 'Name',
          firstName: 'First name',
          email: 'Email',
          phone: 'Phone',
          address: 'Address',
          city: 'City',
          postalCode: 'Postal Code',
          legalPerson: 'Legal person',
          stateProvince: 'State/province',
          country: 'Country',
          companyName: 'Company Name',
          vatNumber: 'VAT Number',
          companyAddress: 'Company Address',
          comercialRegistrationNumber: 'Commercial Registration Number',
          birthDate:'Birthday',
          Save:'Save'
        }
      }
    },
    ro: {
      translation: {
        signin: {
          password: "Parolă",
          confirmPassword: "Confirmare Parolă",
          authenticate: "Autentificare",
          createAccount: "Creează un cont",
          resetPassword: "Resetează parola"
        },
        checkEmail: {
            emailCheckText: "Verificati email pentru activarea contului"
        },
        navbar: {
            home: 'Acasă',
            aboutUs: 'Despre noi',
            art: 'Artă',
            exhibitions: 'Expoziții',
            painting: 'Pictură',
            sculpture: 'Sculptură',
            graphics: 'Grafică',
            photography: 'Fotografie',
            other: 'Altele',
            all: 'Toate operele de artă',
        },
        account: {
          account: 'Contul tău',
          password: 'Parolă',
          name: 'Nume',
          firstName: 'Prenume',
          email: 'Email',
          phone: 'Telefon',
          address: 'Adresă',
          city: 'Oraș',
          postalCode: 'Cod Poștal',
          legalPerson: 'Persoană juridică',
          stateProvince: 'Județ',
          country: 'Țară',
          companyName: 'Numele companiei',
          vatNumber: 'Cod Unic',
          companyAddress: 'Adresa companiei',
          comercialRegistrationNumber: 'Număr de înregistrare Registrul Comerțului',
          birthDate:'Zi de nastere',
          Save:'Salvare'
        }
      }
    }
  }
});

export default i18n;
