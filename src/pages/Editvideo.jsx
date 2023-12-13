import { useEffect, useState } from "react"
import Navbar from "../components/header/Navbar"
import axios from "axios"
const Editvideo = () => {
  const [video, setVideoData] = useState({})
  const [thumbnail, Setthumbnail] = useState('')
  const [title, setTitle] = useState('')
  const [Success, SetSuccess] = useState('');
  const [status, setStatus] = useState('');
  const [error, SetError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetSuccess('');
    SetError('');

    if (thumbnail == "" || title == "" || status == "") {
      SetError("please fill all fields!");
      return false;
    }
    const param = window.location.pathname.split('/Editvideo/');
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    var res = await axios.post('http://127.0.0.1:5000/updateEditVideo', {
      thumbnail, title, status, video_id: param[1]
    });

    console.log(res);



  }





  useEffect(() => {
    getVideo();
  }, [])

  const getVideo = async () => {
    const params = window.location.pathname.split('/Editvideo/');

    const res = await axios.post('http://127.0.0.1:5000/getEditVideo', {
      video_id: params[1]
    });
    setVideoData(res.data.video)
    console.log(res.data)
  }






  return (
    <>
      <div className="shadow bp-4"><Navbar /></div>
      {video &&
        <div className="card mb-3 mx-auto mt-4" style={{ width: 800 }}>

          {Success && <div className="alert alert-success">{Success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row">
            <div className="col-6 mx-auto text-center mt-5">

              <h2 className="mx-auto pb-4  text-center">Edit video </h2>

              <form className="pb-4" method="post" onSubmit={handleSubmit}>

                <div class="row mb-3">
                  <label for="Thumbnail" class="col-sm-4 col-form-label">Thumbnail:</label>
                  <div class="col-sm-8">
                    <input type="text"
                      class="form-control"
                      id="Thumbnail"
                      placeholder="Thumbnail"
                      onKeyUp={(e) => Setthumbnail(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="title" class="col-sm-4 col-form-label">Title:</label>
                  <div class="col-sm-8">
                    <input type="text"
                      class="form-control"
                      id="title"
                      placeholder="title"
                      onKeyUp={(e) => setTitle(e.target.value)}

                    />
                  </div>
                </div>



                <div class="row mb-3">
                  <label for=" Description" class="col-sm-4 col-form-label"> Video URL:</label>
                  <div class="col-sm-8"
                  >
                    <video className="rounded-3" width={200} controls src={"http://127.0.0.1:5000/videos/" + video.video_url}></video>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for=" Status" class="col-sm-4 col-form-label">Status: </label>
                  <div class="col-sm-8">
                    <select class="form-select" onChange={(e) => setStatus(e.target.value)}  >
                      <option value="" readonly> Select Status</option>
                      <option value="publish"> publish</option>
                      <option value="draft"> draft</option>
                    </select>
                  </div>
                </div>
                <button className=" w-25 btn btn-danger  " type="submit">
                  Upload
                </button>
              </form>
            </div>

          </div>


        </div>
      }
    </>
  )
}
export default Editvideo