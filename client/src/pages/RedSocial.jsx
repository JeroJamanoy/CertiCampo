import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import MenuPrincipal from '../components/menuPrincipal';
import './RedSocial.css';

function RedSocial() {
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
      document.body.style.backgroundColor = "#f1f1f1";
      document.body.style.height = "100vh";
      return () => {
          document.body.style.backgroundColor = "";
          document.body.style.height = "";
      };
  }, []);
  return (
    <div className="background-redsocial">
      <MenuPrincipal />
      <h1>Red Social</h1>
      <p>Esta es la red social</p>
    </div>
  );
}

export default RedSocial;