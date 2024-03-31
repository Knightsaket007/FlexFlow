import axios from 'axios';
// import '../../LogIn.css'

import React, { useState } from 'react'

function ChangePassword(mail) {
    let email = mail.mail
    const [PasswordChangeStatus, setPasswordChangeStatus] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")

    const changeStatus = async(e) => {
        e.preventDefault();
        if ((password && confirmPass && !PasswordChangeStatus)) {
            //BAckend code with change password status
              
            await axios.post('https://flexflow-server.onrender.com/auth/updatePassword', {
                email: email,
                password: password
            }).then(res => {
                if (res.data === "success") {
                    setPasswordChangeStatus("Password Changed Successfully!")
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
                else
                    setPasswordChangeStatus("Please try later (server error)")
            })
        }

    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;
    const checkmatch = (value, type) => {
        if (type === 'pass') {
            if (!passwordRegex.test(value))
                setPasswordChangeStatus("Password should 8 character long, Uppercase and special character")
            else
                setPasswordChangeStatus("")
        }

        else
            if (value !== password)
                setPasswordChangeStatus("Password not match")
            else
                setPasswordChangeStatus("")
    }

    return (
        <>
            <form className="signform">
                <label>New Password</label>
                <input type='text' placeholder='New Password' onChange={e => { setPassword(e.target.value); checkmatch(e.target.value, "pass") }}></input>
                <label>Confirm Password</label>
                <input type='password' placeholder='Confirm Password' onChange={e => { setconfirmPass(e.target.value); checkmatch(e.target.value, "conpass"); }}></input><br/>

                <div className="cust-btn cen" onClick={changeStatus}>
                    <p href="" class="bn1" style={{marginTop:"10px"}}>
                   Update Password
                    </p>
                </div>
            </form>

            <h4 style={{ fontSize: "13px", color: `${PasswordChangeStatus === "Password Changed Successfully!" ? "rgba(72, 221, 116, 0.589)" : "orangered"}` }}>{PasswordChangeStatus}</h4>
        </>
    )
}

export default ChangePassword