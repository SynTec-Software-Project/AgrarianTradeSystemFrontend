import React from 'react'

const CheckoutCard = () => {
    return (
        <>
            <div className='px-4 py-4 bg-white rounded-md '>
                <h1 className='mb-2 text-lg font-semibold text-gray-800'>Order Summary</h1>
                <div>
                    <div className=' flex justify-between my-3 border-b-2 py-4 text-gray-600 font-semibold  text-sm'>
                        <h1>Sub Total :</h1>
                        <p>Rs 12,400.00</p>
                    </div>
                    <div className=' flex justify-between my-3 border-b-2 py-4 text-gray-600 font-semibold  text-sm'>
                        <h1>Shipping cost :</h1>
                        <p>Rs 1200.00</p>
                    </div>
                    <div className=' flex justify-between my-3 border-b-2 py-4 text-gray-600 font-semibold text-sm '>
                        <h1>Tax estimate :</h1>
                        <p>Rs 0.00</p>
                    </div>
                    <div className=' flex justify-between my-4 py-4 text-gray-800 font-semibold '>
                        <h1>Order Total :</h1>
                        <p>Rs 13,500.00</p>
                    </div>
                    <div className='mt-3 py-3'>
                        <button className='bg-primary w-full rounded-md text-white py-2 text-sm hover:bg-green-500'>Checkout Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutCard