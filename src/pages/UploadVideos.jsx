import axios from "axios";
import React, {useState} from "react";
function MyDropzone() {
  const [myfile, setMyFile ] =useState();
  const handelUpload = async(e) => {
    e.preventDefault()
    console.log(myfile)



    const formdata = new FormData()
    formdata.append('file',myfile[0])
    const res = await axios.post('http://127.0.0.1:5000/uploadfile',formdata)
    console.log(res)
  }

  return (
     <>    
  <form method="POST" onSubmit={handelUpload} encType="multipart/form-data">
    <input className="" type="file" name="file" onChange={(e)=> setMyFile(e.target.files)}/>
    <button className="" type="submit">SUBMIT</button>
  </form>
    
    </>

  )
}

export default MyDropzone