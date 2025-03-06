import { useState } from "react"

interface Todo{
    id:number;
    task:string;
    completed:boolean;
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd=(task:string)=>{
        const newTodo: Todo={
            id: todos.length+1,
            task,
            completed:false,
        }

        setTodos(prev=>[...prev, newTodo])
    }

    

  return (
    <>
        <h2>TODO List</h2>

        <button onClick={()=>handleAdd('New Todo')}>Add Todo</button>

        <ul>
            {todos.map(todo=>(
                <li>{todo.task} - {todo.completed?'(Completed)':'(Finish It)'}</li>
            ))}
        </ul>
    </>
  )
}
