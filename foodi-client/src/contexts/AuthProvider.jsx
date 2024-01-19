import React,{createContext,useState,useEffect } from 'react'

// import axios from 'axios';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const authInfo = {
        user
    }
    
    const [loading, setLoading] = useState(true);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider