import React, { createContext, useEffect, useState } from "react";
import { login } from "./auth-service";
import { getUserFromLocalStorage, setUserToLocalStorage } from "./token-manager";
import { ProviderAuth, Context, User, DecodedJwtPayload } from "./types";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext<Context>({} as Context)

export const AuthProvider = ({ children }: ProviderAuth) => {
    const [user, setUser] = useState<User | null>()

    useEffect(() => {
        const user = getUserFromLocalStorage();

        if(user) {
            setUser(user);
        }
    }, [])

    async function authenticate(email: string, password: string) {
        const response = await login(email, password);

        const payload = {token: response.token, refresh_token: response.refresh_token}

        // validar se isso aqui da certo
        const decoded = jwt_decode(payload.token) as DecodedJwtPayload

        if (decoded.user_id == payload.refresh_token.userId) {
            setUser(payload);
            setUserToLocalStorage(payload);
        }
    }

    async function logout() {
        setUser(null);
        setUserToLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}