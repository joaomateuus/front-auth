import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export const Home = () => {
  const { logoutUser } = useContext(AuthContext)
  
  return (
    <div className='flex items-center w-full h-screen'>
      iHome
      <button onClick={logoutUser} className='w-32 h-12 bg-blue-600 text-white rounded-md'>
        Logout
      </button>
    </div>
  )
}
