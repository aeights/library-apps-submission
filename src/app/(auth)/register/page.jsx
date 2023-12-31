"use client"

import ErrorInputComponent from '@/components/form/ErrorInputComponent'
import axios from '@/libs/Axios';
import React, { useState } from 'react';

function Register() {
    const url = "/api/register";
    const register = async ({ name, email, password, password_confirmation }) => {
        setErrors([]);
        setStatus(null);
        await fetch('https://book-crud-service-6dmqxfovfq-et.a.run.app/sanctum/csrf-cookie', {method: 'GET',});
        await axios.post(url, JSON.stringify({name, email, password, password_confirmation}),{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }
        )
        .catch((error) => {
            console.log(error);
        })
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        register(name, email, password, confPassword);
    }
    return (
        <div className='flex justify-center mt-24'>
            <div className='p-8 flex flex-col justify-center items-center bg-blue-400 rounded-md shadow-md'>
                <h1 className='text-slate-100 font-semibold text-2xl mb-4'>Register</h1>
                <form className='flex flex-col justify-center' action="">
                    <div className='flex justify-between items-center mb-5'>
                        <label className='text-slate-100 mr-4' htmlFor="name">Name</label>
                        <div>
                            <input value={name} onChange={(e) => setName(e.target.value)} className='p-2 rounded outline-none text-sm' type="text" name='name' placeholder='Your name' />
                            <ErrorInputComponent message={'anjay error'} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-5'>
                        <label className='text-slate-100 mr-4' htmlFor="email">Email</label>
                        <div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 rounded outline-none text-sm' type="email" name='email' placeholder='Your email' />
                            <ErrorInputComponent message={'anjay error'} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-5'>
                        <label className='text-slate-100 mr-4' htmlFor="password">Password</label>
                        <div>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 rounded outline-none text-sm' type="password" name='password' placeholder='Enter your password' />
                            <ErrorInputComponent message={'anjay error'} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-5'>
                        <label className='text-slate-100 mr-4' htmlFor="password">Password</label>
                        <div>
                            <input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} className='p-2 rounded outline-none text-sm' type="password" name='confirm_password' placeholder='Confirm password' />
                            <ErrorInputComponent message={'anjay error'} />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className='bg-slate-100 hover:bg-slate-200 duration-300 text rounded-md p-2 mt-2 font-semibold' type='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register