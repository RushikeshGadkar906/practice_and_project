import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username,SetUserName] = useState('')
    const [password,SetPassword] = useState('')

    const {SetUser} = useContext(UserContext);

    const handelSubmit = (e) =>{
        e.preventDefault()
        SetUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username} 
        onChange={(e)=>SetUserName(e.target.value)} 
        placeholder='User Name' />

        <input type="text"
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}
         placeholder='Password' />

        <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login