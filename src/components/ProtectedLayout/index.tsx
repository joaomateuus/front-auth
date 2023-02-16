import React, { Children } from 'react'
import { useAuth } from '../../context/AuthProvider/useAuth'

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
  const auth = useAuth();

  if(!auth.token) {
    return <h1>You dont have acess</h1>
  }

  return children;
}
