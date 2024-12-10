import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Insert=()=>{
    const [input,setinput]=useState({});
    const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setinput(values=>({...values,[name]:value}))
    console.log(input)
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/user";
        axios.post(url,input).then((res)=>{
            alert("Data Save...!")
        })
    }

    return(
        <>
        <div style={{backgroundColor:"skyblue"}}>
        <h1>Insert data</h1>
         <Form style={{width:"500px", fontSize:"25px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name="fullname" value={input.fullname} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text"  name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text"  name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirmation Password</Form.Label>
        <Form.Control type="text"  name="confirmpassword" value={input.confirmpassword} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>

        </>
    )
}
export default Insert;