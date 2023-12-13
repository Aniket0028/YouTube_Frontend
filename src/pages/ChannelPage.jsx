import Navbar from '../components/header/Navbar'
import '../App.css'
import Video from '../components/UI/Video'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Sidebar from '../components/header/Sidebar';
function ChannelPage() {
  const [channel, setChannel] = useState({}); 
  //const [videos, setVideos] = useState([]); 
  const [VideoData, setVideoData] = useState([]);


  useEffect(() => { 

     getChannel();

  },[])



  const getChannel = async() => {
    const slug= window.location.pathname.split('/');
    // console.log(slug[1])
    var res = await axios.post('http://127.0.0.1:5000/getChannel',{
      slug: slug [1]});
    setChannel(res.data.channels);
    console.log(res.data.channels._id)
 

    var resv = await axios.post('http://127.0.0.1:5000/getChannelVideos',{
      channel_id: res.data.channels._id
    });
    console.log(resv.data.video);
    setVideoData(resv.data.video);
   }


   
   


  return (
    <>
     <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-2'>
            <Sidebar/>
   

            </div>
            <div className='col-10 p-0 '>
                <img src={channel.banner} className='img-fluid'/>
                <div className='row m-4'>
                    <div className='col-2  '>
                        <img src={channel.logo} className='img-fluid rounded-pill' />
                    </div>
                    <div className='col-8 py-4 px-5'>
                       <h2> {channel.name} PewDiePie </h2>
                       <p className='m-0'>{channel.slug} <span>{channel.subscribers}</span> <span>{channel.videos}</span></p>
                       <p>{channel.description}</p>
                    </div>
                    <div className='col-2 '>
                   <input className="btn btn-dark rounded-5" type="button" defaultValue="subscribe" />
                   </div>

                </div>
                <div className='col mt-3 gap-5'>

<ul className="nav-underline d-flex border-bottom gg  " id="myTab" role="tablist">
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
       Home
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
        Videos
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
         Live
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
        Community
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
        Store
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
        Channels
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
        About
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
       {VideoData.map((item) => {

       return (
        <div className='col-4'>
        <Video video={item}/>
        </div>       
       
       )

       })};
       
     
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

    </div>

     

    
    </>
  )
}

export default ChannelPage
