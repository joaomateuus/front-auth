import React, { createContext, useState } from "react";
import { ProviderAuth, Context, User } from "./types";

export const AuthContext = createContext<Context>({} as Context)

export const AuthProvider = ({ children }: ProviderAuth) => {
    const [user, setUser] = useState<User | null>()

    async function authenticate(email: string, password: string) {}

    async function logout() {}

    return (
        <AuthContext.Provider value={{...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}