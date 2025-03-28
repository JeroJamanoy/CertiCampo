import MenuPrincipal from '../components/menuPrincipal';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import './Certificados.css';

function Certificados() {
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
        <div className="background-certificados">
            <MenuPrincipal />
            <h1>Sacar Certificados</h1>
        </div>
    );
}

export default Certificados;