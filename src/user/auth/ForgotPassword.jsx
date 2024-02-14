import axios from 'axios';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef(null);
    const handleReset = async (e) => {
        e.preventDefault();

        const email = { email: emailRef.current.value };
        try{
            console.log(emailRef.current.value);
            const response = await axios.post('https://localhost:7144/Auth/forgot-password', email);
            console.log('Server Response:', response.data);
        }
        catch{
            console.error('Error:', error.response.data);
        }
    }
    return (
        <>
            <section className=" font-poppins">
                <div className="max-w-6xl px-0 mx-auto lg:px-6">
                    <div className="flex flex-col items-center h-full md:flex-row">
                        <div
                            className="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
                            <div className="z-10 w-full p-10 bg-gray-100 dark:bg-gray-900 h-100">
                                <h2 className="text-xl font-bold leading-tight mb-7 md:text-3xl dark:text-gray-300">
                                    Forgot your password?</h2>
                                <p className="text-xs leading-tight mb-8 md:text-base dark:text-gray-300">
                                    Enter your email to reset the password</p>
                                <form action="" className="mt-6">
                                    <div className='mt-12'>
                                        <label className="block text-gray-700 dark:text-gray-300">Email:</label>
                                        <input type="email"
                                            className="w-full px-4 py-3 mt-4 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                                            placeholder="Enter your email" ref={emailRef}/>
                                    </div>
                                    
                                    <button
                                        className="w-full px-4 py-3 mt-16 font-semibold text-gray-200 bg-primary rounded-lg hover:text-gray-700 hover:bg-green-300 "
                                        onClick={handleReset}>RESET</button>
                                    
                                    <p className='mt-6 text-center'>
                                        <Link className="font-semibold text-primary hover:text-green-800" to={"/login"}> Back to Login</Link>
                                    </p>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
