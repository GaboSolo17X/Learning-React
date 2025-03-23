import { useEffect, useState } from "react"


export const WithoutTanStackQuery = () => {
    const [id, setId] = useState(1)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let rc=false;

        const handleFetch = async () =>{
            setIsLoading(true)
            setError(null)
            try {
                const res= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                if (rc) return;

                if(!res.ok){
                    throw new Error(`Error fetching data: ${res.statusText}`);
                }

                const result = await res.json()
                setData(result)
                
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e:any) {
                setError(e.message)
                
            } finally{
                setIsLoading(false)
            }
        }

        handleFetch()
    
            return () =>{
                rc = true;
            }
    
    }, [id])
    
  return (
    <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {data && <h1>{JSON.stringify(data)}</h1>}
        <button className="text-3xl bg-amber-950 text-white" onClick={()=>setId(prev=>prev+1)}>Next</button>
    </div>
  )
}
