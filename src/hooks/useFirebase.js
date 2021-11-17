import { useEffect, useState } from "react";
import initializeFirebase from "../pages/login/firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initializeFirebase();

function useFirebase() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const registerUser = (email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            history.replace('/');
            // const user = userCredential.user;
            // console.log('userCredential:', user);
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
          })
          .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            // const user = userCredential.user;
            // console.log('userCredential:', user);
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
          })
          .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;