import React from 'react';
import './Card.css'
import abtor1 from '../asset/avator/clint.png'
import abtor2 from '../asset/avator/download.png'
import abtor3 from '../asset/avator/images1.png'
import abtor4 from '../asset/avator/images2.png'

const Card = () => {
    return (
        <div className="card-bg-color mx-1 mb-2 p-2 ">
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={abtor1} className="rounded-circle" style={{ width: "30px" }} alt="Avatar" />
                    <h6 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "small" }}
                        className="mt-2 ms-1 fw-bold text-white">Client Name</h6>
                </div>
                <div className="d-flex align-items-center">
                    <img src={abtor2} className="rounded-circle" style={{ width: "30px" }}
                        alt="Avatar" />
                    <h6 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "small" }}
                        className="mt-2 ms-1 fw-bold text-white">Sadik Istiak</h6>
                </div>
            </div>
            <div className="d-flex text-white justify-content-between">
                <div className="my-2 d-flex align-items-center">
                    <svg style={{ height: "24px", width: "24px" }} xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path
                            d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                        <path
                            d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                        <path
                            d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                    </svg>
                    <p className="card-text  ms-1"
                        style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "12px" }}>Lorem, ipsum dolor sit
                        amet conse...</p>
                </div>
                <p style={{ backgroundColor: "rgb(232,238,243)" }}
                    className="my-2 fw-bold text-secondary d-flex align-items-center p-1 rounded">
                    <svg style={{ height: "24px", width: "24px" }} xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>

                    1/2
                </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <img src={abtor3} className="rounded-circle" style={{ width: "30px" }} alt="Avatar" />
                <img src={abtor4} className="rounded-circle" style={{ width: "30px" }} alt="Avatar" />
                <span className="p-1 m-0 fw-bold"
                    style={{ backgroundColor: "rgb(232,238,243)", borderRadius: "50%", fontSize: "small", color: "rgb(152, 149, 149)" }}>12+</span>
                <div className="d-flex text-secondary fw-bold">
                    <svg style={{ height: "20px", width: "20px", margin: "0" }} xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                    <span className="ms-1">15</span>

                </div>
                <div className="d-flex text-secondary fw-bold">
                    <svg onclick="attacment()" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ height: "20px", width: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>


                    <span className="ms-1">25</span>
                </div>
                <div className="d-flex text-secondary fw-bold">
                    <svg style={{ height: "20px", width: "20px" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>


                    <span className="ms-1">25/5/22</span>
                </div>
            </div>
        </div>
    );
};

export default Card;