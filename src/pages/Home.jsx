
import Navbar from '../components/header/Navbar'
import Sidebar from '../components/header/Sidebar'
import Navtag from '../components/header/Navtag'
// import VideoData from '../data/video.json';
import Video from '../components/UI/Video'
import axios from 'axios';
import '../App.css'
import { useEffect, useState } from 'react';

function Home() {

  const [VideoData, setVideoData] = useState([]);

  useEffect(() => {
    uploadVideo();
    uploadTags();
    getVideos();
  }, [])


  const uploadVideo = async () => {
    const res = await axios.post('http://127.0.0.1:5000/uploadVideo',


      {
        // "duration" : "15.28",
        // "title" : "Blue Lock Best/Epic Moments Part 1",
        // "thumbnail" :"	https://i.ytimg.com/vi/KQ8HIIot8tQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCiZ4j1HCc-irFHrqp-QeXCilsYDg",
        // "video_url" : "https://www.youtube.com/embed/q4wTKYt5yvw?si=bxZZOO2EpBcEE9Dg",
        // "channel_name" : "AA Studio",
        // "channel_img" : "",
        // "views" : "8M Views •",
        // "upload_time" : "8 months ago" 
      }

    );
    console.log(res.data);
  }

  const uploadTags = async () => {
    const res = await axios.post('http://127.0.0.1:5000/uploadTags',
      {
        "name": "Movies"
      });
    console.log(res.data);
  }

  const getVideos = async () => {
    const res = await axios.get('http://127.0.0.1:5000/allvideos',);
    setVideoData(res.data.model)
    console.log(res.data);

  }

  return (
    <>
      <div className='shadow sticky-top' >

        <Navbar />
      </div>
      <div className='ss d-flex'>
        <div className=' op'>

          <Sidebar />
        </div>
        <div className=''>



          <div className="row mx-0">
            <div className="col-10 ms-auto">
          <Navtag />



              <div className='row pl mt-3 mx-0'>

                {VideoData && VideoData.map(item => {

                  return (
                    <div className='col-4 ms-auto'>
                      <Video video={item} />
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home