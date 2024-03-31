import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './Profile.css'
import AccountInfo from './components/SubPages/AccountInfo'
import PostInfo from './components/SubPages/PostInfo'
import GetData from './components/GetData'
import axios from 'axios'
import Cookies from 'universal-cookie'
const Profile = () => {
    const [currentPage, setCurrentPage] = useState('acc'); // Initialize state with default page

    const handlePages = (pageType) => {
        setCurrentPage(pageType);
    }

    // Define a function to render the current page component based on the state
    const renderPage = () => {

        switch (currentPage) {
            case 'acc':
                return <AccountInfo />;
            case 'post':
                return <PostInfo />;
            default:
                return null;
        }

    }
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setimage] = useState("")
    useEffect(() => {
        async function fetchData() {
            try {
                let data = await GetData();
                setName(data.Name);
                setEmail(data.Email);
                setimage(data.Image);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    })

    const [selectedImage, setSelectedImage] = useState([]);
    const [previewImage, setPreviewImage] = useState("");
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Get the first file from the list
        setSelectedImage(file);

        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);


    };
let cookie=new Cookies()
    const changeimage = (e) => {
        e.preventDefault();
       e.target.disable="true"
        let user = cookie.get('user').token || ""
        let formdata = new FormData();
        formdata.append("image", selectedImage);
        formdata.append("user", user);
        axios.post('https://flexflow-server.onrender.com/auth/updatephoto', formdata).then(
            res=>{
                if(res.data==="success")
                setPreviewImage("")
            }
        )
        
    }


    return (
        <>
            <Navbar />

            <div id="user-main-container">
                <div className='profile-flex-container'>

                    <div className='img-bg-div'>
                        <button class="upload-image" onClick={changeimage} style={(previewImage)?{display:"block"}:{display:"none"}}>CHANGE IMAGE</button>
                        <img src={(previewImage) ? previewImage : image} alt="your profile"></img>
                        <div className='edit-image' for="lab7">
                            <label for="profile-picture-upload" id="lab7">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
                            </label>
                            <input id="profile-picture-upload" type="file" accept="image/png, image/jpeg" onChange={handleImageChange} />
                        </div>
                    </div>

                    <div className='bio'>
                        <ul>
                            <li>{name}</li>
                            <li>{email}</li>
                        </ul>
                    </div>

                </div>


                <div id="menu-container">
                    <ul>
                        <li id="acc" className={`tabs ${currentPage === 'acc' ? 'active' : ''}`} tabindex="0" onClick={() => handlePages('acc')}>Account</li>
                        <li id="post" className={`tabs ${currentPage === 'post' ? 'active' : ''}`} tabindex="0" onClick={() => handlePages('post')}>Post</li>
                    </ul>
                </div>

                <div id="page_components_main">{renderPage()}</div>

            </div>

        </>
    )
}

export default Profile