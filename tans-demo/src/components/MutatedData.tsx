import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface Todo{
    id?:number;
    title:string;
    completed:boolean;
}

const postTodo = async (newTodo:Todo)=>{
    const res = await fetch('https:///jsonplaceholder.typicode.com/todos',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newTodo)
    });

    if(!res.ok) throw new Error("Not okay")
    return res.json();
}


export const MutatedData = () => {
    const queryClient=useQueryClient()
    const [title,setTitle]=useState("")
    const {mutate,error, status}= useMutation<Todo,Error,Todo>({
        mutationFn: postTodo,
        onSuccess:()=>{
            queryClient.invalidateQueries(["todos"])
        }
    })

    

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (title.trim() === '') return;

        mutate({title,completed:false});
        setTitle("");

    }

  return (
    <div className='border-4 border-amber-900 mt-5'>
        <h1 >Create new todo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder='Enter TODO title'/>
            <button type='submit'>{status === 'pending' ? 'Ading...' : 'Add Todo'}</button>
            {error && <h1>An error occured:{error.message}</h1>}
            {status==='success'&& <h1>Data Approved</h1>}
        </form>
    </div>
  )
}
