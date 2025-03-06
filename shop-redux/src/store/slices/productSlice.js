import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
};
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchProducts(state,action){
            state.data=action.payload
        }
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export const {fetchProducts}=productSlice.actions;
export default productSlice.reducer;

export function getProducts(){
    return async function  getProductsThunk(dispatch, getState) {
    
            const data = await fetch("https://fakestoreapi.com/products")
            console.log(data)
            const result = data.json();
            dispatch(fetchProducts(result));
              
         
        
    }
}
