import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Login from '../Login/Login';
import './Registi.css'
import { toast } from 'react-toastify';

const Registi = () => {
    const [esragis, setEsRagis] = useState(true)
    const { createAccout, updateUer } = useContext(AuthContext);
    const [loginErr, setLoginErr] = useState('')
    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.form?.pathname || "/"
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.conpass === data.pass) {
            createAccout(data.email, data.pass)
                .then(result => {
                    createUserDatabase(data.name, data.email)
                })
                .catch(err => {
                    setLoginErr(err.code.slice(5,))
                })
        }
        else {
            setLoginErr("confirm passwords do not match")
        }
    };
    const createUserDatabase = (name, email) => {
        const user = {
            name,
            email,
        }
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    updateUer(data.name).then(() => { }).catch((err) => { console.log(err) })
                    navigat('/todo')
                    toast.success("usre create success")
                    // navigat(from, { replace: true })
                }
            })
            .catch(err => toast.error(err))
    }
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            {
                esragis ?
                    <div id='registi-container'>
                        <div>
                            <h1>Sign Up Now!</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name", { required: "Enter your name" })} type="text" className='form-control' placeholder='name' />
                                <input {...register("email", { required: "Enter your email" })} type="email" className='form-control' placeholder='email' />
                                {
                                    errors.email && <p className='text-danger'><small>{errors.email.message}</small></p>
                                }
                                <input {...register("pass", {
                                    required: "Please enter your password...",
                                    minLength: {
                                        value: 8,
                                        message: "password menimum 8 digits"
                                    }
                                })} type="password" className='form-control' placeholder='password' />
                                {
                                    errors.pass && <p className='text-danger'><small>{errors.pass.message}</small></p>
                                }
                                <input {...register("conpass", {
                                    required: "Please enter your password...",
                                    minLength: {
                                        value: 8,
                                        message: "password menimum 8 digits"
                                    }
                                })} type="password" className='form-control' placeholder='confirm password' />
                                {
                                    errors.conpass && <p className='text-danger'><small>{errors.conpass.message}</small></p>
                                }
                                {
                                    loginErr && <p className='text-danger'><small>{loginErr}</small></p>
                                }
                                <input type="submit" className='btn btn-primary' value="Sign Up" />
                            </form>
                            <Link onClick={() => setEsRagis(false)}>Alrady have an account?</Link>
                        </div>
                    </div>
                    :
                    <Login></Login>
            }
        </div>
    );
};

export default Registi;