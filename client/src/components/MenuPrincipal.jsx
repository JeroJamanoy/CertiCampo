import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './MenuPrincipal.css';

function MenuPrincipal(){
    const navigate = useNavigate();
    
    return (
        <nav className="navbar">
            <div className="logo">
                <button onClick={() => navigate('/')}>
                    <img src={Logo} alt="Logo CertiCampo" className="logo-image"/>
                    <span className="logo.text">CertiCampo</span>
                </button>
            </div>
            <div className="menu">
                <div className="menu-links">
                    <button onClick={() => navigate('/')}>Inicio</button>
                    <button onClick={() => navigate('/registros')}>Registro Cultivos</button>
                    <button onClick={() => navigate('/certificados')}>Sacar Certificados</button>
                    <button onClick={() => navigate('/red_social')}>Foro</button>
                    <button onClick={() => navigate('/perfil')}>Perfil</button>
                </div>
            </div>
            <div className="menu-btn">
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    )
}

export default MenuPrincipal;