import React, { useState } from 'react'
// import '../LogIn.css'
import '../../Home.css'
import ChangePassword from './sub-funtionalities/ChangePassword'
import PrimeOtp from './sub-funtionalities/PrimeOtp'
import axios from 'axios'
import Cookies from 'universal-cookie'

function LoginModule() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertEmail, setalertEmail] = useState("");
    const [alertPassword, setalertpassword] = useState("");
    const [alertAll, setalertAll] = useState("");
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

    const validation = (value, type) => {
        if (type === "email") {
            if (!emailRegex.test(value))
                setalertEmail("Invalid Email")
            else
                setalertEmail("")
        }

        if (type === "password") {
            if (!passwordRegex.test(value))
                setalertpassword("Wrong Password")
            else
                setalertpassword("")
        }

    }

    const Signin = (e) => {
        e.preventDefault();
        let cookie = new Cookies()
        if ((email && !alertEmail) && (password && !alertPassword) && !cookie.get('user')) {
            axios.post('https://flexflow-server.onrender.com/auth/login', {
                email: email,
                password: password
            }).then(res => {
                if (res.data.token) {
                    const cookies = new Cookies();
                    // Set the cookie with SameSite=None and Secure=true
                    const twoMonthsInMilliseconds = 60 * 60 * 24 * 30 * 2;
                    const expirationDate = new Date(Date.now() + twoMonthsInMilliseconds * 1000);
                    cookies.set('user', res.data, { sameSite: 'None', secure: true, expires: expirationDate });
                    window.location.reload();
                }
                else
                    setalertAll(res.data)
            })
        }

    }

    return (
        <>
            <form className="signform">
                <label>Email</label>
                <input type='text' placeholder='Email / SIH id' onChange={(e) => { setEmail(e.target.value); validation(e.target.value, "email") }}></input>
                <h5>{alertEmail}</h5>
                <label>Password</label>
                <input type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value); validation(e.target.value, "password") }}></input>
                <h5>{alertPassword}</h5>
                <div className="cust-btn cen" onClick={Signin}>
                    <p href="" class="bn1" style={{marginTop:"10px"}}>
                        Log In
                    </p>
                </div>
                <h5>{alertAll}</h5>
            </form>
        </>
    )
}



/////====================================================///////////////
/////====================================================///////////////
//  SIGNUP
/////====================================================///////////////
/////====================================================///////////////


