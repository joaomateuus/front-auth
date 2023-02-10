import { Routes, Route, useLocation } from 'react-router-dom'
import { SignIn } from '../pages/sign-in'


export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path='signin' element = {<SignIn />} />
            {/* <Route path='login' />
            <Route path='home' /> */}
        </Routes>
    )
}