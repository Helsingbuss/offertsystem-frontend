import { useState } from "react";
import { supabase } from "../supabaseClient";
import logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAF4] font-[Montserrat]">
      <div className="bg-white p-8 rounded-xl shadow-md w-[480px] text-center">
        <img src={logo} alt="logo" className="mx-auto mb-4" style={{ width: '270px', height: '59px' }} />
        <input
          type="email"
          placeholder="E-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[438px] h-[52px] rounded-xl px-4 mb-4 bg-[#F4F4F4] text-lg outline-none"
        />
        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[438px] h-[52px] rounded-xl px-4 mb-4 bg-[#F4F4F4] text-lg outline-none"
        />
        <div className="flex justify-between gap-2">
          <button className="bg-[#1A4C66] text-white text-[20px] font-medium px-6 py-2 rounded-full w-full">
            Logga in
          </button>
          <button className="bg-[#1A4C66] text-white text-[15px] font-medium px-4 py-2 rounded-full w-full">
            Glömt lösenordet
          </button>
        </div>
        <p className="text-[10px] mt-4">version 0.1 skapad av Xellens Agency</p>
      </div>
    </div>
  );
}
