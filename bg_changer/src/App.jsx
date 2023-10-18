import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");


  return (
    <div className="container" style={{ backgroundColor: color }}>

      
        <div className="button_block">
          <button style={{backgroundColor:"Red"}} onClick={()=>{setColor("Red")}}>Red</button>
          <button style={{backgroundColor:"green"}} onClick={()=>{setColor("Green")}}>Green</button>
          <button style={{backgroundColor:"yellow"}} onClick={()=>{setColor("Yellow")}}>Yellow</button>
          <button style={{backgroundColor:"black"}} onClick={()=>{setColor("Black")}}>Black</button>
          <button style={{backgroundColor:"white"}} onClick={()=>{setColor("White")}}>White</button>
          <button style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button>
          <button style={{backgroundColor:"orange"}} onClick={()=>{setColor("Orange")}}>Orange</button>
        </div>
      
    </div>
  );
}

export default App;
