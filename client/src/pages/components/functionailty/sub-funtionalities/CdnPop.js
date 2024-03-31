import React, { useEffect } from 'react'
import '../../LogIn.css'
const Cdn = ({ open, children, onClose, onRender }) => {
    useEffect(() => {
        // Call the onRender callback function after content is rendered
        onRender();
    }, [open, onRender]);
    if (!open) return "";
    return (
        <>
            <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" style={{ stroke: "white", position: "fixed", top: "35px", right: "20px", zIndex: "4500", cursor: "pointer" }} width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg>

            <div id="big-dull-container"></div>

            <div id="main-log-container">
                {children}
            </div>

        </>
    )
}

export default Cdn