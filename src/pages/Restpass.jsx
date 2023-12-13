import Auth from "../layouts/auth"
import { useState,useEffect } from "react";
import axios from "axios";

const Forget = () => {


  const [Cpassword , setCPass] = useState('');
  const [Password , setPassword] = useState('')


  useEffect(() => {
   CheckUser();
  },[]);

  const CheckUser = async() => {
   const params= window.location.pathname.split('/resetpass/');
   axios.defaults.headers.common['Authorization'] = params[1].replace("/","");
   const res = await axios.post("http://127.0.0.1:5000/CRPassword");
   console.log(res.data);
   if(res.data.status==false || res.data.msg=="token wrong") {
    window.location.href="/";
   }
  }


  

  const handleSubmit = async(e) =>
  {
       e.preventDefault()
       const params= window.location.pathname.split('/resetpass/');
       axios.defaults.headers.common['Authorization'] = params[1].replace("/","");
       const res = await axios.post("http://127.0.0.1:5000/UpdateResetPassword" , {
           Password : Password,
           CPassword : Cpassword
       })
    
  }
    return (
        <>
<Auth>
  <form onSubmit={handleSubmit} method="post">
    <center>
        
    
    <h1 className="h3 mb-3 fw-bold ">Reset Password</h1>
    
    <div className="form-floating w-50 mb-3">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        onKeyUp={(e) => setPassword(e.target.value)} 
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Enter new password</label>
    </div>
    <div className="form-floating w-50 mb-3">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        onKeyUp={(e) => setCPass(e.target.value)}
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Confirm new password</label>
    </div>
   
   
    <button className="btn btn-danger w-50 py-2" type="submit">
      Next
    </button>
    <a href="/Signin">
        <h5 className="text-danger fw-medium mt-3 fs-6">Create New Account</h5>
    </a>
    <a href="/Login">
        <h5 className="text-danger fw-medium fs-6">Already Have An Account</h5>
    </a>
    </center>
  </form>
  </Auth>
</>
    )
}

export default Forget
