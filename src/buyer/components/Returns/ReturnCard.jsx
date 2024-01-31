import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
const ReturnCard = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className='bg-white rounded-lg px-8 py-2'>
                    <h1 className='text-[#00000082]'>Select Product to Return and Refund</h1>
                </div>
                <div className='bg-white px-8 py-5 rounded-lg my-2 pb-1'>
                    <div className='flex gap-[500px] text-[#878787]'>
                        <div className='mb-4'>
                            <h1>Vegetable Gallery </h1>
                            <h1>Sold by Methsara</h1>
                        </div>
                        <div>
                            <h1>Deliverd</h1>
                            <h1>Delivered on 16 Dec 2023</h1>
                        </div>
                    </div>
                    <hr className='py-2'></hr>
                    <div className='flex w-full gap-4 items-end'>
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220"
                            alt=""
                            className='w-[160px] h-[120px]'
                        />

                        <div className='w-full px-3'>
                            <h1 className='font-semibold text-gray-800 text-lg my-3'>Leeks 1kg</h1>
                            <p className='text-blue-gray-500'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Exercitationem, libero optio voluptate accusantium temporibus quis
                                aperiam soluta nihil est magnam omnis, aliquam architecto
                                necessitatibus quaerat delectus eveniet in totam quos.
                            </p>
                        </div>
                    </div>
                    <div className='py-8 flex '>
                        <div>Cost Of Product : Rs.100000.00</div>
                        <div className='ml-auto '>
                            <Button className="color bg-green-400" onClick={() => navigate('/buyers/return')} >Return Product</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReturnCard