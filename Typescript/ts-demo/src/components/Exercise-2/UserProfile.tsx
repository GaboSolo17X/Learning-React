import { useState } from "react"

interface UserProfile {
    name:string;
    age:number;
    email:string;
}

export const UserProfile = () => {

   const [profile,setProfile]= useState<UserProfile>({
        name:'',
        age:0,
        email:''
    })

    const updateName=(name:string)=>{
        setProfile(prev=>({...prev,name}))
    }

    const updateAge=(age:string)=>{
        setProfile(prev=>({...prev,age: +age}))
    }

    const updateEmail=(email:string)=>{
        setProfile(prev=>({...prev,email}))
    }
    
  return (
    <>
        <h2>User Profile</h2>
        <input type="text" placeholder="Name" value={profile.name} onChange={e=>updateName(e.target.value)}/>
        <input type="number" placeholder="Age" value={profile.age>0?profile.age:''} onChange={e=>updateAge(e.target.value)} />
        <input type="email" placeholder="email" value={profile.email} onChange={e=>updateEmail(e.target.value)} />

        <h3>ProfileSummary:</h3>
        <p>Name:{profile.name}</p>
        <p>Age:{profile.age}</p>
        <p>Email:{profile.email}</p>
    </>
  )
}
