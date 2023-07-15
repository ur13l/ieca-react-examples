import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Aquí puedes mostrar un spinner de carga mientras se verifica el estado de autenticación
    return <div>Cargando...</div>;
  }

  if (!user) {
    // Aquí puedes redirigir al usuario a la página de inicio de sesión si no está autenticado
    // Por ejemplo: <Redirect to="/login" />;
    return <div>No autenticado. Redirigiendo...</div>;
  }

  return children;
};

export default Auth;
