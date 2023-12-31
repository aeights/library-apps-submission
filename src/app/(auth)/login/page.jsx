import ErrorInputComponent from '@/components/form/ErrorInputComponent'
import React from 'react'

function Login() {
    return (
        <div className='flex justify-center mt-36'>
            <div className='p-8 flex flex-col justify-center items-center bg-blue-400 rounded-md shadow-md'>
                <h1 className='text-slate-100 font-semibold text-2xl mb-4'>Login</h1>
                <form className='flex flex-col justify-center' action="">
                    <div className='flex justify-between items-center mb-5'>
                        <label className='text-slate-100 mr-4' htmlFor="email">Email</label>
                        <div>
                            <input className='p-2 rounded outline-none text-sm' type="email" name='email' placeholder='Your email' />
                            <ErrorInputComponent message={"Error"} />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mb-5'>
                        <label className='text-slate-100 mr-4' htmlFor="password">Password</label>
                        <div>
                            <input className='p-2 rounded outline-none text-sm' type="password" name='password' placeholder='Enter your password' />
                            <ErrorInputComponent message={"Error"} />
                        </div>
                    </div>
                    <button className='bg-slate-100 hover:bg-slate-200 duration-300 text rounded-md p-2 mt-2 font-semibold' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login