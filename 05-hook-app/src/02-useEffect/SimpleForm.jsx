import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username:'strider',
        email:'fernando@gmail.com'
    })

    const {username,email}=formState;

    const onInputChange=({target})=>{
        const {name,value}=target;
        setformState({
            ...formState,
            [name]:value
        })
    }


    useEffect(() => {
      console.log('formState Change')
    }, [formState])

    useEffect(() => {
        console.log('email Change')
      }, [email])


    
    

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="gabo@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

    {
        (username==='strider')&& <Message/>
    }
     
    </>
  );
};
