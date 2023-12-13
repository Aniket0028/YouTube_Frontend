import MyDropzone from './UploadVideos'

const Dashboard = () => {
    return(
        <>


<div className="col-10 p-5 d-flex gap-5 ms-auto ">
          
<div className="card  " style={{width: '18rem'}}>
<div className=" ">

<img src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_upload_video_v3_darkmode.svg" className="card-img-top w-50 ms-5 mt-5" alt="..." />
<div className="card-body text-center font p-0 ">
<p className="card-text m-0"> Want to see metrics on your recent video?</p>
<p className="card-text">Upload and publish a video to get started.</p>

{/* <button className="btn btn-primary ">upload videos

</button> */}

<div>
  
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    upload videos
  </button>
  
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Upload videos</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body ">

          <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width={100} height={160} fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
</svg>

          </div>

        <div className="">
          <p className="m-0 fw-medium">Drag and drop video files to upload</p>
          <p className="">Your videos will be private until you publish them.</p>
           <MyDropzone/>
        </div>

        </div>
        <div className="mx-auto p-3">
          <p className="vh1">By submitting your videos to YouTube, you acknowledge that you agree to YouTube's</p> 
  <a className="vh1" href="">Terms of Service</a>
   <p className="vh2">and</p>
   <a className="vh1" href="">Community Guidelines</a>
   
        </div>
      </div>
    </div>
  </div>
</div>





</div>
  </div>
</div>


<div className="card  " style={{width: '18rem'}}>

<div className="card-body">
<h5 className="card-title">Channel analytics</h5>
<p className="card-text m-0">Current subscribers</p>
<h1 className="fw-medium">0</h1>
<hr />
<h6>Summary</h6>
<p className="font">Last 28 days</p>
<div className="row">
<div className="col-10">
  <p>
  views
  </p>
</div>
<div className="col-2  ">
  <p>0</p>
</div>
<div className="col-10">
  <p>
  Watch time (hours)	
  </p>
</div>
<div className="col-2 ">
  0.0
</div>
</div>
<hr />
<h6>Top videos</h6>
<p className="font">Last 48 hours · Views</p>
<a href="" className="fw-medium">Go to channel analytics</a>
</div>
</div>

<div className="card " style={{width: '18rem'}}>
<h5 className="card-title mt-2 ms-2">News</h5>
<div className=" p-2">

<img src="https://www.gstatic.com/youtube/img/promos/growth/92edd9dd565815bc0ee65932509fd937dc611007e8e57f54704c7e22ed54787a_380x170.png" className="img-fluid" alt="..." />
</div>
<div className="card-body">
<h6>Your Next Idea Starts Here</h6>
<p className="card-text font">Whether you're looking for inspiration for your next video, general YouTube knowledge, or opportunities to get ahead of rising trends, here are some top trends our experts are seeing around the world</p>
<a href="https://youtube.com/shorts/tzJuDQnNnkY?si=TvN1ZwZUDmEhhy6h" className="fw-medium">CHECK THEM OUT</a>

</div>
</div>

  </div>


        </>
    )
}
export default Dashboard