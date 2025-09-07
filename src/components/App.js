
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const initalTodo = [
    {task:"Learn React",isComplete:false},
    {task:"Build a React App",isComplete:false},
    {task:"Deploy a React App",isComplete:false}
  ];

  const [todos,setTodos] = useState(initalTodo);

  const handleComplete = (index) =>{
    const updateTodo = todos.map((item,i)=>{
      return i===index ?{...item,isComplete:true}:item;
    })
    setTodos(updateTodo);
  }

  return (
    <div>
      <TodoList array={todos} handleComplete={handleComplete}></TodoList>
    </div>
  )
}


const TodoList = ({array,handleComplete})=>{
  return(
    <div>
    {array.map((list,index)=>{
      return (list.isComplete === false) ?
      (<div key={index}>
        <p>{list.task} <button onClick={()=>handleComplete(index)}>complete</button></p>
      </div>):
      (<div key={index}>
        <p>{list.task}</p>

      </div>)
    })}
    </div>
    
  )
}
export default App
