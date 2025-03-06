
type User={
    name:string;
    age:number;
    isStudent:boolean;
}

export const User = ({name,age,isStudent}:User) => {
    return (
      <div>
          <h2>{name}</h2>
          <h2>{age}</h2>
          <h2>{isStudent}</h2>
      </div>
    )
  }
// import { ReactNode } from "react";

// type User={
//     children:ReactNode;
//     }

// export const User = ({children}:User) => {
//   return (
//     <div>
//         <h2>{children}</h2>
//         {/* <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{isStudent}</h2> */}
//     </div>
//   )
// }


