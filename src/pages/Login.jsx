import { useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../layouts/auth';
import LoadingBar from 'react-top-loading-bar'
const Login = () => {
   const [email,SetEmail] = useState('');
   const [password,SetPass] = useState('');
   const [error,SetError] = useState('');
   const [progress,setProgress] = useState('');
   const [succes,SetSucces] = useState('');
   const [loading, SetLoading] = useState(false);


  //  const navigate = useNavigate();
    
  const handleSubmit = async (e) => {

   e.preventDefault();
   SetLoading(true);
   SetSucces('');
   SetError('');
   if(email=="" || password==""){
    SetError("please fill email and password!");
    SetLoading(false);
  
     return false;
   }
  
  try{
    
   const res = await axios.post("http://127.0.0.1:5000/login",{
    email,password
   });
   
   if(res.data.status==true){
    localStorage.setItem('verify_token',res.data.token)
    SetSucces(res.data.msg);
    await new Promise(resolve => setTimeout(() => resolve(), 800));
    SetLoading(false);
    window.location.href="/VerifyLogin"
  

   }else{
    SetError(res.data.msg);
    SetLoading(false);
  
   }

  }
  
catch(eror) {
  SetError(eror)
}
  // navigate("/");
}



    return (
        <>
    <Auth title="Login Account" alert={[error,succes]}>
    <form className=" bg-login p-3" method="post" onSubmit={handleSubmit}>
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     <br />
    </div>
    <div className="form-floating w-50 mx-auto">
     
      <input
        type="email"
        className="form-control "
        id="floatingInput"
        placeholder="name@example.com"
        onKeyUp={(e) => SetEmail(e.target.value)}
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mt-2 w-50 mx-auto ">
      <input
        type="password"
        className="form-control "
        id="floatingPassword"
        placeholder="Password"
        onKeyUp={(e) => SetPass(e.target.value)}

      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-check my-3">
      <input
        className="form-check-input float-none me-2"
        type="checkbox"
        defaultValue="remember-me"
        id="flexCheckDefault"
      />
      
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    {loading && <div className="d-flex justify-content-center btn btn-danger w-100 py-2">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>}
{!loading && <button onClick={() => setProgress(100)} className="btn btn-danger w-50 py-2" type="submit">
      Login
    </button> }
    <a href="/Signup">
        <h5 className="text-danger fw-medium mt-3 fs-6">Create New Account</h5>
    </a>
    <a href="/Forget">
        <h5 className="text-danger fw-medium fs-6">Forget Password</h5>
    </a>
   
  </form>
  </Auth>
</>
    )
}

export default Login
