"use client";
import { useState } from "react";
import { createContext } from "./CreateContext";

const [useAuthContext, AuthContextProvider] = createContext({
    name: 'AuthContext',
});
export { useAuthContext };

export function AuthProvider({ children }) {
    const [token, setToken] = useState("1646|tpZqRxMVaukaPA7Qij7aGdVfSzlYTAR4adADIwRW");
    return (
        <AuthContextProvider
            value={{
                token,
                setToken
            }}
        >
            {children}
        </AuthContextProvider>
    );
}