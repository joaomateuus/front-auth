import React from 'react'
import { useState } from "react";
import './styles.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isUserLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      const sucessfullLogin = await login({email, password})

      if(sucessfullLogin) {
        navigate("/home")
      } else {
        console.log("Nao foi possivel fazer o login")
      }

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-2/4'>
        <h1 className='text-4xl font-thin text-black'>Login</h1>
        <div className='flex flex-col p-2'>
          <label className=''>Email</label>
          <input type="text"
            className='h-8 w-80 rouded-lg border-2 outline-none p-4 rounded-lg'
            onChange={e => setEmail(e.target.value)}  
          />
        </div>
        <div className='flex flex-col p-2'>
          <label>Password</label>
          <input type="password" 
            className='h-8 w-80 rouded-lg border-2 outline-none p-4 rounded-lg'
            onChange={e => setPassword(e.target.value)}  
          />
        </div>
        <button type='submit' 
          className='h-12 w-80 rounded-md text-white mt-6 bg-blue-300 hover:bg-blue-700'>
          Submit
        </button>
        <div id='register' className='mt-4'>
          <span className='text-sm text-blue hover:border-b-2 hover:border-blue-300'>Dont have account ? Sign-Up here</span>
        </div>
      </form>
      <div
        id='bg-login'  
        className='flex items-center justify-center h-screen p-8 w-3/4 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      '>
        <h1 className='text-5xl text-white'>Welcome To Our Website</h1>
      </div>
    </div>
  )
}
