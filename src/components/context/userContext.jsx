import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../FirebaseInit';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
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
            logIn
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider;