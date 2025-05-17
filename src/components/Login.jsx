// src/components/Login.jsx
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from '../components/logo.png';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setError(error ? error.message : null);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />
        <input
          type="email"
          placeholder="E-postadress"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Lösenord"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Logga in</button>
        {error && <p className="login-error">{error}</p>}
        <p className="login-forgot">Glömt lösenord?</p>
        <p className="login-footer">Bergkvara Buss Offertsystem</p>
      </form>
    </div>
  );
}
