import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { use } from "react";
const Add = () => {
    let [values,setValues]=useState({"username":"","email":""})
    let change=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
    let navigate=useNavigate()
    function sendUser(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/users",values)
        .then(res=> navigate("/home"))
        
        
    }
    return (
        <>
        <h1>ADD USER PAGE</h1>
        <form action="">
            <input 
            type="text" 
            placeholder="Enter your username"
            name="username"
            value={values.username}
            onChange={change}
            />
            <br />
            <input 
            type="text" 
            placeholder="Enter your email address"
            name="email"
            value={values.email}
            onChange={change}
            />
            <br />
            <button onClick={sendUser}>Add User</button>
        </form>
        </>
    )
}
export default Add