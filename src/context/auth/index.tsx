import React, { createContext, useCallback, useState } from "react";
import { loginService } from "../../services/auth-service";
import { Api } from "../../services/api";

interface ComponentProps{
    children: React.ReactNode;
};

interface AuthContextState {
    token: string | null;
    login({email, password}: UserData): Promise<boolean>;
    isUserLogged: boolean
    logoutUser(): void
};

interface UserData{
    email: string;
    password: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC<ComponentProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

    const login = useCallback(async ({email, password}: UserData) => {
        const { data, errors } = await loginService(email, password);

        if(errors) { 
            return false
        };

        localStorage.setItem("token", data.token);
        localStorage.setItem("refresh_token", data.refresh_token);

        Api.defaults.headers.authorization = `Bearer ${data.token}`
        
        setToken(data.token)
        setIsUserLogged(true)
        return true
    }, [])

    const logoutUser = () => {
        setToken(null)
        setIsUserLogged(false)
    }

    return(
        <AuthContext.Provider value={{ token, login, isUserLogged, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }