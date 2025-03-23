import { useQueries } from "@tanstack/react-query"
import { useState } from "react"

const fetchTodos = async () =>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    if(!res.ok)throw new Error('Network Response was not ok')
    return res.json();
}

const fetchPosts = async () =>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    if(!res.ok)throw new Error('Network Response was not ok')
    return res.json();
}


export const FetchFromMultiplesEndpoints = () => {
    const [currentId, setCurrentId] = useState(1)
    const [currentPostId, setCurrentPostId] = useState(1)

    const results = useQueries({
        queries:[
            {queryKey:['todos'], queryFn: fetchTodos},
            {queryKey:['posts'], queryFn: fetchPosts},
        ]
    })

    const [todosQuery, postsQuery]=results;

    if(todosQuery.isLoading || postsQuery.isLoading){
        return <h1>Loading...</h1>
    }

    if(todosQuery.error || postsQuery.error){
        return <h1>An error occured: {todosQuery.error?.message}</h1>
    }

    const todos =todosQuery.data
    const posts =postsQuery.data

  return (
    <>
        <h1>TODOS</h1>
        <pre>{JSON.stringify(todos.find((todo:any)=> todo.id === currentId),null,2)}</pre>
        <button onClick={()=>setCurrentId(prev=>prev+1)}>Next Todo</button>

        <h1>POSTS</h1>
        <pre>{JSON.stringify(posts.find((todo:any)=> todo.id === currentPostId),null,2)}</pre>
        <button onClick={()=>setCurrentPostId(prev=>prev+1)}>Next Todo</button>

    </>
  )
}
