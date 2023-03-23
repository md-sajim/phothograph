import React, { useContext, useRef, useState } from 'react';
import { Button, Modal, Overlay, Tooltip } from 'react-bootstrap';
import { FaBuromobelexperte, FaCubes, FaHome, FaLongArrowAltUp, FaMicrosoft, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Main.css'
import bgimg from '../../asset/bg-img/bg-img1.jpg'
import bgimg1 from '../../asset/bg-img/bg-img2.png'
import bgimg2 from '../../asset/bg-img/bg-img3.jpg'
import bgimg3 from '../../asset/bg-img/bg-img4.jpg'
import bgimg4 from '../../asset/bg-img/bg-img5.jpg'
import bgimg5 from '../../asset/bg-img/bg-img6.jpg'
import { toast } from 'react-toastify';

const Main = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setModalShow(false);
    const [disbtn, setDisbtn] = useState(true)
    const [boardtitledatabase, setBoardtitleDatabase] = useState('')
    const [back, setBack] = useState([bgimg, 'body-container1'])
    const { logOut, setUser, user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [board, setBoard] = useState("")
    const handleBoard = () => {
        console.log(board)
        setShow(false)
    }
    const hendleLogOut = () => {
        logOut().then(result => {
            setUser()
        }).catch(() => { })
    }
    const bgarry = [
        {
            img: bgimg,
            calssname: 'body-container1'
        },
        {
            img: bgimg1,
            calssname: 'body-container2'
        },
        {
            img: bgimg2,
            calssname: 'body-container3'
        },
        {
            img: bgimg3,
            calssname: 'body-container4'
        },
        {
            img: bgimg4,
            calssname: 'body-container5'
        },
        {
            img: bgimg5,
            calssname: 'body-container6'
        }
    ]
    // modul board title and button function
    const boardtitle = (e) => {
        if (e.target.value) {
            setBoardtitleDatabase(e.target.value)
            setDisbtn(false)
        }
        else {
            setDisbtn(true)

        }
    }
    const setDataDatabse = () => {
        const email = user.email;
        const boardData = {
            boardname: boardtitledatabase,
            background: back[1],
            email

        }
        console.log(boardData)
        fetch("http://localhost:5000/board", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(boardData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success("usre create success")
                    handleClose();
                    // navigat(from, { replace: true })
                }
            })
            .catch(err => toast.error(err))

    }

    return (
        <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className='main-body-container'>
            <div style={{ height: "50px", backgroundColor: "#191C1E", display: "flex", justifyItems: "center", alignItems: "center" }}>
                {
                    user && <h3 className='text-white ms-lg-5 ms-0'>WELCOME TO <span id='text-easy'>EASYMANAGER</span>  "{user.displayName}"</h3>
                }
            </div>
            <div id='layout-container'>

                <div id='second-contai' className='pt-5'>
                    <ul>
                        <li><span><FaCubes /> </span><Link ref={target} onClick={() => setModalShow(true)}>Create Board</Link></li>

                        <li><span><FaMicrosoft /> </span><Link to='/todo'>Boards</Link></li>
                        <li><span><FaUserAlt /> </span><Link>Members</Link></li>
                        <li onClick={hendleLogOut}><FaPowerOff /> <Link>LogOut</Link></li>
                        <li><Link to='/'><FaHome /> Home</Link></li>
                    </ul>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Modal
                show={modalShow}
                onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create a board
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img style={{ width: "100%", height: "300px" }} src={back[0]} alt="" />
                    </div>
                    <h6>Background</h6>
                    <div id='modul-grid'>
                        {
                            bgarry.map((_, i) => <img
                                key={i}
                                onClick={() => setBack([_.img, _.calssname])}
                                src={_.img}
                                alt=""
                            />)

                        }
                    </div>
                    <h6>Board title</h6>
                    <input onChange={(e) => boardtitle(e)} type="text" />
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button
                        disabled={disbtn}
                        className='w-100 fs-5 fw-bold'
                        onClick={() => setDataDatabse()}
                    >Create</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Main;