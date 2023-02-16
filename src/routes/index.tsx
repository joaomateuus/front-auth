import { Routes, Route } from 'react-router-dom'
import { ProtectedLayout } from '../components/ProtectedLayout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login/login';


export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path='/login' element = {<Login />} />
            <Route path='/home' 
                element={ 
                    <ProtectedLayout>
                        <Home />
                    </ProtectedLayout>
                }
            />       
        </Routes>
    )
}