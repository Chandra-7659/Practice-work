// import React from 'react'
// import{Data,Data1} from"../App"


// const ChildD = () => {
//     let userName=useContext(Data);
//     let gender=useuseContext(Data1);
//   return (
    
//     <div>
//         {/*<Data.Consumer>
//             {
//            (username)=>{
//             return(
//                 <Data1.Consumer>
//             {
//                         (gender)=>{
//                             return <h1>{userName} {gender}</h1>
//                         }
//                     }
//                 </Data1.Consumer>
//             )
//            }
//             }
//         </Data.Consumer>*/}
//         <h1>HEY MY NAME IS{userName}gender is{gender}</h1>
//     </div>
    
//   )
// }

// export default ChildD;


import React, { useContext } from 'react';
import { Data, Data1 } from "../App";

const ChildD = () => {
    let userName = useContext(Data);
    let gender = useContext(Data1);

    return (
        <div>
            <h1>HEY, MY NAME IS {userName} &my gender is  {gender}</h1>
        </div>
    );
}

export default ChildD;
