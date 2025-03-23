import { useQuery } from "@tanstack/react-query";
import { useState } from "react"

const fetchTodos = async (page=1,size=10) =>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${size}`)
    if(!res.ok)throw new Error('Network Response was not ok')
    return res.json();
}

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize =10;

    const {data,error,isLoading}=useQuery({queryKey:['todos',currentPage],queryFn:()=>fetchTodos(currentPage,pageSize)})

    if(isLoading) return <h1>Loading...</h1>
    if(error)return <h1>{error.message}</h1>
  return (
    <div className="bg-amber-200">
        <h1>Todos</h1>
        <pre>{JSON.stringify(data,null,2)}</pre>
        <div>
            <button className="border-4" onClick={()=>setCurrentPage(prev=>prev===1 ? 1: prev-1)} disabled={currentPage===1}>Previous Page</button>
            <button className="border-4" onClick={()=>setCurrentPage(prev=>prev+1)}>Next Page</button>
        </div>
    </div>
  )
}
