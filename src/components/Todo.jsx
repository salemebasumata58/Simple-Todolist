import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import {nanoid} from "nanoid";


function Todo(){
  const [todosList, setTodosList] = useState([]);
    const getData = (todo) =>{
        const payload = {
            title: todo,
            status: false,
            id: nanoid(5)
        };
        console.log("received", todo);
        setTodosList([...todosList, payload]) //spread function for copy element
    }

    const handleStatus = (id)=>{
        console.log("id:", id)
        // setTodosList(
        //     todosList.map((e) => (e.id === id ? {...e, status: !e.status} : e))
        // );
        const newarr = todosList.map((e)=> {
            if(e.id===id){
             return {
                 ...e,
                 status: !e.status,
             };
            }
            return e;
        })
        setTodosList(newarr);
    };
    return (
        <div>
            {/* <TodoInput getData={getData}/> */}
           
          {todosList.map((e) =>(
               <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
           ))}
            <TodoInput  getData={getData}/>
          
            
        </div>
    );
}
export {Todo};