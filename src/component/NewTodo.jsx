import React, { useState } from 'react'

const NewTodo = ({addTodo}) => {
    const [todo, setTodo] = useState({
        title: '',
        desc: ''
    });

    const {title, desc} = todo

    const hendleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo);
        setTodo({title: '', desc: ''})

    }

    const hendleChange = (e) => {
       const name = e.target.name
       setTodo((i) => {
            return {...i, [name]: e.target.value }
       })
    }

  return (
    <form onSubmit={hendleSubmit} className='w-full flex flex-col gap-y-2 mb-5'>
        <div className='flex gap-4 w-full'>
            <label 
                htmlFor="title">Title:
            </label>
            <input
                className='w-full outline-none text-black px-2 rounded-sm' 
                type="text" 
                id='title' 
                name='title'
                value={title}
                onChange={hendleChange} 
             />
        </div>
        <div className='flex gap-3'>
            <label 
                htmlFor="desc">Desc:
            </label>
            <textarea
                className='w-full outline-none text-black px-2 rounded-sm' 
                type="text" 
                id='desc' 
                name='desc'
                value={desc}
                onChange={hendleChange}  
            />
        </div>
        <div className='w-full text-center'>
            <button className=' px-4 py-[3px] bg-[gray] rounded-md font-bold hover:bg-black transition-all duration-500 ease-in-out' >Add Todo</button>
        </div>
    </form>
  )
}

export default NewTodo