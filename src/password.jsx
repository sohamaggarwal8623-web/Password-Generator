import { useState, useCallback ,useEffect} from 'react' 
import './App.css'


function Password(){
const [password,setpassword]=useState('')
const [character,setcharacter]=useState(false)
const [number,setnumber]=useState(false)
const [length,setlength]=useState('6')

console.log(character)
console.log(number)

const passwordGenerator =useCallback(()=>{
    let temp=""
    let alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(character==true){
        alpha +="@#&!$%^*?+"
    }
   if(number==true){
        alpha +="0123456789"
    }

    for(let i=0;i<length;i++){
        const randomnmber=Math.floor(Math.random()*alpha.length)
        temp += alpha[randomnmber]
    }
    setpassword(temp)

},[character,number,length])
  

useEffect(()=> passwordGenerator(),[character,number,length])

//let paswordcopy =  window.navigator.clipboard.writeText(password) 

    return(
        <div> 

         <div className='flex flex-row  bg-gray-500 mx-150 w-fit p-2'>
            <input type='text' placeholder='password' value={password} className='bg-amber-50 text-center  '></input>
           

            <button className='bg-blue-800 p-2 ml-2 text-blue-200' onClick={()=>window.navigator.clipboard.writeText(password)}>
                Copy
            </button>
         </div>
            

            <div className='flex flex-row w-fit mx-150 p-2 bg-gray-500'>


            <input type='range' min='4' max='50' defaultValue='6' id ='range' onChange={(e)=>setlength(e.target.value)}></input>
             <h1 className='p-2'>{length}</h1>

            <input type='checkbox' className='bg-amber-50 text-center  ' id='checkbox'
            onClick={()=>setcharacter(!character)}></input>

            <label htmlFor='checkbox'  className='bg-amber-50 text-center rounded-b-xs p-2'>character</label>

            <input type='checkbox' className='bg-amber-50 text-center  rounded-xs ' id='checkbox1'
            onClick={()=>setnumber(!number)}></input>

            <label htmlFor='checkbox1'  className='bg-amber-50 text-center rounded-xs p-2 '>Number</label>
    
           <button className='tex-amber-200 bg-green-500 rounded-xs text-center ml-2 p-2.5' onClick={passwordGenerator}>Click</button>
        </div>
        </div>
    )
}
export default Password 
