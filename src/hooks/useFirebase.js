import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Others/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

// initialize Firebase app
initializeFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        // setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                // send name to firebase after creation
                // updateProfile(auth.currentUser, {
                //     displayName: name
                // }).then(() => {
                // }).catch((error) => {
                // });
                // history.replace('/');
            })
            .catch((error) => {
                // setAuthError(error.message);
            })
        // .finally(() => setIsLoading(false));
    }

    // observe user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            // setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        // setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        // .finally(() => setIsLoading(false));
    }

    return {
        user,
        // admin,
        // isLoading,
        // authError,
        registerUser,
        // loginUser,
        logOut,
    }
}

export default useFirebase;