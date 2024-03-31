import React from 'react'
import './Home.css'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom/dist'
import HomeSlider from './components/HomeSlider';
function Home() {


  return (
    <div class="hero_area">
      {/*=================== Navbar ================*/}
      <Navbar />

      {/* ===================Slider ====================*/}
      {/* ===================Slider ====================*/}
    <HomeSlider/>
      {/* ==============Furniture ==================*/}

      <section class="furniture_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>
              Components
            </h2>
            <p>
              To learn more, check documentation
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="../../images/Nav.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    brown Chair Design
                  </h5>
                  <div class="Responsive Navbar">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="images/btn.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Buttons
                  </h5>
                  <div class="price_box">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="images/clr.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Best Colors
                  </h5>

                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="images/toggle.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                     Toggler Functionality
                  </h5>

                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="images/container.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Element container
                  </h5>

                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="box">
                <div class="img-box">
                  <img src="images/flexbox.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>
                    Flexbox
                  </h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- client section --> */}

      <section class="client_section layout_padding-bottom">
        <div class="container">
          <div class="heading_container">
            <h2>
              Developers Trust
            </h2>
          </div>
          <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-11 col-lg-10 mx-auto">
                    <div class="box">
                      <div class="img-box">
                        <img src="images/neelu.jpeg" alt="" />
                      </div>
                      <div class="detail-box">
                        <div class="name">
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                          <h6>
                            Neel
                          </h6>
                        </div>
                        <p>
                          I am using this frame work for last 3 years and i glad and happy to use as it is easy and flexible to use. FlexFlow is one of the best cust class css library for developer to make website much faster.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-11 col-lg-10 mx-auto">
                    <div class="box">
                      <div class="img-box" >
                        <img src="images/Noobi.png" alt="" />
                      </div>
                      <div class="detail-box">
                        <div class="name">
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                          <h6>
                            Naveen
                          </h6>
                        </div>
                        <p>
                        FlexFlow is my first choice, smooth and easy documentation. FlexFlow is one of the best custum class and make page responsive. Most fascinating part is Component Market. All thanks to Mr. Saket Sourav and his team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-11 col-lg-10 mx-auto">
                    <div class="box">
                      <div class="img-box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div class="detail-box">
                        <div class="name">
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                          <h6>
                            Siaalya
                          </h6>
                        </div>
                        <p>
                        I am using this frame-work for last 3 year and i am happy to use as it is easy and flexible to use with inbuilt better default element . FlexFlow is one of the best custum classes  for developer to make website much faster. Thanks to Mr.Saket Sourav to make this wonderful tools for us
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel_btn-container">
              <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end client section --> */}

      {/* <!-- info section --> */}
      <section class="info_section long_section">

        <div class="container">

          <div class="info_top ">
            <div class="row ">
              <div class="col-sm-4 col-md-2 col-lg-4">
                <div class="info_links">
                  <h4>
                    QUICK LINKS
                  </h4>
                  <div class="info_links_menu">
                    <a class="" href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="" href="/about"> About</a>
                    <a class="" href="/doc">Document</a>
                    <a class="" href="playground">Playground</a>
                    <a class="" href="/market">Market</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-3 mx-3">

              </div>
              <div class="col-md-4">
                <div class="info_form">


                  <div class="social_box">
                    <a href="">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end info_section --> */}


      {/* <!-- footer section --> */}
      <footer class="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <Link to="https://github.com/Knightsaket007" style={{ color: "blue" }}> FlexFlow </Link>
          </p>
        </div>
      </footer>
      {/* <!-- footer section --> */}


    </div>
  )
}

export default Home