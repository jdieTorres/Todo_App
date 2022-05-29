import React from 'react'

export const TodoListItem = ({ todo, handleToggle, handleDelete, dot, space }) => {
    return (
        <>

            <li

                key={todo.id}
                className="grid-list list-group-item"

            >
                <span className='p-grid mt-2 ms-1 me-5'>

                    <p
                        className={`${todo.done ? 'complete' : 'incomplete'}`}
                        onClick={() => handleToggle(todo.id)}
                    >
                        <span className='desc-grid ms-3 me-3'> {todo.desc} </span>

                    </p>

                </span>

                <span
                    className={`${todo.done ? 'number-grid-complete' : 'number-grid-incomplete'}`}
                >
                    {todo.done ? dot : space}
                </span>

                <button
                    onClick={() => handleDelete(todo.id)}
                    className="button-delete btn btn-danger button-delete"
                >
                    Borrar
                </button>

            </li>

        </>
    )
}
