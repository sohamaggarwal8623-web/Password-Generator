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
        <div className='flex flex-col '> 

         <div className='flex flex-row  bg-[#080F2D]/80 backdrop-blur-md border border-blue-400/30 rounded-xl  w-fit p-2'>
            <input type='text' placeholder='password' value={password} className='bg-amber-50 text-center w-93 rounded-l'></input>
           

            <button className='bg-blue-800 p-2 ml-2 text-blue-200' onClick={()=>window.navigator.clipboard.writeText(password)}>
                Copy
            </button>
         </div>
            

            <div className='flex flex-row w-fit  p-2 bg-[#080F2D]/80 backdrop-blur-md border border-blue-400/30 rounded-xl  gap-2 align-middle'>


            <input type='range' min='4' max='50' defaultValue='6' id ='range' onChange={(e)=>setlength(e.target.value)}></input>
             <h1 className='p-2 text-amber-50'>{length}</h1>

            <input type='checkbox' className='bg-amber-50 text-center  ' id='checkbox'
            onClick={()=>setcharacter(!character)}></input>

            <label className='text-xl text-amber-50'>Character</label>

            <input type='checkbox' className='bg-amber-50 text-center  rounded-xs ' id='checkbox1'
            onClick={()=>setnumber(!number)}></input>

            <label  className='text-xl text-amber-50'>Number</label>
    
           <button className='tex-amber-50 bg-red-900 rounded-xs text-center  p-2' onClick={passwordGenerator}>Click</button>
        </div>
        </div>
    )
}
export default Password 