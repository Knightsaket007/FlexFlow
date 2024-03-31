import React, { useState } from 'react';
import './LogIn.css';
import { LoginModule, SignupModule, Forgetpass } from './functionailty/LogType';

const LogIn = ({ open, children, onClose, openForget}) => {
  const [clickAuth, setclickAuth] = useState(true);
  const [accDesc, setaccDesc] = useState("Not have an Account");
  const [clickchange, setClickchange] = useState("Create new");
  const [forget, setforget] = useState(openForget);

  const handleAuthToggle = () => {
    setclickAuth((prevClickAuth) => !prevClickAuth);

    if (clickAuth) {
      setaccDesc("Already have an account");
      setClickchange("Log In");
    } else {
      setaccDesc("Not have an Account");
      setClickchange("Create new");
    }
  };

  let content;
  if (forget) {
    content = <Forgetpass />;
  }
  else if (clickAuth) {
    content = <LoginModule />;
  } else {
    content = <SignupModule />;
  }

  if (!open) return "";


  return (
    <>
      <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" style={{ stroke: "white", position: "fixed", top: "35px", right: "20px", zIndex: "4500", cursor: "pointer" }} width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>

      <div id="big-dull-container"></div>

      <div id="main-log-container">
        {content}

        <div id='vis'>
          <p  style={{ display: forget ? 'none' : 'block' }}>{accDesc} <span onClick={handleAuthToggle}> {clickchange}</span></p>
          <p  style={{ display: forget ? 'none' : 'block' }}><span onClick={() => setforget(true)}>Forget Password</span></p>
        </div>

      </div>
    </>
  );
};

export default LogIn;
