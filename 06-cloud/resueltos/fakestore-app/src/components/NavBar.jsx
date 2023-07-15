import { Link } from "react-router-dom";
import { auth } from "..";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="h-20 w-full bg-black p-4 flex justify-start text-white items-center gap-4">
      <Link to="/" className="flex-1">
        <span>FakeStore</span>
      </Link>
      <span className="font-bold flex-1">{user?.email}</span>

      <Link to="/carrito">
        <span>Carrito</span>
      </Link>
      {!user ? (
        <Link to="/Login">
          <span className="bg-white rounded-full p-2 text-black">
            Iniciar sesión
          </span>
        </Link>
      ) : (
        <button
          className="bg-white rounded-full p-2 text-black"
          onClick={() => {
            signOut(auth).then(() => {});
          }}
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  );
};

export default NavBar;
