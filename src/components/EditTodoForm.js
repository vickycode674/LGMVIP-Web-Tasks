import React,{useState} from 'react'

export const EditTodoform = ({editTodo,task}) => {
  const[value,setValue]=useState(task.task)

 const handleSubmit=e=>{
  e.preventDefault(); //when the data is added it prevents to not chnage the following page

  editTodo(value,task.id)

  setValue("")
 }

  return (
   <form className='Todoform' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit" className='todo-btn'>Update Task</button>
   </form>
  )
}

export default EditTodoform;
