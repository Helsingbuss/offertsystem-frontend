
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl mb-6">Logga in</h1>
      <input placeholder="E-post" className="mb-3 p-2 border rounded w-64" />
      <input type="password" placeholder="Lösenord" className="mb-3 p-2 border rounded w-64" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Logga in</button>
    </div>
  );
}
