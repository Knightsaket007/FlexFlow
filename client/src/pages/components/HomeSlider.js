import React, { useEffect, useState } from 'react'
import Cdn from './functionailty/sub-funtionalities/CdnPop';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
function HomeSlider() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const RAR_file_Url = "https://flexflow-server.onrender.com/FLexFlow1_0_4.rar"
  function downloadFile() {
    // e.preventDefault();
    console.log("Downloading file...");
    const atag = document.createElement('a');
    atag.href = RAR_file_Url;
    atag.setAttribute('download', "FLexFlow1_0_4.rar")
    document.body.appendChild(atag)
    atag.click();
    atag.remove();
  }

  const [isOpenLog, setIsOpenLog] = useState(false);
  const cdnPop = () => {
    Prism.highlightAll();
    setIsOpenLog(true);
  }

  const handleCdnContentRender = () => {
    Prism.highlightAll();
  };

  return (
    <>
      <Cdn open={isOpenLog} onClose={() => setIsOpenLog(false)} onRender={handleCdnContentRender}>
        <pre>

          <code className="language-html">
            {`<link rel="stylesheet" href="https://flexflow.pages.dev/style.css">
\n<script src="https://flexflow.pages.dev/script.js" async></script>`}
          </code>
        </pre>
      </Cdn>

      <section class="slider_section long_section">
        <div id="customCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container ">
                <div class="row">
                  <div class="col-md-5">
                    <div class="detail-box">
                      <h1>
                        For All Your <br />
                        Development Needs
                      </h1>
                      <p>
                        Easy, Flexible and dynamic styling and built in components for Html and JSX.
                      </p>
                      <div class="btn-box">
                        <input type='button' onClick={downloadFile} className='btn1' style={{ height: "45px", marginTop: "4px", padding: "0 45px", outline: "none" }} value="Download"></input>

                        <a class="btn2" onClick={cdnPop}>
                          CDN
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7" >
                    <div class="img-box" >
                      <img src="../../images/Code2.png" alt=""  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-5">
                    <div class="detail-box">
                      <h1>
                        Run Faster and<br />
                        no sub dependency
                      </h1>
                      <p>
                        The functions are optimised and act as thread to run multiple style is less fluctuation.there custom class make user to apply style on element without pointing elements in seprate file.
                      </p>

                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="img-box">
                      <img src="../../images/Code3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-5">
                    <div class="detail-box">
                      <h1>
                        Available components<br />
                        reduces basic component code
                      </h1>
                      <p>
                        There are many pre built component to use and reduces extra coding time.
                      </p>

                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="img-box">
                      <img src="../../images/Code1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li data-target="#customCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#customCarousel" data-slide-to="1"></li>
            <li data-target="#customCarousel" data-slide-to="2"></li>
          </ol>
        </div>
      </section>

    </>
  )
}

export default HomeSlider