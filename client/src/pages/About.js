import React from 'react'
import Navbar from './components/Navbar'
import './About.css'
const About = () => {
    return (
        <>
            <Navbar />
            <div className='about-container'>
                <div className='flx-container'>
                    <div className='about-img-container'>
                        <img src="../../images/about.svg" alt="about_image"></img>
                    </div>
                    <div className='next-detail'>
                        <h4>About Us</h4>
                        <p>
                            Welcome to FlexFlow, your ultimate destination for developers seeking innovative solutions and tools to enhance their projects. At FlexFlow, we're dedicated to empowering developers with cutting-edge technologies and resources to streamline their workflow and boost productivity.
                        </p>
                    </div>
                </div>


                <div className='flx-container'>
                    <div className='next-detail'>
                        <h4>Our Mission</h4>
                        <p>
                            Our mission is to revolutionize the way developers approach web development by providing a comprehensive platform equipped with all the necessary tools and resources. We strive to empower developers of all skill levels, from beginners to seasoned professionals, with the means to build amazing web applications with ease.
                        </p>
                    </div>

                    <div className='about-img-container'>
                        <img src="../../images/mission.svg" alt="about_image"></img>
                    </div>

                </div>

                <div className='flx-container'>
                    <div className='about-img-container'>
                        <img src="../../images/serve.svg" alt="about_image"></img>
                    </div>
                    <div className='next-detail'>
                        <h4>What We Offer</h4>

                        <span><li></li><h5>FlexFlow CSS Framework:</h5><p> Our flagship product, FlexFlow CSS Framework, is a powerful and flexible CSS framework designed to simplify the styling process for developers. With its intuitive syntax and extensive features, FlexFlow allows developers to create stunning, responsive layouts effortlessly.</p></span>

                        <span><li></li><h5>Playground:</h5><p>  Dive into our Playground feature, where developers can experiment with code, test new ideas, and visualize their projects in real-time. Whether you're tweaking styles or debugging JavaScript, our Playground offers a seamless development experience.</p></span>

                        <span><li></li><h5>Free Component Market:</h5><p>Explore our Free Component Market, a treasure trove of pre-built UI components, templates, and widgets available for free. Say goodbye to reinventing the wheel – with our Free Component Market, developers can quickly integrate high-quality components into their projects with just a few clicks.</p></span>

                        <span><li></li><h5>Custom Class for Dynamic Styling:</h5><p>Tired of writing repetitive CSS code? Our Custom Class feature enables dynamic styling, allowing developers to create reusable styles that adapt to different contexts effortlessly. Say hello to cleaner, more maintainable code!</p></span>

                    </div>
                </div>

                <div className='me'>
                    <h2>Developer</h2>
                    <div className='flx-container'>
                        <div className='me-container'>
                            <img src="../../images/me.jpg"></img>
                        </div>
                        <div className='next-detail'>
                        <h4>SAKET SOURAV</h4>
                        <h5>Master in Computer Application</h5>
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}

export default About