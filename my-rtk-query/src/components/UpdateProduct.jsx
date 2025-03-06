import { useUpdateProductMutation } from "../app/service/dummyData"

export const UpdateProduct = () => {
    const [updateProduct,{data,error,isLoading}]=useUpdateProductMutation()

    if(error){
        return <h1>{error}</h1>
    }

    if(isLoading){
        return <h1>LOADING</h1>
    }

    const handleUpdate = async()=>{
        try{
            const updateProd={
                title:'Gabs T-shirt',

            }

            await updateProduct({
                id:4,
                updatedProduct:updateProd
            });
        }catch(err){
            console.log('Error updating product: ', err)
        }
    }
  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>    
        <button onClick={handleUpdate} disabled={isLoading}>Update Product</button>
    </div>
  )
}
