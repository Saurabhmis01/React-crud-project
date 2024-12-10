import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';


const Display=()=>{
    const [mydata, setMydata]= useState([]);
const loadData=()=>{
    let url="http://localhost:3000/user";
    axios.get(url).then((res)=>{
        console.log(res.data);
        setMydata(res.data)
    })
}
useEffect(()=>{
    loadData();
}, [])
const ans=mydata.map((key)=>{
    return(
        <>
          <tr>
            <td>{key.fullname}</td>
            <td>{key.email}</td>
            <td>{key.password}</td>
            <td>{key.confirmpassword}</td>
          </tr>
        </>
    )
})
    return(
        <>
        <div style={{backgroundColor:"skyblue"}}>
         <h1>Display data</h1>
         <Table striped bordered hover style={{fontSize:"25px"}}>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Confirmation Password</th>
        </tr>
      </thead>
      <tbody>
              {ans}
      </tbody>
       </Table>
       </div>
        </>
    )
}
export default Display;