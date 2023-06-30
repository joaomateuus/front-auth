import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes }from "./protected"
import { Home } from '../pages/Home';
import { Login } from '../pages/Login/login';


export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path='/' element = {<Login />} />
            <Route path="/home" element={
                <ProtectedRoutes>
                    <Home />
                </ProtectedRoutes>
            } />
        </Routes>
    )
}