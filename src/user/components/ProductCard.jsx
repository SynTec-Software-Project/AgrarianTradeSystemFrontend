import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
    Rating,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaWeight } from "react-icons/fa";
const ProductCard = () => {
    return (
        <>
            <Card className="w-full max-w-[300px] shadow-lg">
                <CardHeader floated={false} color="blue-gray">
                    <img
                        src="https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20180929_BLP506.jpg"
                        alt="carrot image"

                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                        <Rating value={4} />
                        <div>
                            <p className=' text-sm text-gray-700'>Reviews (4)</p>
                        </div>
                    </div>
                    <div className=' my-3'>
                        <h1 className='text-xl font-semibold text-gray-800'>Carrot</h1>
                    </div>
                    <div className='flex justify-between'>
                        <p className='flex items-center gap-2'><FaLocationDot />Badulla</p>
                        <p className='flex items-center gap-2'><FaWeight />20 - 50kg</p>
                    </div> 
                </CardBody>
            </Card>
        </>
    )
}

export default ProductCard