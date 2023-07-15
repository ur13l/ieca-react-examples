import { useEffect, useState } from "react";
import { auth } from "../../index"; // Asegúrate de haber configurado y exportado la instancia de Firebase Authentication en un archivo llamado "firebase.js"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones después de iniciar sesión correctamente
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!!user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-center items-center flex-1">
      <div className="w-80 p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl mb-4">Inicio de sesión</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
