import React from 'react';
import { Rating } from "@material-tailwind/react";
import { MdPhotoCamera } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

export default function HistoryForm() {
    const DefaultRating = () => {
        return <Rating value={4} />;
    };

    return (
        <>
            <div>
                <div className='bg-white px-8 py-5 rounded-lg my-2 pb-1'>
                    <div className='mb-5'>
                        <h1 className='my-2'>Vegetable Gallery </h1>
                        <p>Purchase date 01/04/2024</p>
                    </div>
                    <div className='flex w-full gap-4 items-end'>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220"
                            alt="" className='w-[160px] h-[120px]' />

                        <div className='w-full px-3'>
                            <h1 className='font-semibold text-gray-800 text-lg my-3'>Leeks 1kg</h1>
                            <p className='text-blue-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, libero optio voluptate accusantium temporibus quis aperiam soluta nihil est magnam omnis,
                                aliquam architecto necessitatibus quaerat delectus eveniet in totam quos.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-20 my-8'>
                        <h1>Product rating</h1>
                        <div className='pr-4'>
                            <DefaultRating />
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-white  rounded-lg py-5  '>
                <div className='flex gap-20  px-8'>
                    <h1>Seller Service</h1>
                    <DefaultRating />
                </div>
                <div className='flex gap-16 px-8 pt-3'>
                    <h1>Delivery Service</h1>
                    <DefaultRating />
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
                    <input type='text' placeholder='How’s the Quality of the product?' className='w-[600px] h-12 bg-[#F7FFF1] rounded-lg text-center'></input>
                </div>
                <div className='pt-5'>

                </div>
            </div>

            <div className='bg-white text-center  my-2 rounded-lg pt-6 pb-4'>
                <div>
                    <button type='submit' className='bg-[#44BD32] px-28 rounded-lg h-9'>Submit</button>
                </div>
            </div>
        </>
    );
}
