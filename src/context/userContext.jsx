import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../FirebaseInit';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

const userContext = createContext();

export const useUserContext = () => {
    return useContext(userContext);
}

const UserProvider = (props) => {
    const [user, setUser] = useState();

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const googleLogIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <userContext.Provider value={{
            user,
            signUp,
            logIn,
            logOut,
            googleLogIn
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider;