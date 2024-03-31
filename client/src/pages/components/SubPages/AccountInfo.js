import React, { useEffect,useState } from 'react'
import './AccountInfo.css'
import Login from '../Login'
import axios from 'axios';
import Cookies from 'universal-cookie';
import GetData from '../GetData';
function AccountInfo() {
  // const [loggedIn, setLoggedIn] = useState(false);
//  let initalData={Name: '', Email: '', Github: '', Linkedin: '', Instagram: ''};


  const [isOpenLog, setIsOpenLog] = useState(false);
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [Linkedin, setLinkedin] = useState("");
  const [Insta, setInsta] = useState("");
  const [updatestatus, setupdatestatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(()=>{
    async function fetchData() {
      try {
           let data = await GetData();
           setName(data.Name);
           setGithub(data.Github);
           setLinkedin(data.Linkedin);
           setInsta(data.Instagram);
          console.log('Data received:', data);
          console.log('Data name:', data.Name);
          // Do something with the data
      } catch (error) {
          console.error('Error fetching data:', error);
          // Handle the error
      }
  }
  fetchData();
  },[])
 

  const handleProfileButtonClick = (e) => {
    e.preventDefault();
    console.log("hu ha")
    // if (!isOpenLog)
    setIsOpenLog(true);
  };

  let cookie = new  Cookies()


  const UpdateUser = () => {
    if (name) {
      setupdatestatus("")
      if (!isDisabled) {
        setIsDisabled(true);
        let user = cookie.get('user').token || ""
        console.log(user, "user")
        axios.post('https://flexflow-server.onrender.com/auth/updateuser', {
          name: name,
          github: github,
          Linkedin: Linkedin,
          Insta: Insta,
          user: user
        }).then(res => {
          if (res.data === 'success') {
            setupdatestatus("Update Changes Successfully")
          }
        })
      }
    }
    else {
      setupdatestatus("Name Field should not be empty")
    }
  }

  return (
    <>

      <h4 className="h4Head"><u>Personal Details:</u></h4>

      <form className="InfoChanges_form">
        <label>Name</label>
        <input type='text' placeholder='Name' style={{ marginBottom: "10px" }} onChange={(e) => setName(e.target.value)} value={name}></input>

        <div className="cust-btn cen" onClick={handleProfileButtonClick} >
          <p href="" class="bn2 " >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-ellipsis"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M8 12h.01" /><path d="M12 12h.01" /><path d="M16 12h.01" /></svg> Change Password
          </p>
        </div>

      </form>


      <h4 className="h4Head"><u>Links:</u></h4>

      <form className="InfoChanges_form">


        <label>Github</label>
        <input type='url' placeholder='Github URL' onChange={(e) => setGithub(e.target.value)} value={github}></input>
        <label>LinkedIn</label>
        <input type='url' placeholder='LinkedIn URL' onChange={(e) => setLinkedin(e.target.value)} value={Linkedin}></input>
        <label>Instagram</label>
        <input type='url' placeholder='Instagram URL' onChange={(e) => setInsta(e.target.value)} value={Insta}></input>
      </form>


      <div style={{ float: "right" }}>
        <div className={`cust-btn ${isDisabled ? 'disabled' : ''}`} onClick={UpdateUser}>
          <p href="" class="bn1 " style={{ position: "absolute", right: "20px" }} >
            Save Changes
          </p>
        </div>
      </div>

      <p className='update-status' style={(updatestatus === "Name Field should not be empty") ? { color: "red" } : {}}>{updatestatus}</p>

      <Login open={isOpenLog} onClose={() => setIsOpenLog(false)} openForget={true} />
    </>
  )
}

export default AccountInfo