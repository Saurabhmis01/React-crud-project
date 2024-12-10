import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import edtimg from "../photos/edit.jpg";
import delimg from "../photos/delete.jpg";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata, setMydata]=useState([]);

    const myNav= useNavigate();

    const loadData=()=>{
     let url="http://localhost:3000/user";
     axios.get(url).then((res)=>{
        setMydata(res.data)
     })
    }
    useEffect(()=>{
        loadData();
    }, [])
    const myDel=(myid)=>{
        let url=`http://localhost:3000/user/${myid}`;
        axios.delete(url).then((res)=>{
            alert("Record Deleted!!!");
            loadData();
        })
    }


    const myEdit=(myid)=>{
       
      myNav(`/myedit/${myid}`)    // /myedit/101 
       
    }

  const ans=mydata.map((key)=>{
       return(
        <>
           <tr>
            <td>{key.fullname}</td>
            <td>{key.email}</td>
            <td>{key.password}</td>
            <td>{key.confirmpassword}</td>
            <td> 

            <a href="#">
              <img src={edtimg}  width="30" height="30" onClick={()=>{myEdit(key.id)}} />
            </a>
             



          <a href="#">
          <img src={delimg}  width="30" height="30"  onClick={()=>{myDel(key.id)}} />
          </a>
            </td>
           </tr>
        </>
       )
  })
    return(
        <>
        <div style={{backgroundColor:"skyblue", fontSize:"25px"}}>
         <h1>Update data</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#Full Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Confirmation Password</th>
          <th> </th>
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

export default Update;