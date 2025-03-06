import { useAddNewProductMutation } from "../app/service/dummyData"

export const AddNewProduct = () => {

    const [addNewProduct,{data,error,isLoading}] = useAddNewProductMutation()

    if(error){
        return <h1>ERROR</h1>
    }

    if(isLoading){
        return <h1>LOADING</h1>
    }

    const handleAdd=async()=>{
        try{
            const newProd={
                id:1,
                title:'Gabs T-shirt',
                description:'Awesome shirt of Twenty One Pilots'
            }

            await addNewProduct(newProd);
        }catch(err){
            console.log('Error adding product: ', err)
        }
    }

  return (
    <>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <button onClick={handleAdd} disabled={isLoading}>Add New Product</button>
    </>
  )
}
