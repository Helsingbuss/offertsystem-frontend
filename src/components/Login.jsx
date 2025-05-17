import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from './logo.png';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({ email, password });
  };

  return (
    <div className="login-wrapper">
      <img src={logo} alt="Helsingbuss logo" className="login-logo" />
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="E-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-group">
          <button type="submit" className="login-button">Logga in</button>
          <a href="#" className="forgot-password">Glömt lösenordet</a>
        </div>
      </form>
      <p className="login-footer">
        version 0.1 skapad av Xellens Agency byggd till Helsingbuss
      </p>
    </div>
  );
};

export default Login;
