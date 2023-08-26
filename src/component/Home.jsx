
import { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'
import {v4 as uuidv4} from 'uuid'


const Home = () => {

  const [todos, setTodos] = useState([]);

 const hendleTodo = (todo) => {
    setTodos((e) => {
        return [...e, {id: uuidv4(), todo}] 
    })
 }

 const hendleRemove = (id) => {
   
   setTodos((e) => {
    const filterTodo = e.filter((todo) => todo.id !== id)
      return filterTodo
   })
 }


  return (
    <div className='bg-[#00000081] p-6 rounded-md'>
      <NewTodo addTodo={hendleTodo}/>
      <Todos todos={todos} onRemove={hendleRemove}/>
    </div>
  )

}

export default Home