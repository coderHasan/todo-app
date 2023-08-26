import React from 'react'
import Todo from './Todo'

const Todos = ({todos, onRemove}) => {
    
  return (
    <div>
        {
            todos.map((tod) => <Todo todo={tod.todo} key={tod.id} id={tod.id} removeItem={onRemove}/>)
        }
    </div>
  )
}

export default Todos