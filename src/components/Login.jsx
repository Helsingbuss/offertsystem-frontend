import { useState } from 'react';
import { supabase } from '../supabaseClient';
import logo from './logo.png'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError('Fel e-post eller lösenord');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAF4] font-[Montserrat]">
      <div className="w-[480px] rounded-2xl bg-white px-8 py-6 flex flex-col items-center shadow-md">
        <img src={logo} alt="Bergkvara Logo" className="w-40 mb-6" />
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-postadress"
            className="w-[438px] h-[52px] rounded-lg px-4 text-[20px] font-medium bg-[#F3F3F3] focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Lösenord"
            className="w-[438px] h-[52px] rounded-lg px-4 text-[20px] font-medium bg-[#F3F3F3] focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-between gap-2 mt-2">
            <button
              type="submit"
              className="w-1/2 py-3 text-white text-[20px] font-medium bg-[#1A4C66] rounded-full hover:opacity-90"
            >
              Logga in
            </button>
            <button
              type="button"
              className="w-1/2 py-3 text-[15px] font-medium bg-[#1A4C66] text-white rounded-full hover:opacity-90"
            >
              Glömt lösenordet
            </button>
          </div>
        </form>
        <p className="mt-4 text-[10px] font-medium text-gray-500">
          version 0.1 skapad av Xellens Agency
        </p>
      </div>
    </div>
  );
}
