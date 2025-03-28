import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './LoginPage.css'
import Cookies from 'js-cookie';


/* 
! OBSERVACIONES:
* Si el usuario ya esta logueado y quiere dirigirse al login, se le debe de redirigir al inicio.
* Pero esto no pasa, puesto que hay un error en el useEffect que verifica si el usuario esta logueado.
* Y esto hace que la pagina renderice muchas veces y se buguee, CORREGIRLO.

* Se debe de poner que si alguna credencial esta mala, aparezca el error, en forma de alerta.
*/

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const {login, user} = useAuth();
    const token = Cookies.get('token');
    console.log(token);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    useEffect(() => {
        document.body.style.backgroundColor = "#7D2181";
        
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    const onSubmit = handleSubmit(async (values) => {
        await login(values);
    });

    return (
        <div className="background-login">
            <div className="login-box">  
                <h1>Certicampo</h1>
                <img src={Logo} alt="Logo Certicampo"/>
                <h2>Ingresar</h2>
                <form onSubmit={onSubmit} id="loginForm">
                    <div className="user-box">
                        <input type="text" {...register("userid", { required: true})} placeholder="Número de Identificación"/>
                        {errors.userid && <p>Este campo es requerido</p>}
                    </div>
                    <div className="password-box">
                        <input type="password" {...register("password", {required: true})} placeholder="Contraseña"/>
                        {errors.password && <p>Este campo es requerido</p>}
                    </div>
                    <button type="submit" className="button-login">Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
