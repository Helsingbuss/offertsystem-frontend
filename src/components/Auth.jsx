import { useState } from 'react'
import { supabase } from '../supabaseClient'
import logo from './logo.png'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleLogin = async (type) => {
    setLoading(true)
    setErrorMsg(null)

    const fn = type === 'signIn'
      ? supabase.auth.signInWithPassword
      : supabase.auth.signUp

    const { data, error } = await fn({ email, password })

    console.log('RESPONSE:', { data, error })
    if (error) setErrorMsg(error.message)
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md text-center">
        <img src={logo} alt="Logo" className="w-40 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-6">Logga in eller registrera</h1>
        <input className="w-full p-2 border rounded mb-2" type="email" placeholder="E-post" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errorMsg && <div className="text-red-600 mb-2">{errorMsg}</div>}
        <button onClick={() => handleLogin('signIn')} className="w-full bg-blue-600 text-white py-2 rounded mb-2">Logga in</button>
        <button onClick={() => handleLogin('signUp')} className="w-full bg-gray-500 text-white py-2 rounded">Skapa konto</button>
      </div>
    </div>
  )
}
