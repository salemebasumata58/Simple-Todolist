import { useState } from "react";

export const TodoInput = ({getData}) =>{
    const [text, setText] = useState("");
    console.log("input:",text)
    return (
        <div style={{marginTop:"30px"}}>
            <input style={{height:"35px", width:"300px", fontSize:"30px", borderRadius:"10px"}} onChange={(e)=>{
                // console.log(e.target.value)
            setText(e.target.value);
            }} 
            type="text" placeholder="Write Something"/>
            <button style={{marginLeft:"3px",height:"40px", width:"40px", fontSize:"30px", background:"white",borderRadius:"8px"}}onClick={()=> {
                getData(text);
            }}>+</button>
            
           
        </div>
    )
};