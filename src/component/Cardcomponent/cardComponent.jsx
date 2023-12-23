// CardComponent.js
import './cardComponent.css';
import React from 'react';
import { Button, Checkbox } from '@mui/material';

export default function CardComponent({ onLogin, onRegister, onForgotPassword }) {
  const handleLogin = () => {

  };

  return (
    <div className='card-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='email'>Enter your email address</label>
          <input type='email' id='email' name='email' required />
        </div>
        <div>
          <label htmlFor='password'>Enter your password</label>
          <input type='password' id='password' name='password' required />
        </div>
        <div className='remember-me'>
          <Checkbox className='remember' />
          <label htmlFor='remember' className='re-text'>Remember me</label>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
      <div className='additional-options'>
        <Button onClick={onRegister}>Register</Button>
        <Button onClick={onForgotPassword}>Forgot Password?</Button>
      </div>
    </div>
  );
}
