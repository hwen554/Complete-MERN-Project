import React,{createContext,useState,useEffect } from 'react'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
// import axios from 'axios';
import app from '../firebase/firebase.config'
import { FaPassport } from 'react-icons/fa';
export const AuthContext = createContext();

const auth = getAuth(app) 
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("Gavin");
    const [loading,setLoading] = useState(true);

    //

    const createUser = (email,password)=>{
        setLoading(true)
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
        setLoading(true)
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
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photoURL
        })
    }
    
    // check signed-in user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)

            } else {

            }
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateuserProfile,
        loading
    }
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider