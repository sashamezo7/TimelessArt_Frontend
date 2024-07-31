import './App.css'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './ui/components/Navbar/Navbar';
import i18n from './util/i18n';


function App() { 

  useEffect(()=>{
    i18n.changeLanguage(navigator.language)
  }, []);
  
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
