import { useGetAllProductsQuery } from "../app/service/dummyData"


export const AllProducts = () => {
    const {data, isError, isLoading}=useGetAllProductsQuery()
    if(isError){
        return <h1>NOOOOOOOOOOOO ERROR</h1>
    }

    if(isLoading){
        return <h1>LOADING</h1>
    }

  return (
    <>
     <div>{data?.products.map((p)=>(
        <>
                <h5 key={p.id}>{p.title}</h5>
                <p>{p.description}</p>
        </>

    ))}</div>
    </>
   
  )
}
