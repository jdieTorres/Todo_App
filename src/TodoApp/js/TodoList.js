import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleToggle, handleDelete, dot, space }) => {
  return (
    <>

      <ul className="list-group list-group-flush" >
        {
          todos.map((todo) => (

            < TodoListItem
              key={todo.id}
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              dot={dot}
              space={space}

            />

          ))
        }
      </ul>

    </>
  )
}
