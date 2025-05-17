import { useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from './logo.png';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Bergkvara Buss" className="login-logo" />
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
        <div className="login-actions">
          <button type="submit">Logga in</button>
          <a href="#">Glömt lösenordet</a>
        </div>
      </form>
      <p className="login-footer">
        version 0.1 skapad av Xellens Agency byggd till Helsingbuss
      </p>
    </div>
  );
}
