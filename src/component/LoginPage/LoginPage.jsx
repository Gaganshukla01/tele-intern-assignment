// LoginPage.js

import React from 'react';
import Background from '../../assets/geiranger.jpg';
import './LoginPage.css';
import CardComponent from '../Cardcomponent/cardComponent';

export default function LoginPage() {
  const handleLogin = () => {
    // Implement your login logic here
  };

  const handleRegister = () => {
    // Implement your register logic here
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
  };

  return (
    <div className='Login-container'>
      <div className='text-container'>
        <CardComponent
          onLogin={handleLogin}
          onRegister={handleRegister}
          onForgotPassword={handleForgotPassword}
        />
      </div>
      <img src={Background} alt='My Image' />
    </div>
  );
}
