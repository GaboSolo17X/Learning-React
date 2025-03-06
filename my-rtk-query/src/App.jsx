import { AddNewProduct } from "./components/AddNewProduct"
import { AllProducts } from "./components/AllProducts"
import { SpecificProd } from "./components/SpecificProd"
import { UpdateProduct } from "./components/UpdateProduct"


export const App = () => {
  return (
    <>
      {/* <AllProducts></AllProducts> */}
      <SpecificProd></SpecificProd>
      {/* <AddNewProduct></AddNewProduct> */}
      <UpdateProduct></UpdateProduct>
    </>
  )
}

export default App
