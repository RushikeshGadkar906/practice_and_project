import {useState} from 'react'
import Card from './componets/Card';

function App() {
  const [count, setCount] = useState(0);
  const user = 
  
    {
      id:1,
    name:"rishi",
    add : "abad"
    }
  
  
  
  return (
    <>
      <div>
        <h2>Counter - {count}</h2>

        <button onClick={()=>{setCount(count + 1)}} >+</button>

        <br />
        <br />

        <button disabled={count <= 0 ? true : false } onClick={()=> {setCount(count - 1)}}>-</button>
        <hr />
        <Card user={user} />
      </div>      
    </>
  )
}

export default App
