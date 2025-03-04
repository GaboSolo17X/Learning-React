import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const DEFAULT_STATE = [
    {
      id: "1",
      name: "John Doe",
      email: "JohnDoe@gmail.com",
      github: "JohnDoe18",
    },
    {
      id: "2",
      name: "Jane Foster",
      email: "Foster17@gmail.com",
      github: "Foster17",
    },
    {
      id: "3",
      name: "David Clark",
      email: "kentClark@gmail.com",
      github: "kentClark18",
    },
    {
      id: "4",
      name: "Jane Smith",
      email: "smi@gmail.com",
      github: "smik",
    },
    {
      id: "5",
      name: "Mike Johnson",
      email: "mk@gmail.com",
      github: "mk18",
    },
    {
      id: "6",
      name: "Alice Brown",
      email: "Alice@gmail.com",
      github: "Alice11",
    },
  ];

export type UserId = string

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

//IFI
const initialState: UserWithId[] = (()=>{
    const persistedState=localStorage.getItem('___redux___State');
    if(persistedState){
        return JSON.parse(persistedState).users;
    }
    return DEFAULT_STATE;
})

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action:PayloadAction<User>)=>{
        const id = crypto.randomUUID()
        return [...state,{id, ...action.payload}]
    },
    deleteUserById:(state,action: PayloadAction<UserId>)=>{
        const id = action.payload;
        return state.filter((user)=>user.id!=id);
    },
    rollbackUser:(state,action:PayloadAction<UserWithId>)=>{
        const userAlreadyDefined =state.find(user=>user.id===action.payload.id)
        if(!userAlreadyDefined){
            return [...state, action.payload]
        }
    }
  },
  
});

export default usersSlice.reducer

export const {addNewUser,deleteUserById, rollbackUser}=usersSlice.actions