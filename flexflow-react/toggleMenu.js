import React from 'react'
import './style.css'
function toggleMenu() {
    let element = document.getElementById('clickbtn');
    element.classList.toggle('active');
    let mobnav = document.getElementById('Mob-Linkcontainer');
    if (mobnav) {
        mobnav.classList.toggle('nav-active');
    }
}

export default toggleMenu