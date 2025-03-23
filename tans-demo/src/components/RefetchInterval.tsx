import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const fetchTodo = async (id: number) =>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!res.ok)throw new Error('Network Response was not ok')
    return res.json();
}

export const RefetchInterval = () => {
    const [currentId, setCurrentId] = useState(1)

    const {data,error,isLoading} = useQuery({queryKey:['todo',currentId], queryFn:()=>fetchTodo(currentId) , refetchInterval:5000})


    useEffect(() => {
      const interval = setInterval(()=>{
        setCurrentId(prev => prev < 200 ? prev+1 : 1)
      },5000);

      return () => clearInterval(interval);
    }, [])

    if(isLoading) return <h1>Loading...</h1>
    if(error)return <h1>{error.message}</h1>
    
  return (
    <>
        <h1>Refetch</h1>
        <div>{JSON.stringify(data,null,2)}</div>
        <button onClick={()=>setCurrentId(prev=>prev < 200 ? prev+1 : 1)}>NEW</button>
    </>
  )
}
