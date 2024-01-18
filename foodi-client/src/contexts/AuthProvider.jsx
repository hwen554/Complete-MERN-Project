import React from 'react'
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.config';
import axios from 'axios';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = () => {
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider