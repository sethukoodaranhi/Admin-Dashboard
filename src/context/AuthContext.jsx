
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('auth-token') || null);
    const navigate = useNavigate();
console.log("=========tokensdsds===",token)
    const login = (newToken,username) => {
        console.log("====newtoken",newToken)
        localStorage.setItem('auth-token', newToken);
        localStorage.setItem('name',username)
        localStorage.setItem('email',"test@mail.com")
        setToken(newToken);
        navigate('/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('auth-token');
        setToken(null);
        navigate('/login');
    };

    useEffect(() => {
        setToken(localStorage.getItem('auth-token'));
    }, []);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
