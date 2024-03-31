import React, { useState } from 'react'
// import '../../LogIn.css'
import axios from 'axios';
import Cookies from 'universal-cookie';

const PrimeOtp = ({ encrypt }) => {

    const [otp, setOtp] = useState(['', '', '', '', '', '']);


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
        if (index === 5 && value !== '') {
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
            const decryptedOTP = decrypt(encryptedOTP, encrypt);
            if (decryptedOTP === usertypedOTP) {
                const run = async () => {
                    try {
                        await axios.post('https://flexflow-server.onrender.com/auth/insertUser').then(res => {
                            const cookies = new Cookies();
                            // Set the cookie with SameSite=None and Secure=true
                            const twoMonthsInMilliseconds = 60 * 60 * 24 * 30 * 2;
                            const expirationDate = new Date(Date.now() + twoMonthsInMilliseconds * 1000);
                            cookies.set('user', res.data, { sameSite: 'None', secure: true, expires: expirationDate });
                            sessionStorage.removeItem('encryptedOTP');
                            sessionStorage.removeItem('otpExpiration');
                            sessionStorage.removeItem('try');
                            window.location.reload();
                        });
                    } catch (error) {
                        console.error("Error:", error);
                    }
                }

                run();
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

    return (
        <>

            <div id="otp-container">
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
        </>
    )
}

export default PrimeOtp