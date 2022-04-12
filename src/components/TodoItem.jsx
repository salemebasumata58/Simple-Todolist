import "../App.css"
export const TodoItem = ({todo, handleStatus}) =>{
    return <div className="list" >
       <h4 style={{textDecoration: todo.status ? "line-through" : "" }}>   {todo.title}</h4>
      
    {/* <button>Delete</button> */}
    <button className="toggle" style={{background:todo.status ? "blue" : "green"}}
     onClick={()=>handleStatus(todo.id)}></button>
    </div>
}