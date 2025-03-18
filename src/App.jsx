// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const { useState } = require("react")

// const { useState, useEffect } = require("react")

// const { useState } = require("react")

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// function App(){
//   return <h1>chandrasekhar to functional based component</h1>
// }
// export default App

// let App=function(){
//   return <h1>welcome to functional based component</h1>
// }
// export default App
// import React,{useState} from "react"
// let App=()=>{
//   console.log(useState);
//   return<h1>welocome to functional based components chandrasekhar</h1>

// }
// export default App

// let App=()=>{
//   let [state,setState]=useState()
//   console.log(state);//undefined
//   console.log(setState);//fun
//   return
// }
// export default App
// import React,{useState} from "react"
// const App=()=>{
//   let[initalval,setInitaival]=useState("VERA VENKAT CHANDRASEKHAR SASTRY")
//   let name = () =>
//     {
//     setInitaival("chandrsekhar")
//   }
//    return (
//     <div>
//       <h1>{initalval}</h1>
//       <button onClick={name}>ChangeName</button>
//     </div>
//   );
// }
// export default App

// import React,{useState} from "react"
// const App=()=>{
//   let[count,setCount]=useState(0)
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() =>setCount(count+1)}></button>
//       <button onClick={() =>setCount(count-1)}></button>
//       <button onClick={() =>setCount(0)}>Reset</button>
//     </div>
//   );
// }
// const App = () => {
//   let [count, setCount] = useState(0);
//   let [name, setName] = useState("THALAMANCHI");

//   let changeName = () => {
//     setName("CHANDRASEKHAR");
//   }

//   let increment = () => 
//   {
//     if(count<10)
//     {
//     setCount(count + 1);
//     }
//   }

//   let decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);  
//     }
//   }

//   let reset = () => {
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>Counter: {count}</h2>
//       <button onClick={changeName}>Change Name</button>
//       <button onClick={increment}>Plus</button>
//       <button onClick={decrement}>Minus</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [api, setApi] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setApi(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // Runs only once when component mounts

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search products"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ padding: "8px", margin: "10px", width: "200px" }}
//       />

//       <div>
//         {api
//           .filter((pro) =>
//             pro.title.toLowerCase().includes(search.toLowerCase())
//           )
//           .map((pro) => (
//             <div key={pro.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", maxWidth: "300px" }}>
//               <h3>{pro.title}</h3>
//               <img src={pro.image} alt={pro.title} width="100" />
//               <p><b>Price:</b> ${pro.price}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React,{useState,useEffect} from "react"
// let App=()=>{
//   let[api,setApi]=useState([])
//   let[search,setSearch]=useState("")
//   let change=(e)=>{
//      setSearch(e.target.value);
//   }
//     useState(()=>{
//      fetch("https://fakestoreapi.com/products")
//      .then(res=>res.json()).then(data=>{
//       setApi(data)
//      })
//     })
  
// return(
//   <>
//   <input type="text" placeholder="Search products"
//   onChange={change}
//   />
//   {api.filter((val)=>val.title.toLowerCase().includes(search)).map(pro=>{
//     return(
//       <>
//       <h1>{pro.title}</h1>
//       <img src={pro.image} alt="img" width="250px" />
//       </>
//     )
//   })}
//   </>
// )
// }
// export default App


// import React from 'react'
//  const App=(props)=>{
//   console.log(props.age);
//   return(
//     <div>
//       <h1>my name is{props.name}</h1>
//       <h2>my age is{props.age}</h2>
//     </div>
//   )
//  }
//  export default App
// import React from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Gallery from "./pages/Gallery"
// import Contact from "./pages/Contact"
// import PageNotFound from './pages/pagenotfound'
// import Nvabar from './pages/Nvabar'
// const App=()=>
// {
//   return(
//     <>
  
//       <BrowserRouter>
//       <Nvabar/>
//         <Routes>
//           <Route path="/" element={<Home/>}></Route>
//           <Route path="/about" element={<About/>}></Route>
//           <Route path="/gallery" element={<Gallery/>}></Route>
//           <Route path="/contact" element={<Contact/>}></Route>
//           <Route path="*" element={<PageNotFound/>}></Route>
//         </Routes>
//       </BrowserRouter>
   
//     </>
//   )
// };
// export default App;

// import React, { useEffect, useState } from "react"
// const App=()=>{
//   let[state,setState]=useState({})
//   let[search,setSearch]=useState("")
//   let api={
//     baseurl:"https://api.openweathermap.org/data/2.5/weather?",
//     key:"55e311f6a7fd04581b0e2e3a818b1bfe",
//   };
//   function getWeather(){
//     fetch(`${api.baseurl}q=${search}&appid=${api.key}`)
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data);
//       setState(data)})
  
    
//   }
//   let enterkey=e=>{
//     if (e.key==="Enter"){
//       getWeather();
//     }
//   }
//   return(
//     <>
//     <input type="text" onChange={e=>setSearch(e.target.value)}
//     onKeyDown={enterkey}/>
//     <button onClick={getWeather}>search</button>
//     <section>
//       {(state.main!=undefined)?
//       <>
//        <h2>{state.name}</h2>
//        <h4>{state.main.temp}<sup>o</sup>c</h4>

