import { useEffect, useState } from 'react';
import axios from 'axios';



const Mystudio = () => {
  const [VideoData, setVideoData] = useState([]);
  useEffect(() => {
   
   getVideos();
  },[])

  const getVideos = async() => {
    const res = await axios.get('http://127.0.0.1:5000/allstudiovideos',);
    setVideoData(res.data.model)
    console.log(res.data);}
    return (
        <>
                  <div className='col-10 ms-auto mt-3 '>
        <h2 className="p-2">Channel content</h2>

<ul className= " nav-underline d-flex border-bottom gg  " id="myTab" role="tablist">
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
       Videos
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link text-dark"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="false"
        >
        Live
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
         Playlist
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
        Podcasts
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
        Promotions
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
        <table className='table table-bordered'>
        <tr className=''>
          <th>ID</th>
          <th>URL</th>
          <th>Status</th>
        </tr>
       {VideoData && VideoData.map((item,index) => {
 
       return (
        <tr className=''>
          <td className='p-3'>{index}</td>
          <td>{item.video_url}</td>
          <td>{item.status}</td>
          <td>
            <a href={"/Editvideo/"+item._id}

           className='border rounded'>Edit
            
            </a>          
          
           </td>
         
        </tr>

       )

       })}
       
  </table>
       

  
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

</>
    )
}

export default Mystudio
