
import Navbar from '../components/header/Navbar'
import '../App.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Related from '../components/UI/Related';
function Videopage() {
  const [video, setVideo] = useState({}); 
  const [VideoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideo();
    getRecentvideos();
 
  },[])

  const getRecentvideos = async() => {
    const res = await axios.get('http://127.0.0.1:5000/getrecentvideos',);
    setVideoData(res.data.video)
    console.log(res.data);
  }

  const getVideo = async() => {
    const params= window.location.pathname.split('/Videopage/');
    const res = await axios.post('http://127.0.0.1:5000/getvideo',{
      video_id: params[1]
    });
    setVideo(res.data.model)
    console.log(res.data);    
   }

  return (
    <>
    <div className='shadow'>
     <Navbar/>

    </div>
    
    <div className='row d-flex   mx-0'>

<div className='col-8  ms-5 mt-3'>
<iframe width="1000" height="500" src={"http://localhost:5000/videos/"+video.video_url} className='rounded-4' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


<div className='ms-3  col-3'>

{VideoData && VideoData.map(item => {

return (
 <div className='col-12'>
 <Related video={item}/>
 </div>

)

})}
    
   
</div>
     
    </div>


    


    
    </>
  )
}

export default Videopage;
