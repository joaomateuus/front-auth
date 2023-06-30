import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppRoutes } from './routes/index'
import { AuthProvider } from './context/auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      
    </div>
  )
}

export default App
