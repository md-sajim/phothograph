import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Registi from '../Registition/Registi';
import './Login.css'

const Login = () => {
    const [eslogin, setEsLogin] = useState(true)
    const { login } = useContext(AuthContext);
    const [loginErr, setLoginErr] = useState('')
    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.form?.pathname || "/todo"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        login(data.email, data.pass)
            .then(result => {
                navigat(from, { replace: true })


            })
            .catch(err => {
                setLoginErr(err.code.slice(5,))
            })
    };
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            {
                eslogin ?
                    <div id='login-container'>
                        < div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>Login Now!</h1>
                                <input {...register("email", { required: "Enter your email" })} type="email" className='form-control' id="" placeholder='email' />
                                {
                                    errors.email && <p className='text-danger'><small>{errors.email.message}</small></p>
                                }
                                <input {...register("pass", {
                                    required: "Please enter your password...",
                                    minLength: {
                                        value: 8,
                                        message: "password menimum 8 digits"
                                    }
                                })} type="password" className='form-control' id="" placeholder='password' />
                                {
                                    errors.pass && <p className='text-danger'><small>{errors.pass.message}</small></p>
                                }
                                {
                                    loginErr && <p className='text-danger'><small>{loginErr}</small></p>
                                }
                                <p className='text-primary'><small><b>Forgot password?</b></small></p>
                                <input type="submit" className='btn btn-primary' value="Login" />
                            </form>
                            <Link onClick={() => setEsLogin(false)}>Are you new?</Link>
                        </div >
                    </div >
                    :
                    <Registi></Registi>
            }
        </div >
    );
};

export default Login;