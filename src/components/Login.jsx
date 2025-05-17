// src/components/Login.jsx
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from '../components/logo.png';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand-text">bergkvara</h1>

        <input
          type="email"
          placeholder="E-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <div className="login-buttons">
          <button onClick={handleLogin} className="login-btn">Logga in</button>
          <button className="forgot-btn">Glömt lösenordet</button>
        </div>

        <p className="footer-text">
          version 0.1 skapad av Xellens Agency byggd till Helsingbuss
        </p>
      </div>
    </div>
  );
}
