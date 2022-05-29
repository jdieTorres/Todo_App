import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import '../css/TodoApp.css'
import '../css/responsive.css'

const init = () => {

     return JSON.parse ( localStorage.getItem( 'todos' )) || [];

    // [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) )
    }, [ todos ] )

    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch( action );
    }

    const handleAddTodo = ( newTodo ) => {

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
    }

    const dot = '.';

    const space = '';

    return (
        <>

            <h1>To Do App <small>({ todos.length }) </small> </h1>
            <hr/>

            <div className='principal-grid row'>

                <div className='list-grid col-7'>

                < TodoList 
                    todos = { todos } 
                    handleToggle = { handleToggle } 
                    handleDelete = { handleDelete }
                    dot = { dot }
                    space = { space }
                />

                </div>

                <div className='add-grid col-5'>

                    < TodoAdd 
                        handleAddTodo = { handleAddTodo }
                    />

                </div>

            </div>

        </>
    )
}
