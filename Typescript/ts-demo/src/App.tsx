// import { User } from "./components/User"
// import { Button } from './components/Button';
// import { UserInfo } from "./components/UserInfo";
// import { AdminInfo } from "./components/AdminInfo";
import { Form } from "./components/Exercise-3/Form";
// import { Info,AdminInfoList } from "./Types";
// import { Counter } from './components/Exercise-1/Counter';
// import { Todos } from "./components/Exercise-2/Todos";
// import { UserProfile } from './components/Exercise-2/UserProfile';


export const App = () => {

  // const user:Info = {
  //   id:1,
  //   name:'John Doe',
  //   email:'john@gmail.com'
  // }

  // const admin:AdminInfoList ={
  //   id:2,
  //   name:'Janeth Smith',
  //   email:'jane@gmial.com',
  //   role:'admin',
  //   lastLogin:new Date(),
  // }

  return (

    <>
        {/* <User name={"Alex"} age={20} isStudent={true}/> */}
    {/* <User>
    <p>Hello</p>
    </User> */}
    {/* <Button label="Click" onClick={()=>console.log('Clicked')} disabled={false}></Button> */}
{/* 
    <UserInfo user={user}></UserInfo>
    <AdminInfo admin={admin}></AdminInfo> */}
    {/* <Counter></Counter> */}
    {/* <UserProfile></UserProfile>
    <Todos></Todos> */}
    <Form/>

    </>
  )
}
export default App

