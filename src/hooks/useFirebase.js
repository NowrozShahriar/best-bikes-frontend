import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../pages/login/firebase/firebase.init";

initializeFirebase();

function useFirebase() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    const registerUser = (email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Save user in Database
            saveUser(email)
            // const user = userCredential.user;
            // console.log('userCredential:', user);
            history.replace('/');
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

    useEffect(() => {
         fetch(`https://evening-lake-73407.herokuapp.com/users/${user.email}`)
         .then(res => res.json())
         .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error);
          })
          .finally(() => setIsLoading(false));
    }

    const saveUser = (email) => {
        const user = {email};
        fetch('https://evening-lake-73407.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;