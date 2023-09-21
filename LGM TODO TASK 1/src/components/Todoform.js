import React,{useState} from 'react'

export const Todoform = ({addTodo}) => {
  const[value,setValue]=useState("")

 const handleSubmit=e=>{
  e.preventDefault(); //when the data is added it prevents to not chnage the following page

  addTodo(value)  // Call the addTodo function passed as a prop with the current value

  setValue("") //Reset the following string to empty after entering
 }

  return (
   <form className='Todoform' onSubmit={handleSubmit}> 
      <input type="text" className='todo-input' value={value} placeholder='what is Your todays task' onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit" className='todo-btn'>Add Task</button>
   </form>
  )
}

export default Todoform
