import React from 'react'

export const SignIn: React.FC = () => {
  return (
    <div className='flex items-start justify-center h-screen w-screen'>
      <div className='flex flex-col items-center justify-center w-2/4 h-screen p-12'>
        <div>
          <h1 className='text-5xl font-thin text-black mb-8'>Sign in</h1>
        </div>
        <div className='flex flex-col items-center justify-around h-96 p-8 rounded-md'>
          <label>Name</label>
          <input type="text" className='h-6 w-80 rouded-lg border-2 outline-none bg-white p-4 b rounded-lg' />
          <label>Username</label>
          <input type="text" className='h-6 w-80 rouded-lg border-2 outline-none bg-white p-4 b rounded-lg' />
          <label>Password</label>
          <input type="text" className='h-6 w-80 rouded-lg border-2 outline-none bg-white p-4 b rounded-lg' />
          <button className='h-12 w-80 rounded-md bg-blue-300 text-white mt-6'>Submit</button>
        </div>
      </div>
      <div className='flex items-center justify-center bg-blue-300 h-screen p-8 w-3/4'>
        <h1 className='text-2xl text-black'>Welcome SignIn in Our Website</h1>
      </div>
    </div>
  )
}
