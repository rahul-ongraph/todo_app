import React, { useState } from "react";
function Todo() {
  const[value,setValue]=useState("")  
const [item , setItem] = useState([])

const onChangeValue = (e,target) => {
  setValue(e.target.value)
}

const addItem = () => { 

let temp = [...item]
temp.push(value)
setItem(temp);
console.log("aaa======>",temp)
}

 const removeItem = (index) => {
let temp = [...item]
temp.splice(index, 1)
setItem(temp)
console.log("pop",temp)
 }
  return (
    <div style={{textAlign:"center",margin:40}}>
      <input
      placeholder="add value"
      value={value}
    onChange = {(e) => onChangeValue(e, "value")}
       /><br></br>
       <div style={{margin:20}}>
       <button onClick={()=>addItem()} type="button">Add</button>
       </div>
       {
         item.map((i,index) => {
              return  (<><p>{i}</p>
               <button onClick={()=>removeItem(index)} type="button">Remove</button></>) 
         })
        
       }
     
    </div>
  );
}

export default Todo;
