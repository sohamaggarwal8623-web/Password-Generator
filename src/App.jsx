import { useState } from 'react' 
import './App.css'
import Password from './password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black  h-screen'>
      <h1 className='text-amber-50 text-center text-5xl'>Password Generator</h1>
      <br></br>
      <Password/>
    </div>
  )
}

export default App
