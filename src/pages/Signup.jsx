import { useState } from "react";
import axios from 'axios';
import Auth from "../layouts/auth";


const Signin = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [Mobile, SetMobile] = useState('');
  const [password, SetPass] = useState('');
  const [success, SetSuccess] = useState('');
  const [error, SetError] = useState('');
  const [type, SetType] = useState('email');


  const handleSubmit = async (e) => {
    e.preventDefault();
    SetSuccess('');
    SetError('');
    if(type=="mobile"){
 

    if (name == "" || Mobile == "" || password == "") {
      SetError("please fill all fields!");
      return false;
    }


  }else{
    if (name == "" || email == "" || password == "") {
      SetError("please fill all fields!");
      return false;
    }
  }

    try {

if(type=="mobile"){

      const res = await axios.post("http://127.0.0.1:5000/register", {
        name, Mobile, password, type
      });

    }else{
      const res = await axios.post("http://127.0.0.1:5000/register", {
        name, email, password, type
      });

    }

    

     

      if (res.data.status == true) {
        localStorage.setItem('verify_token', res.data.token);
        window.location.href = '/VerifyRegister';
        SetSuccess(res.data.msg);

      } else {
        SetError(res.data.msg);

      }

    }

    catch (err) {
      SetError(err)

    }

  }

  return (
    <>
    <Auth title="Register Account" alert={[error,success]}>
    <>
  <ul className="nav nav-pills ms-2" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true" onClick={() => SetType("email")}
      >
        Email Address
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="false" onClick={() => SetType("mobile")}
      >
        Mobile
      </button>
    </li>
   
  </ul>
  <div className="tab-content" id="myTabContent">
    <div
      className="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabIndex={0}
      >
      <form className="signin  form-control-lg  " onSubmit={handleSubmit}>
    <center className="p-3">
    <div className="form-floating w-75 ">
      <input
        type="name"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      onKeyUp={(e) => SetName(e.target.value)}
      />
      <label htmlFor="floatingInput">Name</label>
    </div>
    <div className="form-floating mt-2 w-75 ">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetEmail(e.target.value)}
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mt-2 w-75 ">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetPass(e.target.value)}
      />
      <label htmlFor="floatingInput">Password</label>
    </div>
  
   
    <button className="btn btn-danger py-2 mt-3 w-50" type="submit">
      Submit
    </button>
    <a href="/Login">
        <p className="text-danger fw-semibold small mt-3">Sign in to an existing account</p>
    </a>
    </center>
  </form>

    </div>
    <div
      className="tab-pane fade"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabIndex={0}
    >
      <form className="signin  form-control-lg  " onSubmit={handleSubmit}>
    <center className="p-3">
    <div className="form-floating w-75 ">
      <input
        type="name"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      onKeyUp={(e) => SetName(e.target.value)}
      />
      <label htmlFor="floatingInput">Name</label>
    </div>
    <div className="form-floating mt-2 w-75 ">
      <input
        type="tel"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetMobile(e.target.value)}
      />
      <label htmlFor="floatingInput">Mobile </label>
    </div>
    <div className="form-floating mt-2 w-75 ">
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetPass(e.target.value)}
      />
      <label htmlFor="floatingInput">Password</label>
    </div>
  
   
    <button className="btn btn-danger py-2 mt-3 w-50" type="submit">
      Submit
    </button>
    <a href="/Login">
        <p className="text-danger fw-semibold small mt-3">Sign in to an existing account</p>
    </a>
    </center>
  </form>

    </div>
   
  </div>
</>

    </Auth>

    </>
  )
}

export default Signin
