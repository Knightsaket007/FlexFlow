import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePop.css';
import Cookies from 'universal-cookie';

const ProfilePop = ({ open, children, onClose }) => {
  const popRef = useRef();
  
  const handleClickOutside = (event) => {
    if (popRef.current && !popRef.current.contains(event.target)) {
      onClose();
    }
  };


  function logout(e) {
    e.preventDefault();

    let cookies = new Cookies()
    window.location.reload();
    cookies.remove('user', { path: '/' });
    localStorage.removeItem('cart');
    localStorage.removeItem('copyofcart');
    window.location.href='/';
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;





  return (
    <>
      <div ref={popRef} className='prof-container'>
        <ul>
        <Link to="/profile"> <li>Your Profile</li></Link>
          <li onClick={logout}>Log out</li>
        </ul>
        {children}
      </div>
    </>
  );
};

export default ProfilePop;
