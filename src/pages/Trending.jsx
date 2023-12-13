import Sidebar from '../components/header/Sidebar'
import Navbar from '../components/header/Navbar'
import Now from '../components/UI/Now'
import NowData from '../data/video.json'
import { useEffect, useState } from 'react'

const Trending = () => {
   const [video, SetVideos ] = useState([]);
  useEffect(() => {

    var finaldata =[];

    
     NowData.map( item => {
       if(item.type[0]=="trending") {
          finaldata.push(item);   
       }
     });

     SetVideos(finaldata);

  },[]);

return (

<>
<div className='row mx-0'>

<Navbar/>
</div>
<div className='row mx-0'>

<div className='col-2 '>

<Sidebar/>
</div>

<div className="col  ms-5">
<div className='d-flex'>

<img className='img rounded-circle' src="assets/image/trending.jpg" alt="" />
<h1 className='mt-3 ms-3 fs-2'>Trending</h1>
</div>

<div className='col mt-3'>







<ul className="nav nav-underline gap-5" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        type="button"
        role="tab"
        aria-controls="home-tab-pane"
        aria-selected="true"
        >
        Now
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
        aria-selected="false"
        >
        Music
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#contact-tab-pane"
        type="button"
        role="tab"
        aria-controls="contact-tab-pane"
        aria-selected="false"
        >
         Movies
      </button>
      
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="disabled-tab"
        data-bs-toggle="tab"
        data-bs-target="#disabled-tab-pane"
        type="button"
        role="tab"
        aria-controls="disabled-tab-pane"
        aria-selected="false"
        disabled=""
        >
        Gaming
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
          <div className='row mt-3 mx-0'>
       {video && video.map(item => {

       return (
        <div className='col-12'>
        <Now now={item}/>
        </div>       
       )

       })}
       
     
  </div>
      
    </div>
    <div
      className="tab-pane fade"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabIndex={0}
      >
      nitbjnir
    </div>
    <div
      className="tab-pane fade"
      id="contact-tab-pane"
      role="tabpanel"
      aria-labelledby="contact-tab"
      tabIndex={0}
      >
      dencinevo
      
    </div>
    <div
      className="tab-pane fade"
      id="disabled-tab-pane"
      role="tabpanel"
      aria-labelledby="disabled-tab"
      tabIndex={0}
      >
    
      ,em cl
      
    </div>
  </div>


</div>
</div>



        </div>

</>

)


}
export default Trending
