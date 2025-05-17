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
      password
    });
    if (error) alert(error.message);
  };

  return (
    <div className="login-wrapper">
      <img src={logo} alt="Helsingbuss logo" className="logo" />
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-postadress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="button-group">
            <button type="submit">Logga in</button>
            <a href="#">Glömt lösenordet</a>
          </div>
        </form>
        <p className="version-text">
          version 0.1 skapad av Xellens Agency byggd till Helsingbuss
        </p>
      </div>
    </div>
  );
}
