import { useState } from 'react' 
import './App.css'
import Password from './password'

function App() {


  return (
     <div className='bg-[url("D:\FRONTEND\React\password\public\bg.photo.png")]
     h-screen bg-cover flex flex-col items-center gap-4'>

      <h1 className='text-amber-50 text-center text-5xl'>Password Generator</h1>
      <br></br>
      <Password/>
    </div>
  )
}

export default App
