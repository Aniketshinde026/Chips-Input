import React, { useState } from "react";
import './styles.css'
function ChipsInput() {

const [inputText, setInputText]= useState("");
const [chips, setChips]= useState([]);


const handleKeyDown =(e) => {
    if(e.key === "Enter"){

    setChips(prev => [...prev, inputText] );
    setInputText("")
    }
}
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e)=> setInputText(e.target.value)}
        onKeyDown={(e)=>handleKeyDown(e)}
      />

      <div>
        {chips.map((chip)=><div style={{background: "gray", margin: "10px", padding: "5px", color: "white"}}>
            {chip}
        </div>)}
      </div>
      
    </div>
  );
}

export default ChipsInput;