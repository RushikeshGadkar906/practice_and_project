import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenrated = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabckefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += " ~`! @#$%^&*()-_+={}[]|\;:<>,./?";

    for(let i=0;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password);
  },[password]) 

  useEffect(() => {
    passwordGenrated();
  }, [length,numAllowed,charAllowed,setPassword]);
 
  return (
    <>
      <div className='container'>
        <h3>Password Genrated</h3>

        <div className=' form'>
          <input type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
           />
           <button onClick={copyPassword}>Copy</button>
        </div>

        <div className="flex mt-20">
        <div className='flex '>
          <input type="range" 
          onChange={(e)=>{setLength(e.target.value)}}
          min={6}
          max={100}
          value={length}
           />
           <label htmlFor="">Length{length}</label>
        </div>

        <div className="flex">
          <input type="checkbox" 
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=> !prev)
            }}            
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex">
          <input type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}            
           />
           <label htmlFor="charInput">Charcters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
