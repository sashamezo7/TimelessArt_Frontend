import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import i18n from './util/i18n';
import HomePage from './ui/pages/Home/HomePage.jsx';
import AccountPage from './ui/pages/Account/AccountPage.jsx';
import ResetPasswordWithTokenPage from './ui/pages/ResetPasswordWithToken/ResetPasswordWithTokenPage.jsx';
import Shop from './ui/pages/Shop/Shop.jsx';
import ArtworkDetail from './ui/pages/Shop/ArtworkDetail.jsx';



function App() { 

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  const notFoundStyles = {
    color: 'var(--primary-color)',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginTop: '20%',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/reset-password" element={<ResetPasswordWithTokenPage />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ArtworkDetail/>} />
        <Route
          path="*"
          element={<h1 style={notFoundStyles}>Page not found eror 404</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
