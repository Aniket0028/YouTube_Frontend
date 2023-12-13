import { useEffect, useState } from 'react';
import axios from 'axios';

const NavTag = () => {
 
  const [TagsData, setTagsData] = useState([]);

 useEffect(() => {
  getTags();
 },[])
 
 const getTags = async() => {
     const res = await axios.get('http://127.0.0.1:5000/alltags',);
     setTagsData(res.data.model)
     console.log(res.data);
     
    }
 
  return (
      <>
     <nav className="navbar-expand-lg d-flex ">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">


      {TagsData && TagsData.map(item => {
        console.log (item);
return (<a className= {item.name==="All"? "nav-link active fs-6 fw-bold me-5 mt-1" : "nav-link me-5 fw-medium mt-1"}  href="#" >{item.name }</a>)

})}
      </div>
    </div>
  </div>
</nav>

     </>
  )
}

export default NavTag