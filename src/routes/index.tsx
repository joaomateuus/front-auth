import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/login';


export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path='/login' element = {<Login />} />
        </Routes>
    )
}