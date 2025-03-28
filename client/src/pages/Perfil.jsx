import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import MenuPrincipal from '../components/menuPrincipal';
import './Perfil.css';

function Perfil(){
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

    return(
        <div className="background-perfil">
            <MenuPrincipal />
            <div className="container">
                <h1>Perfil</h1>
                <p>Nombre</p>
                <span>{user.name}</span>
                <p>Correo</p>
                <span>{user.email}</span>
                <p>Telefono</p>
                <span>{user.number_phone}</span>
                <p>Rol</p>
                <span>{user.role}</span>
            </div>
        </div>

    )
}

export default Perfil;