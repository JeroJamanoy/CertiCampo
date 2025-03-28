import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MenuPrincipal from '../../components/menuPrincipal';
import { useCultives } from '../../context/CultivesContext';
import './RegistroCultivos.css';

function RegistroCultivos(){
    const { getCultives, cultives } = useCultives();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = "#f1f1f1";
        document.body.style.height = "100vh";
        getCultives();
        return () => {
            document.body.style.backgroundColor = "";
            document.body.style.height = "";
        };
    }, []);

    return(
        <div className="background-registro-cultivos">
            <MenuPrincipal />
            <h1>Registro Cultivos</h1>
            <span>En esta sección puede subir los registros de los cultivos, puede escoger 2 opciones: 
            Subirlos usted mismo a la plantilla o bien, crear su propia plantilla y subirlos en esta.
            </span>
            <div className="botones-registro">
                <button onClick={() => navigate('/nuevo-registro')}>
                    <img src="https://img.icons8.com/?size=100&id=12160&format=png&color=000000" alt="icon-library-templates"/>
                    <span>Biblioteca de Plantillas</span>
                </button>
                <button>
                    <img src="https://img.icons8.com/?size=100&id=102714&format=png&color=000000" alt="icon-new-templates"/>
                    <span>Crear su propia plantilla</span>
                </button>
            </div>
            <div className="tabla-registros">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cultivos</th>
                            <th>Fecha de Creación</th>
                            <th>Hecho por</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cultives.map(cultive => (
                            <tr key={cultive._id}>
                                <td>{cultive.name}</td>
                                <td>{cultive.cultivation}</td>
                                <td>{new Date(cultive.date).toLocaleDateString()}</td>
                                <td>{cultive.user.name}</td>
                                <td>{cultive.files}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RegistroCultivos;