import Auth from "../layouts/auth"
import { useState } from "react";
import axios from "axios";
const Forget = () => {

  const[Email , setEmail] = useState('');
  const handleSubmit = async(e) =>
  {
      e.preventDefault()
      const res = await axios.post("http://127.0.0.1:5000/resetpassword" , {
          Email : Email,
      })

      console.log(res); 
      window.alert(res.data.msg)

      
  }

    return (
        <>
 
      <Auth>
  <form onSubmit={handleSubmit} method="post">
    <center>
      
    
    <h1 className="h3 mb-3 fw-bold ">Enter E-mail</h1>
    
    <div className="form-floating w-50 mb-3">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        onKeyUp={(e) => setEmail(e.target.value)}
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Email address</label>
                        
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