//       </>
//       : <span>NOT found</span>}
      
      
//     </section>
//     </>
//   )
// }
// export default App;



// import React, {useEffect, useState}from 'react'
// import axios from "axios"
// const App =() => {
//   const[state,setState]=useState({users:[]})
//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users").then(res => setState({users:res.data})
//     )
//   }
    
//   )
//   return (
//     <div>
//       {state.users.map((res)=>
//       <>
//       <h3>{res.id}</h3>
//       <h3>{res.name}</h3>
//       <h3>{res.username}</h3>
//       <h3>{res.email}</h3>

//       </>
//       )}
//     </div>
//   )
// }

// export default App

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Add from "./Add";
// import Edit from "./pages/Edit";
// const App = () => {
//   return (
//     <>
//     <h1>Welcome to Routing in React</h1>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/home" element={<Home/>}/>
//       <Route path="/add" element={<Add/>}/>
//       <Route path="/add" element={<Navigate to="/Add"/>}/>
//       <Route path="/Add" element={<Add/>}/>
//       <Route path="/edit/:id" element={<Edit/>}/>

//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
//  const App=() =>{
//   let[add,setAdd]=useState(10);
//   let[sub,setSub]=useState(100)
//   useEffect(()=>{
//     console.log("hello");
//     //cleanup function
//   }
//   )

//   return(
//     <div>
//       <h1>{add}<button onClick={()=>setAdd(add+10)}>+</button></h1>
//       <h1>{sub}<button onClick={()=>setSub(sub-10)}>-</button></h1>
//     </div>
//   )
    
  
// }

// export default App

// import React,{Suspense} from 'react'
// let Home=React.lazy(()=> import("./pages/Home"))
// const App=()=>{
//    return(
//     <Suspense fallback={<h1>Loading!.........</h1>}>
//     <Home/>
//     </Suspense>
//    ) 
// }


// export default App

// import React, { useState } from 'react'
// import data from "./data"
// console.log(data)
// const App=() =>{
//    let recordsPerPages=10;
//    let [currentPage,setcurrentPage]=useState(1);
//    let totalaPges=data.length/recordsPerPages;
//    function getPages(){
//       let firstIndex=(currentPage-1)*recordsPerPages;
//       let lastIndex=firstIndex+recordsPerPages;
//       let finalRes=data.slice(firstIndex,lastIndex);
//       return finalRes;
//    }
//    function previous(){
//       if(currentPage>1)
//       {
//          setCurrentPage(page=>page-1)
//       }
//    }
//    function next(){
//       if (currentPage<totalaPges)
//       {
//          setcurrentPage(page=>page+1)
//       }

//    }
//    return(
//       <div>
//          {getPages().map(x=>{
//          return(
//             <h1 key={x.id}>{x.name}</h1>
//          )
//          })}
//          <button onClick={previous} disabled={currentPage==1}>perv</button>
//          {currentPage} of {totalaPges}
//          <button onClick={next} disabled={currentPage==totalaPges}>Next</button>
//       </div>
//    )
// }

// export default App


// 
// import React from "react";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./pages/Home";
// import Movie from "./pages/Movie";
// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         {/* default page / or index */}
//         <Route path="/" element={<Home/>}/>
//         <Route path="/movie" element={<Movie/>}/>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;

// import React, { useRef } from 'react'
// import { useEffect } from 'react'

// const App=() =>{
//   let x=useRef();
//   console.log(x)
//   useEffect(()=>{
//     //x.current.disabled=true
//     x.current.focus()
//   },[])
//   return (
//     <div>
//       <center>
//       <input type="text" placeholder='username' ref={x}
//       style={{padding:"10px"}}/>
//       <br/>
//       <input type="password" placeholder='password'/>
//       <br/>
//       <input type="submit" value="loginIn"/>
//       </center>
//     </div> 
//   )
// }
// export default App;

// import React,{ useRef, useState, useEffect} from 'react'
// const App=()=>{
//   let[count,setCount] = useState(0); 
//   let x = useRef(0);
//   console.log(x);
//   useEffect(()=> {
//     x.current=x.current+1
//   },[count])
//   return(
//     <div>
//       <input type="text" placeholder='username'onChange={(e)=>setCount(e.target.value)}/>
//       <br />
//       <button>Click</button>
//       <h3>clicked for {x.current} times</h3>  
//     </div>
//   )
// }
// export default App;


import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  let [count, setCount] = useState(""); 
  let prevCount = useRef("");

  useEffect(() => {
    prevCount.current = prevCount.current+1; // Store the previous count before updating
  }, [count]);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter text" 
        onChange={(e) => setCount(e.target.value)} 
      />
      <br />
      <button>Click</button>
      <h3>Current value: {count}</h3>
      <h3>Previous value: {}</h3>
    </div>
  );
};

export default App;
