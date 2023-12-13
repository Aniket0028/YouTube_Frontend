const Video = (props) => {

  return (
      <>
  <div className="relative card border-light" >
  <a href={"/Videopage/"+props.video._id}>

<img src={props.video.thumbnail} className="card-img-top rounded-2" alt="" />

<div className="d-flex">
  <img src={props.video.channel_id?.logo} className="rounded-pill mt-2"
 width="41" 
 height="41" border="0" alt=""/>
    <h5 className="card-title fw-bold text-black fs-6 mt-3 ms-3">{props.video.title}</h5>
    </div>
    </a>
  
<h5 className="fw-normal text-gray fs-6 ms-5 ps-2">{props.video.channel_id?.channel_name}
    
    <p></p>
   </h5>
    <h5 className=" fw-normal text-gray fs-6 ms-5 gap-2 ps-2">{props.video.views}{props.video.upload_time}</h5>
</div>
        
 </>
  )
}

export default Video;