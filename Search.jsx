import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Search=()=>{
  const [fullname, setfullname]=useState("");
  const [mydata, setMydata] = useState([])
  const mySearch=()=>{
     let url=`http://localhost:3000/user/?fullname=${fullname}`
     axios.get(url).then((res)=>{
        setMydata(res.data);
     });
  }
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
        <div style={{backgroundColor:"skyblue", fontSize:"25px"}}>
         <h1>Search data</h1>
         Enter Full Name : <input type="text" value={fullname} 
         onChange={(e)=>{setfullname(e.target.value)}} />
         <button onClick={mySearch}> Search </button>  
         <hr />
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
export default Search;