function SignupModule() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [alertName, setalertName] = useState("");
    const [alertEmail, setalertEmail] = useState("");
    const [alertPassword, setalertpassword] = useState("");
    const [alertConfirmPass, setalertConfirmPass] = useState("");
    const [alertnormal, setalertNormal] = useState("");
    const [encryptionKeyOTP, setencryptionKeyOtp] = useState("");
    function encrypt(text, key) {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            encryptedText += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return btoa(encryptedText); // Encode the encrypted text in base64
    }

    function randomImage(){
        let eyes = ["glasses", "cute", "closed2", "tearDrop", "love", "closed", "stars", "sad"]
        let mouth = ["cute", "kissHeart", "pissed", "smileLol", "smileTeeth", "tongueOut", "plain", "sad"]
        let color = ["b6e3f4", "c0aede", "d1d4f9", "ffdfbf", "ffd5dc"]
    
        function getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
    
        // Randomly select one value from each array
        let randomEyes = getRandomElement(eyes);
        let randomMouth = getRandomElement(mouth);
        let randomColor = getRandomElement(color);
        let url=`https://api.dicebear.com/7.x/fun-emoji/svg?eyes=${randomEyes}&backgroundColor=${randomColor}&mouth=${randomMouth}`;
        return url; 
    }

    let VerifyAndAdd = async () => {
        try {
            let image=randomImage();
            const res = await axios.post("https://flexflow-server.onrender.com/auth/OtpGeneration", {
                name: name,
                email: email,
                password: password,
                image:image
            });

            if (res.data[0] === "success") {
                const realOtp = res.data[1]; // Replace with your actual data structure
                const encryptionKey = res.data[2]; // Replace with your actual data structure
                const encryptedOTP = encrypt(realOtp, encryptionKey);
                setencryptionKeyOtp(encryptionKey)
                // Store the real OTP and the expiration time in sessionStorage
                const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes in milliseconds
                sessionStorage.setItem('encryptedOTP', encryptedOTP);
                sessionStorage.setItem('otpExpiration', expirationTime);
                sessionStorage.setItem('try', 0);
                openOTPfun();
                // return "success";
            } else if (res.data[0] === "user Exist") {
                setalertEmail("Email already Exist")
            }

        } catch (error) {
            setalertNormal("Somthing went wrong, Please try after Sometime")

            console.error("Error:", error);
            return false;
        }
    };

    // checkAndRemoveExpiredOTP()

    const [openOTP, setOpenOtp] = useState(false)
    const openOTPfun = () => {
        document.getElementById('vis').style.display = "none";
        document.querySelector('.signform').style.display = "none";
        document.getElementById('vis2').style.display = "block";
        setOpenOtp(true);
    }


    let VerificationMail = (e) => {
        e.preventDefault();
        if ((name && !alertName) && (email && !alertEmail) && (password && !alertPassword) && (confirmPass && !alertConfirmPass)) {
         VerifyAndAdd()

        }
    }

    //================= velidation==============//  
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    function validation(value, type) {

        //==============NAME===============//
        if (type === "name") {
            if (value.length < 1)
                setalertName("Name is Empty")
            else {
                setalertName("")
            }
        }

        //==================EMAIL==================//
        if (type === "email") {
            if (!emailRegex.test(value)) {
                setalertEmail("Invalid Email")
            }
            else
                setalertEmail("")
        }


        //=================PASSWORD==================//
        if (type === "pass") {
            if (!passwordRegex.test(value)) {
                setalertpassword("Password should 8 character long, Uppercase and special character")
            }
            else
                setalertpassword("")
        }


        //====================CONFIRM PASSWORD================//
        if (!alertEmail && type === "confpass") {
            if (password !== value) {
                setalertConfirmPass("Password not match")
            }
            else
                setalertConfirmPass("")
        }

    }

    return (
        <>
            <form className="signform">
                <label>Name</label>
                <input type='text' placeholder='Name' onChange={(e) => { setName(e.target.value); validation(e.target.value, "name") }}></input>
                <h5>{alertName}</h5>
                <label>Email</label>
                <input type='text' placeholder='Email / SIH id' onChange={(e) => { setEmail(e.target.value); validation(e.target.value, "email") }}></input>
                <h5>{alertEmail}</h5>
                <label>Password</label>
                <input type='text' placeholder='Password' onChange={(e) => { setPassword(e.target.value); validation(e.target.value, "pass") }}></input>
                <h5>{alertPassword}</h5>
                <label> Confirm Password</label>
                <input type='password' placeholder='Confirm Password' onChange={(e) => { setconfirmPass(e.target.value); validation(e.target.value, "confpass") }}></input>
                <h5>{alertConfirmPass}</h5>
                <div className="cust-btn cen"  onClick={VerificationMail}>
                    <p href="" class="bn1" style={{marginTop:"10px"}}>
                        Sign up
                    </p>
                </div>
                <h5>{alertnormal}</h5>
            </form>
            <div id="vis2">
                <p>One time Code sent to your Email id</p>
                <p>Please Enter Code(Valid for 5 mins)</p>
            </div>
            {openOTP ? <PrimeOtp encrypt={encryptionKeyOTP} /> : null}
        </>
    )
}





/////====================================================///////////////
/////====================================================///////////////
//  FORGET PASSWORD
/////====================================================///////////////
/////====================================================///////////////




const Forgetpass = () => {

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [openChangePassword, setopenChangePassword] = useState(false);
    const [email, setemail] = useState("")
    const [alert, setAlert] = useState("")
    const [openOTP, setOpenOtp] = useState(false)
    const [encryptionKeyOtp, setencryptionKeyOtp] = useState("")
    //================= Auto Jump to next Box =================//

    function decrypt(encryptedText, key) {
        encryptedText = atob(encryptedText); // Decode the base64-encoded encrypted text
        let decryptedText = '';
        for (let i = 0; i < encryptedText.length; i++) {
            decryptedText += String.fromCharCode(encryptedText.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return decryptedText;
    }

    const handleChange = (index, value) => {

        const newOtp = [...otp];
        newOtp[index] = value;
        // ===========if OTP is correct=================//
        if (otp[4]) {


            const encryptedOTP = sessionStorage.encryptedOTP;
            const otpExpiration = sessionStorage.getItem('otpExpiration');
            const maxtry = parseInt(sessionStorage.try);
            let usertypedOTP = newOtp.join('');
            if (!encryptedOTP || !otpExpiration || maxtry >= 5) {
                sessionStorage.removeItem('encryptedOTP');
                sessionStorage.removeItem('otpExpiration');
                sessionStorage.removeItem('try');
                window.location.reload();
            }

            // Apply loged session
            const decryptedOTP = decrypt(encryptedOTP, encryptionKeyOtp);
            if (decryptedOTP === usertypedOTP) {
                setopenChangePassword(true);

            }

            else {
                newOtp[0] = ''; newOtp[1] = ''; newOtp[2] = ''; newOtp[3] = ''; newOtp[4] = ''; newOtp[5] = '';
                // (sessionStorage.try)?
                let tryGet = parseInt(sessionStorage.try);
                let tryCount = tryGet + 1;
                sessionStorage.setItem('try', tryCount);
            }


        }

        // If the current input has a value, move focus to the next input
        if (value !== '' && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }

        setOtp(newOtp);
    };




    //===============For BackSpace=========================//

    const handleBackspace = (index) => {
        const newOtp = [...otp];
        newOtp[index] = '';

        // If the current input is empty, move focus to the previous input
        if (index > 0 && newOtp[index - 1] !== '') {
            document.getElementById(`otp-input-${index - 1}`).focus();
        } else {
            // Otherwise, move focus to the current input
            document.getElementById(`otp-input-${index}`).focus();
        }

        setOtp(newOtp);
    };




    function encrypt(text, key) {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            encryptedText += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return btoa(encryptedText); // Encode the encrypted text in base64
    }

    const cookie = new Cookies()
    const otpsend = async (e, buttonElement) => {
        e.preventDefault();
        buttonElement.disabled = true;
        const credential = cookie.get('user') || null

        await axios.post('https://flexflow-server.onrender.com/auth/checkuser', {
            email: email,
            credential: credential,
        }).then(res => {
            if (res.data[0] === "success") {

                const realOtp = res.data[1]; // Replace with your actual data structure
                const encryptionKey = res.data[2]; // Replace with your actual data structure
                const actualemail = res.data[3];
                setemail(actualemail) // Replace with your actual data structure
                setencryptionKeyOtp(encryptionKey)
                const encryptedOTP = encrypt(realOtp, encryptionKey);
                const expirationTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes in milliseconds
                sessionStorage.setItem('encryptedOTP', encryptedOTP);
                sessionStorage.setItem('otpExpiration', expirationTime);
                sessionStorage.setItem('try', 0);

                setOpenOtp(true)
                setAlert("Enter OTP which sent on Email (Code valid for 5 mins)")
                buttonElement.classList.add('dz1');
            }
            else {
                buttonElement.disabled = false;
                setAlert("Email is not in our database")
            }
        })


    }


    return (
        <>
            <form className="signform">
                <label>Email</label>
                <input type='text' placeholder='Email / SIH id' onChange={(e) => setemail(e.target.value)}></input>
                <div className="cust-btn cen" onClick={(e) => otpsend(e, e.target)}>
                    <p href="" class="bn1" style={{marginTop:"10px"}}>
                    Generate Code
                    </p>
                </div>
                <p>{alert}</p>
            </form>

            {openOTP ? <div id="otp-container">
                {otp.map((digit, index) => (
                    <React.Fragment key={index}>
                        <input
                            id={`otp-input-${index}`}
                            type="number"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyUp={(e) => {

                                if (e.key === 'Backspace') {
                                    e.preventDefault();
                                    handleBackspace(index);
                                }
                            }}
                        />
                        {index === 2 && <div className="gap" />}
                    </React.Fragment>
                ))}
            </div>

                : null}
            <br />
            {openChangePassword ? <ChangePassword mail={email} /> : null}
            { }
        </>
    )
}

export { LoginModule, SignupModule, Forgetpass }