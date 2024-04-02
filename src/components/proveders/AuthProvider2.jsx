import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../../firebase/firebase.config';

export const AuthContext2 = createContext(null)

function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { user, createUser }
    return (
        <AuthContext2.Provider value={authInfo}>
            {children}
        </AuthContext2.Provider>
    );
};

export default UserProvider;


/*******
 * steps
 * 1. create context. and export it.
 * 2. set provider with value.
 * 3. use the user provider in the main.jsx file
 * 4. access childern in userProvider component as childeren and use it in the middle of the Provider
 *******/



/***
 * const a = 'good';
   const authInfo = {a}
   console.log(authInfo) //{a: 'good'}
   
   const info = {a, b}
   console.log(info) // {a: 'good', b: 49}
 */