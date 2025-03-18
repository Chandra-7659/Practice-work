// import React from 'react'
// import ChildB from './ChildB'

// const ChildA = () => {
//   return (
//     <div>
//         <ChildB/>
//     </div>
//   )
// }

// export default ChildA;

import React,{memo} from "react";

const ChildA=(ins)=>{
    console.log("hey i was called");
    
    return(
        <div>
            <h1>ChildA called</h1>
        </div>
    )
}
export default memo(ChildA)