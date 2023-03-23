import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from '../Card/Card';
import './Todos.css'

const Todos = () => {
    const doardsData = useLoaderData()
    const [addlist, setAddList] = useState(true)
    const [addTitle, setAddTitle] = useState()
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);

    const { isLoading, error, data: boardinlist, refetch } = useQuery({
        queryKey: [doardsData._id],
        queryFn: () =>
            fetch(`http://localhost:5000/boardlist/${doardsData._id}`).then(
                (res) => res.json(),
            ),
    })
    refetch()
    if (isLoading) return toast('Loading...')

    if (error) return toast.error('An error has occurred: ' + error.message)
    console.log(boardinlist)

    const titleHandle = () => {
        const lititle = addTitle;
        const boardId = doardsData._id

        const boardinfo = {
            boardId,
            boardList: lititle
        }
        fetch("http://localhost:5000/boardlist", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(boardinfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success("Create a list success")
                    setAddList(true)

                    // navigat(from, { replace: true })
                }
            })
            .catch(err => toast.error(err))

    }

    return (
        <div className={doardsData.background}>
            <div className='p-lg-5'>
                <h4 className={`${doardsData.background === 'body-container6' && 'ti-text'}
                ${doardsData.background === 'body-container2' && "text-dark"}
                ${doardsData.background !== 'body-container6' && doardsData.background !== "body-container2" && "text-white"} d-inline`}>{doardsData.boardname}</h4>
                <div className="d-flex x-scrol  border-secondary border-end border-top border-3 p-2 ">
                    {
                        boardinlist.map((_, i) =>
                            <div className="p-1 soport">
                                <div className="text-dark mb-3 px-1 bg-color " style={{ width: "360px" }}>
                                    <div className="px-2 py-3 text-secondary d-flex justify-content-between ">
                                        <h6><span className="header-icon"></span>{_.boardList}</h6>
                                        <p className="counting fw-bold">{[...Array(20)].length}</p>
                                    </div>
                                    <div id="incomplete" className="y-scrol">


                                        {/* {
                                            [...Array(20)].map((_, i) =>
                                                // <Card></Card>
                                            )
                                        } */}
                                        <Card></Card>
                                        <Modal
                                            show={modalShow}
                                            onHide={handleClose}
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="contained-modal-title-vcenter">
                                                    Modal heading
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <h4>Centered Modal</h4>
                                                <p>
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                            </Modal.Body>
                                        </Modal>

                                        <h6 onClick={() => setModalShow(true)} className='text-white btn btn-secondary'>Add a Card +</h6>
                                    </div>
                                </div>
                            </div>)
                    }
                    {/* <div className="p-1">
                <div className="text-dark mb-3 px-1 bg-color" style={{ width: "360px" }}>
                    <div className="px-2 py-3 text-secondary d-flex justify-content-between">
                        <h6><span className="header-icon"></span>Incomplete</h6>
                        <p className="counting fw-bold">0</p>
                    </div>
                    <div id="incomplete" className="y-scrol">


                        {
                            [...Array(20)].map((_, i) =>
                                <Card></Card>
                            )
                        }

                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="text-dark mb-3 px-1 bg-color" style={{ width: "360px" }}>
                    <div className="px-2 py-3 text-secondary d-flex justify-content-between">
                        <h6 className=''><span className="header-icon"></span>To Do
                        </h6>
                        <p className="counting fw-bold">0</p>
                    </div>
                    <div id="todo" className="y-scrol">
                        {
                            [...Array(20)].map((_, i) =>
                                <Card></Card>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="text-dark mb-3 px-1 bg-color" style={{ width: "360px" }}>
                    <div className="px-2 py-3 d-flex text-secondary justify-content-between">
                        <h6><span className="header-icon"></span>Doing</h6>
                        <p className="counting fw-bold">0</p>
                    </div>
                    <div id="doing" className="y-scrol">
                        {
                            [...Array(20)].map((_, i) =>
                                <Card></Card>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="text-dark mb-3 px-1 bg-color" style={{ width: "360px" }}>
                    <div className="px-2 py-3 text-secondary d-flex justify-content-between">
                        <h6>Under Review</h6>
                        <p className="counting fw-bold">0</p>
                    </div>
                    <div id="underreview" className="y-scrol">
                        {
                            [...Array(20)].map((_, i) =>
                                <Card></Card>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="text-dark mb-3 px-1 bg-color" style={{ width: "360px" }}>
                    <div className="px-2 py-3 text-secondary d-flex justify-content-between">
                        <h6>Completed</h6>
                        <p className="counting fw-bold">0</p>
                    </div>
                    <div id="completed" className="y-scrol">
                        {
                            [...Array(20)].map((_, i) =>
                                <Card></Card>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="text-dark mb-3 px-1 bg-color" style={{ width: "360px" }}>
                    <div className="px-2 py-3 text-secondary d-flex justify-content-between">
                        <h6>Overdate</h6>
                        <p className="counting fw-bold">0</p>
                    </div>
                    <div id="overdate" className="y-scrol">
                        {
                            [...Array(20)].map((_, i) =>
                                <Card></Card>
                            )
                        }
                    </div>
                </div>
            </div> */}
                    {
                        addlist ?
                            <div onClick={() => setAddList(!addlist)}>
                                <p id='addlist' ><span><FaPlus /></span> Add a list</p>
                            </div> :
                            <div id='addlist-title'>
                                <h6>List title</h6>
                                <input onBlur={(e) => setAddTitle(e.target.value)} type="text" placeholder='Enter list title' /><br />
                                <button onClick={() => titleHandle()} className='btn btn-primary mt-1'>Add list</button>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Todos;