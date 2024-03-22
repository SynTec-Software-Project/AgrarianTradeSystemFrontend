import React from 'react'
import { MdPhotoCamera } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const ReturnForm = () => {
    return (
        <>
            <div>
                <div className='bg-white rounded-lg px-8 py-2'>
                    <h1 className='text-[#00000082]'>Select Product to Return and Refund</h1>
                </div>
                <div className='bg-white px-8 py-2 rounded-lg my-2 pb-1'>
                    <div className='flex gap-[400px] text-[#878787]'>
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
                            src="http://www.asiaone.com/sites/default/files/original_images/Feb2016/DragonFruit.jpg"
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
                    <div className='py-8 text-[#1E293B] font-semibold'>
                        <h1>Cost Of Product : Rs.30000.00</h1>
                        <h1>Select Quantity - 50kg</h1>
                        <h1>Amount per quantity : Rs.15000.00</h1>
                    </div>
                </div>

            </div>
            <div className='bg-white rounded-lg my-2 py-5 '>
                <h1 className='px-8'>Add Photos and videos</h1>

                <div className='flex justify-center'>
                    <button className=' bg-[#F7FFF1] items-center rounded-lg '>
                        <MdPhotoCamera className='text-[#44BD32] h-[45px] w-auto relative px-8' />
                        Add Photo
                    </button>
                    <div className='w-32'>

                    </div>

                    <button className=' bg-[#F7FFF1] items-center rounded-lg'>
                        <FaVideo className='text-[#44BD32] h-[45px] w-auto relative px-8' />
                        Add Video
                    </button>

                </div>

            </div>
            <div className='bg-[#ffff] rounded-lg'>
                <div className='flex mx-6 py-5 pt-5 '>
                    <div>
                        <h1>Add Written Review</h1>
                    </div>
                    <div className='ml-auto opacity-60'>
                        <h1>0/500</h1>
                    </div>
                </div>
                <div className='text-center ' >
                    <input type='text' placeholder='Type the reason....' className='w-[600px] h-12 bg-[#F7FFF1] rounded-lg text-center'></input>
                </div>
                <div className='pt-5'>

                </div>
            </div>
            <div>
                <div className='bg-white rounded-lg px-8 py-2 my-2'>
                    <input type="radio" />
                </div>
            </div>
        </>
    )
}

export default ReturnForm