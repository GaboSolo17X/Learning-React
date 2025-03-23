import { useQuery } from "@tanstack/react-query"

const fetchData=async()=>{
        const res= await fetch(`https://jsonplaceholder.typicode.com/todos`)
        if(!res.ok)throw new Error('Network Response was not ok')
        return res.json();
}
export const StaleTime = () => {
    const {data,error,isLoading} = useQuery({queryKey:['todo'], queryFn:fetchData, staleTime:5000})

    if(isLoading) return <h1>Loading...</h1>
    if(error)return <h1>{error.message}</h1>

  return (
    <>
    <h1>Stale Time</h1>    
    <div>{JSON.stringify(data)}</div>
    </>
  )
}
