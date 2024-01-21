import React,{createContext,useState,useEffect } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
// import axios from 'axios';
import app from '../firebase/firebase.config'
import { FaPassport } from 'react-icons/fa';
export const AuthContext = createContext();

const auth = getAuth(app) 
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("Gavin");
    const [Loading,setLoading] = useState(true);

    //

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        // then((userCredential)=>{
        //     //signup
        //     const user = userCredential.user;            
        // }).
        // catch((error)=>{
        //     const errorCode = error.code;

        // });
    }
    // sign up with email
    const signUpWithGmail = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    //login using email & password

    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    //logout 

    const logOut =()=>{
        return signOut(auth)
    }

    //update profile
    const updateuserProfile=({name,photoURL})=>{
        updateProfile(auth.currentUser,{
            displayName:"Jane Q. User", photoURL:"https://i.stack.imgur.com/4Bl5y.jpg"
        })
    }
    const authInfo = {
        user,
        createUser
    }
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider