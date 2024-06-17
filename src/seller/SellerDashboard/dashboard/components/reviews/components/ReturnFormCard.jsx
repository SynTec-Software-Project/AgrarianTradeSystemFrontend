import React from 'react'
import { MdPhotoCamera } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import FileSelect from '@/buyer/components/reuseble/FileSelect';

const ReturnFormCard = () => {
    return (
        <div>
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
                    <div className='py-8 text-gray-600 font-semibold'>
                        <h1>Cost Of Product : Rs.30000.00</h1>
                        <h1>Select Quantity - 50kg</h1>
                        <h1>Amount per quantity : Rs.15000.00</h1>
                    </div>
                </div>

            </div>
            <div className='bg-white rounded-lg my-2 py-5 '>
                <h1 className='px-8'>Add Photos</h1>
                <FileSelect />
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


                <div className='bg-white my-2 rounded-lg'>
                    <input type="radio" className='mx-5 my-5 w-5 h-5 ' required name='select' value='Refund by bank account' id='Refund by bank account' /><label htmlFor='Refund by bank account'>Refund by bank account</label>
                    <br />
                    <input type="radio" className='mx-5 w-5 h-5' name='select' required value='To buy the same type or a different type' id='To buy the same type or a different type' /><label htmlFor='To buy the same type or a different type'>To buy the same type or a different type</label>
                </div>


            </div>
            <div className='bg-white text-center  my-2 rounded-lg pt-6 pb-4'>
                <div>
                    <button type='submit' className='bg-[#44BD32] px-28 rounded-lg h-9 text-white'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ReturnFormCard