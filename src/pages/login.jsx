import { useState } from "react";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">Login</h2>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
