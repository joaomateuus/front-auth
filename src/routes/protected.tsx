import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Login } from "../pages/Login/login";

export const ProtectedRoutes =  ({ children }: { children: JSX.Element }) => {
    const { isUserLogged } = useContext(AuthContext)

    return (isUserLogged ? children : <Login />)
}