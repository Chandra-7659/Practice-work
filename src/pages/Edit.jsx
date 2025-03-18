import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from'axios';



function Edit() {
    let[values,setvalues]=useState({username:"",email:""});
    let change=(e)=>{
        setvalues({...values,[e.target.name]:e.target.values})
    }
    console.log(useParams());
    const{id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/users/+id")
        .then(res=>setvalues(res.data))
    })
  return (
   <>
   
   <h1>update your details</h1>
   <from action="">
    <input type="text" placeholder='name'
    name="username"
    values={values.username}
    onChange={change}

    
    />
    <input type="email" placeholder='email'
    name="email"
    values={values.email}
    onChange={change}

    
    />
    
   </from>
   </>
  )
}

export default Edit