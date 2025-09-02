import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user,setUser] = useLocalStorage('user',null);

    const login = (username) => setUser(username);
    const logout = () => setUser(null);
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);