import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe();
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(res => { })
            .catch(err => { console.log(err); })
    }

    const authInfo = { user, setUser, googleLogin, logOut }
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;