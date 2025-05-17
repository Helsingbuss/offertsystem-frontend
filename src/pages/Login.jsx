import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://sgyogaoanvidoeujzfoc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg("Fel e-post eller lösenord.");
      return;
    }

    if (email === "offert@helsingbuss.se") navigate("/");
    else navigate("/bergkvara");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl mb-6 font-bold">Logga in</h1>

      <input
        type="email"
        placeholder="E-post"
        className="mb-3 p-2 border rounded w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Lösenord"
        className="mb-3 p-2 border rounded w-64"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMsg && <p className="text-red-600 mb-3">{errorMsg}</p>}

      <button onClick={handleLogin} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Logga in
      </button>
    </div>
  );
}
