import React, { useState } from 'react'
import './PostInfo.css'
import Cookies from 'universal-cookie';
import axios from 'axios';
function PostInfo() {
 
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [name, setName] = useState("");
  const [Des, setDes] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  const [updatestatus, setupdatestatus] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "file iss")
    setSelectedFile(file);
    setSelectedFileName(file.name);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the list
    setSelectedImage(file); 

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };


  let cookie = new Cookies()
  const PublishComponent = () => {
    if (name && Des && selectedImage && selectedFile) {
      setupdatestatus("")
      if (!isDisabled) {
        setIsDisabled(true);
        let user = cookie.get('user').token || ""
        console.log(user, "user")
        console.log("img are", selectedImage)

        let formdata = new FormData();
        formdata.append("user", user)
        formdata.append("name", name)
        formdata.append("des", Des)
        formdata.append("imagefile", selectedFile)
        formdata.append("imageObj", selectedImage)
       

        axios.post('https://flexflow-server.onrender.com/comp/publishComponent',formdata).then(res => {
          if (res.data === 'success') {
            setupdatestatus("Component Published Successfully")
          }
        })
      }
    }
    else {
      setupdatestatus("Something missing")
    }
  }


  return (
    <>
      <h4 className="h4Head"><u>List your component</u></h4>

      <form className="InfoChanges_form">

        <label for="imgupload" className='btn-upload-image-black cen' style={{ padding: "0px 50px", height: "35px", width: "55px" }}></label>
        <img className='upload-img-show' src={previewImage} alt=""></img>
        <input id="imgupload" type='file' accept=".png,.jpg,.jpeg" name="imageObj" enctype="multipart/form-data"  onChange={handleImageChange}></input>

        <label>Name of Component</label>
        <input type='text' placeholder='Name your component' onChange={(e) => setName(e.target.value)}></input>
        <label>Description</label>
        <textarea type='' placeholder='Example: This home page is best for ecommerce business' onChange={(e) => setDes(e.target.value)}></textarea>
        <label for="file" className='btn-upload cen'>Upload as Zip</label>
        <input id="file" type='file' accept=".zip,.rar" onChange={handleFileChange}></input>
        <p>{selectedFileName}</p>

        <p style={(updatestatus === "Component Published Successfully") ? { color: "green" } : {color:"red"}}>{updatestatus}</p>

        <div style={{ float: "right" }}>
          <div className={`cust-btn ${isDisabled ? 'disabled' : ''}`} onClick={PublishComponent}>
            <p href="" class="bn1 " style={{ position: "absolute", right: "20px" }} >
              Publish
            </p>
          </div>
        </div>

      </form>
    </>
  )
}

export default PostInfo