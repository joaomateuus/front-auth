import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppRoutes } from './routes/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
