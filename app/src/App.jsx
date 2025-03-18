// import React from 'react'
// import ChildA from './Props/ChildA'
// import { createContext } from 'react'
// import{Provider} from'react';
// console.log(createContext());
// let data=createContext();
// let data1=createContext();
// console.log(data);

const { useReducer } = require("react");

// const { useReducer } = require("react");
// const { useState } = require("react")

// //contextApi vs useContext()
// //contextApi:-data,Provider,Consumer
// const App = () => {
//   let userName="Rambabu";
//   let age="24";
//   return (
    
//     <div>
//       <data.Provider value={userName}>
//         <data1.Provider value={age}>
//         <ChildA />
//         </data1.Provider>
      
//       </data.Provider>
//     </div>
    
//   )
// }

// export default App;
// export {data,data1}

// import React, { createContext } from 'react';
// import ChildA from './Props/ChildA';

// // Create contexts
// const Data = createContext();
// const Data1 = createContext();

// const App = () => {
//   let userName = "Rambabu";
//   let  age =  "24";

//   return (
//     <div>
//       <Data.Provider value={userName}>
//         <Data1.Provider value={age}>
//           <ChildA />
//         </Data1.Provider>
//       </Data.Provider>
//     </div>
//   );
// };

// export default App;
// export { Data, Data1 };


// import { useCallback, useMemo, useRef, useState } from "react";
// import ChildA from "./props/ChildA";

// const App=()=>{
//   let [add,setAdd]=useState(0);
//   // let [sub,setSub]=useState(10);
//   // let [count,setCount]=useState(100);
//   // let multiply=useMemo(function multiply(){
//   //   console.log("hey I was Called");
//   //   return add*10;
    
//   // },[add,count])
//   let ref=useRef("")
//   let jsp=useCallback(()=>{

//   },[])
//   let [value,setValue]=useState("")
  
//   function change(e){
//       ref.current=e.target.value+"hello"
//   }
//   // function check(){
//   //   setValue(e.target.value+"cho")
//   //   alert(value)
//   // }
//   return(
//     <div>
//       <ChildA ins={jsp}/>
//       {/* <h1>multiply {multiply}</h1> */}
//       <button onClick={()=>setAdd(add+1)}>add</button>
//       <span>{add}</span>
//       {/* <br />
//       <button onClick={()=>setSub(sub-1)}>sub</button>
//       <span>{sub}</span>
//       <h1>count</h1>
//       <span>{count}</span>
//       <button onClick={()=>setCount(count+100)}>+</button> */}
//       {/* <input type="text" onChange={change}/>
//       <button onClick={()=>alert(ref.current)}>click</button>
//       <button onClick={check}>check</button> */}
//     </div>
//   )
// }

// export default AppRef

// import React,{useRef,useState} from 'react'

// const App=() =>{
//   let [data,setData]=useState("")//controlled component
//   // let x=useRef()//uncontrolled component
//   function getData(){
//     //alert(`entered data is${x.curent.value}`)
//     alert(`entered data is${data}`)
//   }
//   return (
//     <form action="">
//       <input type="text"onChange={(e)=>setData(e.target.value)}/>
//       <button onClick={getData}>enroll</button>
//     </form>
   
//   )
// }

// export default App;

// import React,{useState,useReducer} from 'react'
// const App=()=>{
//   console.log(useState());
//   console.log(useReducer());
//   let reducer;
//   let [count,setCount]=useState(0);
//   let [redcount,setredCount]=useReducer(reducer,0);
//   console.log(count);
//   console.log(redcount);
//   return(
//     <div>App</div>
//   )
// }
// export default App;


import React, { useReducer } from "react";

const App = () => {
  let initialValue = 0;

  let reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <h3>{state}</h3>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </div>
  );
};

export default App;
