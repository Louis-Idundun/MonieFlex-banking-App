import Cookies from 'js-cookie';
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(null);

    const saveToken = (token) => {
        setToken(token)
        Cookies.set("token", token, {
            secure: true
        })
    }
    const logout = () => setToken(null)

    const contextValues = {
        token: token ?? Cookies.get("token"),
        setToken: saveToken,
        logout,
    };

    return (
        <AuthContext.Provider value={ contextValues }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext