import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({ Children }) => {
    const authInfo = { name: 'nodi sagor khal bil' }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;


/*
a. create context and export it.
b. set provider with value
c. use the auth provider in the main.jsx file
d. access children 

*/