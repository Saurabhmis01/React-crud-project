import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EditData=()=>{

   const {id}=useParams();
   const [mydata, setMydata]= useState({});  
   const loadData=()=>{
    let api=`http://localhost:3000/user/${id}`
    axios.get(api).then((res)=>{
        setMydata(res.data)
    });
   }

   useEffect(()=>{
    loadData();
   }, [])
const handleInput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setMydata(values=>({...values, [name]:value}));
}
const handleSubmit=()=>{
    let url=`http://localhost:3000/user/${id}`
    console.log(mydata);
    axios.put(url, mydata).then((res)=>{
        alert("Data updated!!!")
    })
}

    return(
        <>
        <div style={{backgroundColor:"skyblue", fontSize:"25px"}}>
          <h1> Edit Student Data  </h1>
         Enter Full Name <input type="text" name="fullname" value={mydata.fullname} onChange={handleInput} />
         <br/>
         Enter Email <input type="text" name="email"  value={mydata.email}  onChange={handleInput} />
         <br/>
         Enter Password <input type="text"  name="password" value={mydata.password}   onChange={handleInput} />
         <br/>
         Enter Confirmation Password <input type="text" name="confirmpassword"  value={mydata.confirmpassword}   onChange={handleInput} />
         <br/>
         <button onClick={handleSubmit}> Data Save</button>
         </div>


        </>
    )
}

export default EditData;