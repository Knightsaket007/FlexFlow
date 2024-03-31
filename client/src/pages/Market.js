import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import'./Market.css';
import axios from 'axios'
function Market() {
    // const[image, setimage]=useState("");
    // const[title, settitle]=useState("");
    // const[des, setDec]=useState("");
    // const[path, setpath]=useState("");
    const [alldata, setalldata] = useState([]);
    useEffect(() => {

        axios.get('https://flexflow-server.onrender.com/comp/getComponents').then(res => {
            if (res.data[0] === "success") {
                setalldata(res.data[1])
            }
        })
    }, [])

    function downloadName(url) {
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        const nameWithoutExtension = filename.split('.')[0];
        return nameWithoutExtension;
    }

    const [openDec, setOpenDec] = useState(null);

    return (
        <>
            <Navbar />

            <section class="furniture_section layout_padding" style={{marginTop:"-30px"}}>
                <div class="container">
                    <div class="heading_container">
                        <h4>
                            Component Market (Free to download)
                        </h4>
                  
                    </div>
                    <div class="row">

                        {alldata.map((item, index) => (
                            <div class="col-md-6 col-lg-4">
                                <div class="box">
                                    <div class="img-box" style={{ width: "100%" }}>
                                        <img src={item.Image} alt="" style={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div class="detail-box">
                                        <h5 class="component-title" onClick={() => setOpenDec(openDec === index ? null : index)}>
                                            {item.Component_Name}
                                        </h5>
                                        <div class="price_box" >
                                         <div class="container-desc"><h6 class="price_heading">{openDec === index ? item.Description : ""}</h6>
                                         </div>
                                            <a href={`http://localhost:5000/${item.Zip}`} download={downloadName(item.Zip)}>
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Market