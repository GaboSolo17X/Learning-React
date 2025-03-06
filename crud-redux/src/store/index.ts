import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from "./users/slice"
import { toast } from "sonner";


//Middlewares
const persistanceMiddleware: Middleware = (store) => (next) =>(action) =>{
    next(action);
    localStorage.setItem("___redux___State", JSON.stringify(store.getState()));
};

const syncWithDatabase: Middleware = store =>next => action =>{
    const {type, payload}=action
    const prev=store.getState()

    //Fase 1
    console.log({type, payload})
    console.log(store.getState())
    next(action)

    if(type === 'users/deleteUserById'){
        const userIdToRemove=payload
        const userToRemove=prev.users.find(user=>user.id===userIdToRemove)

        fetch(`https://jsonplaceholder.typicode.sdsdfsd/users/${userIdToRemove}`,{
            method:'DELETE'
        })
        .then(res=>{
            if(res.ok){
                toast.success('Usuario Eliminado')
            }
            throw new Error('Error al borrar usuario')
        })
        .catch(err=>{
            toast.error(`Error deleting user ${userIdToRemove}`)
            if(userToRemove) store.dispatch(rollbackUser(userToRemove))
            console.log(err)
        })
    }

}

export const store =configureStore({
    reducer:{
        users:usersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistanceMiddleware,syncWithDatabase),
});

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch