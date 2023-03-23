import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import logo from '../asset/logo1.png'
import bgimg from '../asset/login-bg.jpg'
import { FaCheck, FaFacebook, FaGem, FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Login from '../LoginAndRegi/Login/Login';
import { FcGoogle, IconName } from "react-icons/fc";
import hero1 from '../asset/hero-img/JSW_Boards.png'
import hero2 from '../asset/hero-img/JSW_Roadmaps.png'
import hero3 from '../asset/hero-img/JSW_Bye Bye Spreadseets.png'
import tastlogo from '../asset/tast-co-logo/Cisco Logo.svg'
import tastlogo1 from '../asset/tast-co-logo/ebay logo.svg'
import tastlogo2 from '../asset/tast-co-logo/Spotify logo.svg'
import tastlogo3 from '../asset/tast-co-logo/Square Logo.svg'


const Home = () => {
    const [selogine, setSeLogin] = useState(true)
    return (
        <div>
            {/* navber section */}
            <Navbar sticky='top' className='shadow p-3bg-body' collapseOnSelect expand="lg">
                <Container>
                    <img style={{ height: "45px" }} src={logo} alt="" />
                    <Navbar.Brand className='logo' href="#home">EASYMANAGER</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='btn btn-outline-primary' style={{ fontWeight: "500" }} to='/todo'>Try now</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* banat login section */}
            <div className='banar-container'>
                <div className='banar-devider container'>
                    <div>
                        <div className='banar-text'>
                            <h1>Manage your projects with <br className='d-none d-lg-block' /> <span>EASYMANAGER</span></h1>
                            <h4>Agile project management for every team</h4>
                            <h6>INCLUDED IN YOUR FREE PLAN:</h6>
                            <ul>
                                <li><FaCheck /> unlimited user licenses</li>
                                <li><FaCheck /> Workflows and automation</li>
                                <li><FaCheck /> Out-of-the-box roadmaps</li>
                                <li><FaCheck /> Integrations with thousands of other tools</li>
                            </ul>
                        </div>

                    </div>
                    <div className='banar-login'>
                        {selogine ?
                            <div className='banar-logcard'>
                                <h1>Get started</h1>
                                <p>Free for up to unlimited users</p>
                                <button><FcGoogle /> Continue with Google</button>
                                <p className='my-3'>- or -</p>
                                <button onClick={() => setSeLogin(false)}>Sign up with email</button>
                                <div className='d-flex justify-content-center align-items-center mt-4'>
                                    <img style={{ height: "50px" }} src={logo} alt="" />
                                    <h6>EASYMANAGER</h6>
                                </div>
                            </div>
                            :
                            <div>
                                <Login></Login>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/* agile project menagment systime */}
            <div>
                <div className='container mt-5'>

                    <h1 style={{ color: "#253858" }} className='text-center'>Agile project management to fit how your team works</h1>
                    <div className='text-center my-4 d-none d-lg-block'>
                        <Link to='/' className='project-btn'>Scrum projects</Link>
                        <Link to="/kanban" className='project-btn'>Kanban board</Link>
                        <Link to="/automation" className='project-btn'>Automation</Link>
                        <Link to="/bugtrack" className='project-btn'>Bug Tracking</Link>
                    </div>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button" className='d-lg-none d-block agile-dropdown'>
                        <Dropdown.Item href="#/action-1"><Link to='/' className='project-btn'>Scrum projects</Link></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><Link to="/kanban" className='project-btn'>Kanban board</Link></Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><Link to="/automation" className='project-btn'>Automation</Link></Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><Link to="/bugtrack" className='project-btn'>Bug Tracking</Link></Dropdown.Item>
                    </DropdownButton>
                    <div className='mt-5'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            {/* Hero section */}
            <div style={{ backgroundColor: "#83faee43", padding: "100px 0" }}>
                <div className='container'>
                    <div className='hero-one'>
                        <div className='heroimg-one'>
                            <img style={{ width: "100%" }} src={hero1} alt="" />
                        </div>
                        <div className='hero-text'>
                            <div>
                                <h1>Customize how your team’s work flows</h1>
                                <hr />
                                <p>Set up, clean up, and automate even the most complicated project workflows.</p>
                            </div>
                        </div>
                    </div>
                    <div className='hero-one my-5'>
                        <div className='hero-text'>
                            <div>
                                <h1>Stay on track – even when the track changes</h1>
                                <hr />
                                <p>Use integrated roadmaps to sketch out the big picture, communicate plans with stakeholders, and ensure your team stays on the same page.</p>
                            </div>
                        </div>
                        <div className='heroimg-one'>
                            <img style={{ width: "100%" }} src={hero2} alt="" />
                        </div>
                    </div>
                    <div className='hero-one'>
                        <div className='heroimg-one'>
                            <img style={{ width: "100%" }} src={hero3} alt="" />
                        </div>
                        <div className='hero-text'>
                            <div>
                                <h1>Bye-bye, spreadsheets</h1>
                                <hr />
                                <p>Keep every detail of a project centralized in real time so up-to-date info can flow freely across people, teams, and tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* gat start section */}
            <div className='get-start'>
                <div>
                    <h1>Move fast, stay aligned, and build better - <br /> together</h1>
                    <Link to='/todo' className='btn btn-primary'>Get it free</Link>
                </div>
            </div>
            {/* footer section */}
            <div>

                <footer className="text-center text-lg-start bg-white text-muted">


                    <section className="text-center p-5 border-bottom es-footer">
                        <h1 className='my-4'>Trusted by over 100,000 customers world-wide</h1>
                        <div>
                            <img className='mx-4 my-4 my-lg-0' src={tastlogo} alt="" />
                            <img className='mx-4 my-4 my-lg-0' src={tastlogo2} alt="" />
                            <img className='mx-4 my-4 my-lg-0' src={tastlogo3} alt="" />
                            <img className='mx-4 my-4 my-lg-0' src={tastlogo1} alt="" />
                        </div>


                    </section>


                    <section className="es-footer">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">

                                    <div className='d-flex justify-content-start align-items-center '>
                                        <img style={{ height: "70px" }} src={logo} alt="" />
                                        <h5>EASYMANAGER</h5>
                                    </div>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>



                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Angular</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Vue</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Laravel</a>
                                    </p>
                                </div>



                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>



                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                        info@example.com
                                    </p>
                                    <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                                </div>

                            </div>

                        </div>
                    </section>



                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom es-footer">

                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>



                        <div className='footer-icon'>
                            <a href="" className="me-4">
                                <FaLinkedin></FaLinkedin>
                            </a>
                            <a href="" className="me-4">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="" className="me-4">
                                <FaGoogle></FaGoogle>
                            </a>
                            <a href="" className="me-4">
                                <FaGithub></FaGithub>
                            </a>
                            <a href="" className="me-4">
                                <FaFacebook></FaFacebook>
                            </a>
                        </div>

                    </section>
                    <div className="text-center p-4 es-footer" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">EASYMANAGER</a>
                    </div>

                </footer>

            </div>
        </div>
    );
};

export default Home;