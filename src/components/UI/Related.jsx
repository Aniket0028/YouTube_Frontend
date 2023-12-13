
const Related = (props) => {

    return(

        <>
        
     <div className="row mt-3">
    
<div className="col-6 ">
  <a href={"/Videopage/"+props.video._id}>
  <img src={props.video.thumbnail} className="img-fluid w-100 rounded-2 dev" alt="..." />
  </a>
</div>
        
  <div className="col-6 text-dark">
    <p className="fw-medium text-black fs-6 ">{props.video.title}</p>
    <p className="ani">{props.video.channel_id?.channel_name}</p>
    <p className="mb-0"> 3.3M </p>
    <p className=""> </p>
  </div>
  
   </div>
   


        </>
    )
}

export default Related;

