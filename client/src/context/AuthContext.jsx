import PropTypes from "prop-types";
import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, verifyToken } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe estar dentro del proveedor AuthContext");
    }
    return context
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const login = async (user) => {
        try {
            console.log("Datos enviados al backend:", user);
            const res = await loginRequest(user);
            console.log("Respuesta del backend:", res.data);
            setUser(res.data);
            return res.data
        } catch (error) {
            console.error("Error al iniciar sesión:", error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        async function checkLogin(){
            const cookies = Cookies.get();
            if (cookies.token){
                try {
                    const res = await verifyToken(cookies.token);
                    setUser(res.data)
                    console.log("Usuario Autenticado:", res.data);
                } catch (error) {
                    console.error("Error al verificar token:", error.response ? error.response.data : error.message);
                    setUser(null);
                }
            }
        }
        checkLogin();
    }, []);
    return (
        <AuthContext.Provider value = {{login, user}}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
