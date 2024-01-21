import React,{createContext,useState,useEffect } from 'react'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
// import axios from 'axios';
import app from '../firebase/firebase.config'
import { FaPassport } from 'react-icons/fa';
export const AuthContext = createContext();

const auth = getAuth(app) 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("Gavin");
    const [Loading,setLoading] = useState(true);

    //

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password).
        then((userCredential)=>{
            //signup
            const             
        })
    }
    const authInfo = {
        user
    }
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider