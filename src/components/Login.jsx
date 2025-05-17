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
    <div className="login-wrapper">
      <div className="login-box">
        <img src={logo} alt="logo" className="login-logo" />
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-postadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <div className="login-actions">
            <button type="submit" className="login-button">
              Logga in
            </button>
            <button type="button" className="forgot-button">
              Glömt lösenordet
            </button>
          </div>
        </form>
        <p className="login-footer">version 0.1 skapad av Xellens Agency byggd till Helsingbuss</p>
      </div>
    </div>
  );
}
