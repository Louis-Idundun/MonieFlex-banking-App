import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(null);

    const saveToken = (token) => setToken(token)
    const logout = () => setToken(null)

    const contextValues = {
        token,
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