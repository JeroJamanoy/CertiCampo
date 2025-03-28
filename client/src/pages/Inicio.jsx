import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import MenuPrincipal from '../components/menuPrincipal';
import './Inicio.css';

function Inicio(){
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
        <div className="inicio">
            <MenuPrincipal />
            <h1>Hola, {user.name} </h1>
            <div className="announcements-container">
                <div className="grid">
                    <div>
                        <article className="card">
                            <h2>Reporte de Actualizaciones</h2>
                            <button onClick={() => window.location.href = 'https://docs.google.com/document/d/1ESveUuVNmCXq3F4CJSjKMhJHCUtqaziQiT--sX5cym8/edit?usp=sharing'}>
                                <img src="https://img.icons8.com/?size=100&id=84011&format=png&color=000000" alt="icon-report" />
                            </button>
                            <span>Informate de todas las ultimas funciones que se acaban de incorporar a la aplicación.</span>
                        </article>
                    </div>
                    <div className="primary">
                        <article className="card">
                            <h2>Tutorial para usar la aplicación</h2>
                            <iframe 
                                width="250" 
                                height="150" 
                                src="https://www.youtube.com/embed/A9lnHN1jqnI" 
                                title="Tutorial"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                            <span>Pulsa aca si quieres conocer todas las funcionalidades de Certicampo.</span>
                        </article>
                    </div>
                    <div>
                        <article className="card">
                            <h2>Tus Eventos</h2>
                            <img src="https://img.icons8.com/?size=100&id=10053&format=png&color=000000" alt="icon-calendary"/>
                            <span>Apuntate a los proximos eventos que tendremos para que mejores tus habilidades y conocimientos.</span>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;