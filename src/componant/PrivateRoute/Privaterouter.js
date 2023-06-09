import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

// import "./Privaterouter.css"

const Privaterouter = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    if (loding) {
        return <p>Loding...</p>
    }
    if (user) {
        return children;
    }
    return (
        <>
            <Navigate to='/' state={{ from: location }} replace></Navigate>

        </>
    );
};

export default Privaterouter;