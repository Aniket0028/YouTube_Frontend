import Navbar from '../components/header/Navbar'
import axios from 'axios';
import Mystudio from './Mystudio'
import { useEffect, useState } from "react";




import '../App.css'

const Studio = () => {
  const [channel_name, SetChannel_name] = useState('');
  const [banner, SetBanner] = useState('');
  const [logo, SetLogo] = useState('');
  const [mystudio, SetMystudio] = useState(false);
  const [description, SetDescription] = useState('');
  const [status, SetStatus] = useState('');
  const [error, SetError] = useState('');
  const [success, SetSuccess] = useState('');

  useEffect(()=>{
    getStudioChannel();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetSuccess('');
    SetError('');

    if ( channel_name == "" || banner == "" || logo == "" || description == "" || status == "") {
      SetError("please fill all fields!");
      return false;
    }

    // axios.defaults.headers.common['Authorization']=localStorage.getItem('token')
    const res = await axios.post('http://127.0.0.1:5000/createChannel',{
      channel_name,banner,logo,description,status
    })
      
  }


const getStudioChannel = async ()=> {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  const res = await axios.get("http://127.0.0.1:5000/getStudioChannel");
   console.log(res.data);
  if (res.data.status == true){
    SetMystudio (true);
  }
}





return (
    <>

    {mystudio==false && 
    
    <div className=''>
<Navbar/>
    

  <div className=" mx-auto  rounded-4 card-body col-7 mt-5  shadow p-3 mb-5 bg-body-tertiary rounded" alert={[error,success]}>
   
  <img
      className="w-50 mx-auto"
      src=""
      alt=""
    /> <h2 className="mb-3 text-center fw-bold ">Create Channel</h2>
    <form className="channel form-control-lg " method='post' onSubmit={handleSubmit}>
      <div className="row ms-2">
        
       
        <div className="col-10 d-flex mt-3">
          <p className='fw-bold pe-2 pt-2 w-25'>Channel Name</p>
          <input type="text" placeholder='Please Enter Channel Name' className="form-control w-75" id="firstName" onKeyUp={(e) => SetChannel_name(e.target.value)}/>
        </div>

        <div className="col-10 d-flex mt-3">
          <p className='fw-bold pe-2 pt-2 w-25'>Banner-Image</p>
          <input type="text" placeholder='Please Enter Image URL' className="form-control w-75" id="firstName" onKeyUp={(e) => SetBanner(e.target.value)}/>
        </div>
        <div className="col-10 d-flex mt-3">
          <p className='fw-bold pe-2 pt-2 w-25'>Logo</p>
          <input type="text" placeholder='Please Enter Logo URL' className="form-control w-75" id="firstName" onKeyUp={(e) => SetLogo(e.target.value)}/>
        </div>
        <div className="col-10 d-flex mt-3">
          <p className='fw-bold pe-2 pt-2 w-25'>Description</p>
          <input type="text" placeholder='Please Enter Description' className="form-control w-75" id="firstName" onKeyUp={(e) => SetDescription(e.target.value)}/>
        </div>
        <div className="col-10 d-flex mt-3">
          <p className='fw-bold pe-2 pt-2 w-25'>Status</p>
          <input type="text" placeholder='Please Enter Status' className="form-control w-75" id="firstName" onKeyUp={(e) => SetStatus(e.target.value)}/>
        </div>
        
    <center>
      <button className="w-50 btn btn-primary btn-lg mt-3" type="submit">Create Channel</button>
      </center>
      </div>
    </form>
  </div>
  </div>  
}
{mystudio==true &&
<Mystudio/>

}

 
    </>
  )
}

export default Studio