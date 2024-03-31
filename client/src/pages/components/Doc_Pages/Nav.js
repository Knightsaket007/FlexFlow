import React, { useEffect } from 'react'
import './DocPages.css'
import 'flexflow-react/style.css';
import Script from 'flexflow-react/Script';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
function Nav() {
    Script()

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const togg = () => {
        let element = document.getElementById('clickbtn');
        element.classList.toggle('act');
        let mobnav = document.getElementById('Mob-Linkcontainer');
        if (mobnav) {
            mobnav.classList.toggle('nav-act');
        }
    }
    const togg2 = () => {
        let element = document.getElementById('clickbtn2');
        element.classList.toggle('act2');
        let mobnav = document.getElementById('Mob-Linkcontainer2');
        if (mobnav) {
            mobnav.classList.toggle('nav-act2');
        }
    }
    return (
        <>
            <h2>Navbar</h2>
            <br />
            <h6>Light Navbar</h6>
            <div className='btn-container'>

                <nav class="bg-white w-per-100 cust-h-45 rel cen-flx-v  cust-t-0 cust-z-ind-200">

                    <div class="cen-abs-v upcase cust-pd-l-10 txt-wt-600 cust-txt-sz-19 pointer md lg xl">Navbar</div>
                    {/* <!-- Mobile Screen --> */}
                    <div class="cen-abs upcase cust-pd-lr-8 txt-wt-600 cust-txt-sz-19 pointer sm ">Navbar</div>
                    {/* <!-- Mobile Screen End --> */}

                    <div class="hamburger-container black sm cust-mg-l-10" id="clickbtn" onClick={togg}>
                        <div class="hamburger-line black" ></div>
                    </div>

                    <div class="cen md lg xl flx cen-flx-v">
                        <ul class="no-style li-inline cust-pd-l-0 cen-abs">
                            <li class="cust-mg-r-25 pointer"><a>Home</a></li>
                            <li class="cust-mg-r-25 pointer"><a>Contact</a></li>
                            <li class="cust-mg-r-25 pointer"><a>About</a></li>
                            <li class="cust-mg-r-25 pointer"><a>Pricing</a></li>
                        </ul>
                    </div>
                    {/* <!--------- BELL --------------> */}
                    <div class="abs cust-r-60 pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                    </div>

                    {/* <!--------- PROFILE --------------> */}
                    <div class="bg-berry br-per-50 cust-h-30 cust-w-30 abs cust-r-15 cen-flx-h cen-flx-v pointer">
                        <img class="cust-w-20 " src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg==" alt="profile" />
                    </div>
                </nav>

                {/* <!-- Mobile Screen (Links Container) --> */}

                <div class=" cust-per-50 h-per-100 bg-azure cust-z-ind-200" id='Mob-Linkcontainer' >
                    <div class="cen sm">
                        <ul class=" no-style  cust-pd-l-0 cust-mg-l--50 ">
                            <li class="cust-mg-b-15 pointer "><a>Home</a></li>
                            <li class="cust-mg-b-15 pointer"><a>Contact</a></li>
                            <li class="cust-mg-b-15 pointer"><a>About</a></li>
                            <li class="cust-mg-b-15 pointer"><a>Pricing</a></li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className='relaive-div'>
                <h6>Dark Navbar</h6>
                <div className=' btn-container'>
                    <nav class="bg-dark clr-white w-per-100 cust-h-45 rel cen-flx-v  cust-t-0 cust-z-ind-200">

                        <div class="cen-abs-v upcase cust-pd-l-10 txt-wt-600 cust-txt-sz-19 pointer md lg xl">Navbar</div>
                        {/* <!-- Mobile Screen --> */}
                        <div class="cen-abs  upcase cust-pd-lr-8 txt-wt-600 cust-txt-sz-19 pointer sm ">Navbar</div>
                        {/* <!-- Mobile Screen End --> */}

                        <div class="hamburger-container2 white sm cust-mg-l-10" id="clickbtn2" onClick={togg2}>
                            <div class="hamburger-line2 white" ></div>
                        </div>


                        <div class="cen md lg xl flx cen-flx-v">
                            <ul class="no-style li-inline cust-pd-l-0 cen-abs">
                                <li class="cust-mg-r-25 pointer"><a>Home</a></li>
                                <li class="cust-mg-r-25 pointer"><a>Contact</a></li>
                                <li class="cust-mg-r-25 pointer"><a>About</a></li>
                                <li class="cust-mg-r-25 pointer"><a>Pricing</a></li>
                            </ul>
                        </div>
                        {/* <!--------- BELL --------------> */}
                        <div class="abs cust-r-60 pointer clr-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                        </div>

                        {/* <!--------- PROFILE --------------> */}
                        <div class="bg-berry br-per-50 cust-h-30 cust-w-30 abs cust-r-15 cen-flx-h cen-flx-v pointer">
                            <img class="cust-w-20 " src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg==" alt="profile" />
                        </div>
                    </nav>

                    {/* <!-- Mobile Screen (Links Container) --> */}

                    <div class=" cust-per-50 h-per-100 bg-dark cust-z-ind-200" id='Mob-Linkcontainer2' >
                        <div class="cen sm">
                            <ul class=" no-style  cust-pd-l-0 cust-mg-l--50 clr-white">
                                <li class="cust-mg-b-15 pointer "><a>Home</a></li>
                                <li class="cust-mg-b-15 pointer"><a>Contact</a></li>
                                <li class="cust-mg-b-15 pointer"><a>About</a></li>
                                <li class="cust-mg-b-15 pointer"><a>Pricing</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className='relaive-div'>
                <h6>Code for Light Navbar</h6>
                <pre>
                    <code className='language-html'>
                         {`
 <nav class="bg-white w-per-100 cust-h-45 rel cen-flx-v fx cust-t-50 cust-z-ind-200 clr-dark">

     <div class="cen-abs-v upcase cust-pd-l-10 txt-wt-600 cust-txt-sz-19 pointer md lg xl ">Navbar</div>
     <!-- Mobile Screen -->
     <div class="cen-abs upcase cust-pd-lr-8 txt-wt-600 cust-txt-sz-19 pointer sm ">Navbar</div>
     <!-- Mobile Screen End -->

     <div class="hamburger-container black sm cust-mg-l-10" id="clickbtn" onclick="toggleMenu()">
         <div class="hamburger-line black"></div>
     </div>

     <div class="cen md lg xl">
         <ul class=" no-style li-inline cust-pd-l-0">
             <li class="cust-mg-r-25 pointer"><a>Home</a></li>
             <li class="cust-mg-r-25 pointer"><a>Contact</a></li>
             <li class="cust-mg-r-25 pointer"><a>About</a></li>
             <li class="cust-mg-r-25 pointer"><a>Pricing</a></li>
         </ul>
     </div>

     <!--------- BELL -------------->
     <div class="abs cust-r-60 pointer ">
         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-bell">
             <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
             <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
         </svg>
     </div>
     <!--------- Profile -------------->
     <div class="bg-berry br-per-50 cust-h-30 cust-w-30 abs cust-r-15 cen-flx-h cen-flx-v pointer">
         <img class="cust-w-20 "
             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg==">
     </div>
</nav>

                     
    <!-- Mobile Screen (Links Container) -->

    <div class=" cust-per-50 h-per-100 bg-azure cust-z-ind-200" id='Mob-Linkcontainer' >
        <div class="cen sm">
            <ul class=" no-style  cust-pd-l-0 cust-mg-l--50">
                <li class="cust-mg-b-15 pointer"><a>Home</a></li>
                <li class="cust-mg-b-15 pointer"><a>Contact</a></li>
                <li class="cust-mg-b-15 pointer"><a>About</a></li>
                <li class="cust-mg-b-15 pointer"><a>Pricing</a></li>
            </ul>
        </div>
    </div>
                     
                         `}
                    </code>
                </pre>

                <br/>
                <h6>Code for Light Navbar</h6>
                <pre>
                    <code className='language-html'>
                         {`
 <nav class="bg-white clr-white w-per-100 cust-h-45 rel cen-flx-v fx cust-t-50 cust-z-ind-200 clr-white">

     <div class="cen-abs-v upcase cust-pd-l-10 txt-wt-600 cust-txt-sz-19 pointer md lg xl ">Navbar</div>
     <!-- Mobile Screen -->
     <div class="cen-abs upcase cust-pd-lr-8 txt-wt-600 cust-txt-sz-19 pointer sm ">Navbar</div>
     <!-- Mobile Screen End -->

     <div class="hamburger-container white sm cust-mg-l-10" id="clickbtn" onclick="toggleMenu()">
         <div class="hamburger-line white"></div>
     </div>

     <div class="cen md lg xl">
         <ul class=" no-style li-inline cust-pd-l-0">
             <li class="cust-mg-r-25 pointer"><a>Home</a></li>
             <li class="cust-mg-r-25 pointer"><a>Contact</a></li>
             <li class="cust-mg-r-25 pointer"><a>About</a></li>
             <li class="cust-mg-r-25 pointer"><a>Pricing</a></li>
         </ul>
     </div>

     <!--------- BELL -------------->
     <div class="abs cust-r-60 pointer clr-white">
         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-bell">
             <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
             <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
         </svg>
     </div>
     <!--------- Profile -------------->
     <div class="bg-berry br-per-50 cust-h-30 cust-w-30 abs cust-r-15 cen-flx-h cen-flx-v pointer">
         <img class="cust-w-20 "
             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg==">
     </div>
</nav>

                     
    <!-- Mobile Screen (Links Container) -->

    <div class=" cust-per-50 h-per-100 bg-dark cust-z-ind-200" id='Mob-Linkcontainer' >
        <div class="cen sm">
            <ul class=" no-style  cust-pd-l-0 cust-mg-l--50 clr-white">
                <li class="cust-mg-b-15 pointer"><a>Home</a></li>
                <li class="cust-mg-b-15 pointer"><a>Contact</a></li>
                <li class="cust-mg-b-15 pointer"><a>About</a></li>
                <li class="cust-mg-b-15 pointer"><a>Pricing</a></li>
            </ul>
        </div>
    </div>
                     
                         `}
                    </code>
                </pre>


            </div>
<br/>

<p className='p-doc'>for JSX import </p>
<pre>
    <code className='language-javascript'>
         {`        import toggleMenu from 'flexflow-react/toggleMenu';
         //     use call from hamburger button
         <div class="hamburger-container"  onclick={toggleMenu}></div>

`}
    </code>
</pre>


        </>
    )
}

export default Nav