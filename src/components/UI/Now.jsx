const Now = (props) => {
    return (
   <>
     


     <div className="card border border-0  w-100 mt-3">
    <a href={"/Videopage/"+props.now.id} className="d-flex w-100">

  <img src={props.now.thumbnail} className="rounded-1 cricket" alt="..." />
        
        
  <div className="w-100 ms-2 text-dark  ">
    <p className="fw-medium fs-6 pb-0 mb-0">{props.now.title}</p>
    <div className="d-flex">
    <p className="fw-normal mb-2">{props.now.channel_name}</p>
    <p className="fw-normal mb-2 ms-3">{props.now.views}</p>

    <p className="fw-normal mb-2 ms-2">{props.now.upload_time}</p>

    </div>
    <p className="fw-normal">{props.now.title}</p>

  </div>

   </a>

</div>

   </>
    )
  }
  
  export default Now;