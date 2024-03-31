import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom/dist'
import axios from 'axios';
import Cookies from 'universal-cookie';
import LogIn from './Login';
import ProfilePop from './functionailty/ProfilePop';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLog, setIsOpenLog] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [image, setimage] = useState(false);
    const [forDoc, setForDoc] = useState(false);
    const profileButtonRef = useRef();

    const handleProfileButtonClick = (event) => {
        if (!loggedIn)
            setIsOpenLog(true)
        else {
            event.stopPropagation(); // Prevent the click event from reaching document click event
            setIsOpen(!isOpen);
        }
    };


    const handleClosePopup = () => {
        setIsOpen(false);
    };

    const location = useLocation();
    let cookies = new Cookies()
    useEffect(() => {

        const checkLoggedIn = async () => {
            try {
                const userCookie = cookies.get('user');
                await axios.post('https://flexflow-server.onrender.com/auth/check-auth', {
                    userCookie
                }).then(res => {
                    if (res.data[0] === 'success') {
                        setimage(res.data[1]);
                        setLoggedIn(true);

                    }
                });
            } catch (error) {
                // If the request fails, the user is not logged in
                setLoggedIn(false);
            }
        };

        checkLoggedIn();


        if (location.pathname === "/doc") {
            setForDoc(true);
        } else {
            setForDoc(false);
        }


        document.addEventListener('click', handleClosePopup);

        return () => {
            document.removeEventListener('click', handleClosePopup);
        };
    }, []);



    //==================== Random Expression for user Icon =============//


    return (
        <>

            <LogIn open={isOpenLog} onClose={() => setIsOpenLog(false)} />
            <ProfilePop open={isOpen} onClose={() => setIsOpen(false)} />


            <header class="header_section long_section px-0" style={(forDoc)?{ position:"sticky", top:"0px" }:{}}>
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                    <Link class="navbar-brand" to="/">
                        <span>
                            FlexFlow
                        </span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class=""> </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul class="navbar-nav ">
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/doc">Documentation <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/playground" target="_blank"> PlayGround</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="https://www.npmjs.com/package/flexflow-style" target="_blank">Package</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/market">Market</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="quote_btn-container" ref={profileButtonRef} onClick={handleProfileButtonClick} style={!loggedIn ? { boxShadow: "none" } : {}}>
                            {/* <Link to="/login"> */}


                            {loggedIn ?
                                <div id="profile-div">
                                    <img
                                        src={image}
                                        alt="avatar"
                                    />
                                </div>

                                :
                                <span>
                                    Login&ensp;
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </span>

                            }

                            {/* </Link> */}
                        </div>
                    </div>
                </nav>
            </header>


        </>

    )
}

export default Navbar