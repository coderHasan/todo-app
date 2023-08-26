import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

const Todo = ({todo, id, removeItem}) => {
    const  {title, desc} = todo

    const hendlDelete = (id) => {
        removeItem(id);
      }
  return (
    <div className='flex items-center justify-between bg-[#00000079] px-4 mb-3 rounded-md py-2 cursor-pointer hover:bg-black'>
        <div>
            <h3 className='font-semibold capitalize'>{title}</h3>
            <p className='text-[#dddddd8f]'>{desc}</p>
        </div>
        <div>
            <button 
                onClick={() => hendlDelete(id)}
            className='text-red-500'>
                    <AiOutlineDelete/>
            </button>
        </div>

    </div>
  )
}

export default Todo