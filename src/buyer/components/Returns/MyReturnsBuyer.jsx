import React, { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import SellerReturnCard from '@/seller/SellerDashboard/dashboard/components/reviews/components/SellerReturnCard';
import { getReturnsForBuyer } from '@/services/returnServices';
import { BUYER_ID } from '@/usersID';
import BuyerReturnCard from '../BuyerReturnCard';


const data = [
    {
        type: 'Vegetable Gallery',
        who: 'Purchased on 16 Dec 2023',
        img: "https://tse1.mm.bing.net/th?id=OIP.bprm9Awwe2tzYwo80PtKIwHaE6&pid=Api&P=0&h=220",
        diliDate: 'Returned on 16 Dec 2023',
        iType: 'Leeks Stock-500kg',
        rq: 'Returned Quantity - 100kg',
        cof: 'Amount Returned Quantity - Ru.10000.00',
        Button: 'View'
    },
    {
        type: 'Vegetable Gallery',
        who: 'Purchased on 16 Dec 2023',
        img: "https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png",
        diliDate: 'Returned on 16 Dec 2023',
        iType: 'Leeks Stock-500kg',
        rq: 'Returned Quantity - 100kg',
        cof: 'Amount Returned Quantity - Ru.10000.00',
        Button: 'View'
    },
    {
        type: 'Vegetable Gallery',
        who: 'Purchased on 16 Dec 2023',
        img: "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pumpkin.jpg?itok=IXGgRg1X",
        diliDate: 'Returned on 16 Dec 2023',
        iType: 'Leeks Stock-500kg',
        rq: 'Returned Quantity - 100kg',
        cof: 'Amount Returned Quantity - Ru.10000.00',
        Button: 'View'
    }


]



export function MyReturnsBuyer() {
    const buyerId = BUYER_ID;
    const navigate = useNavigate();

    const [returns, setReturns] = useState([]);

    const fetchReturns = async () => {
        const data = await getReturnsForBuyer(buyerId);
        // console.log(data)
        setReturns(data);
    }

    useEffect(() => {
        fetchReturns();
    }, [])

    return (
        <>
            <div className='bg-white rounded-lg px-8 py-2'>
                <h1 className='text-[#00000082]'> Return product</h1>
            </div>
            {returns.length > 0 && returns.map((item, index) => (
                <BuyerReturnCard
                    key={index}
                    type={item.productType}
                    who={item.sellerName}
                    dili={item.dili}
                    diliDate={item.diliDate}
                    iType={item.productName}
                    rq={item.rq}
                    cof={item.totalPrice}
                    Button={"Return Product"}
                    img={item.productImageUrl}
                    description={item.productDescription}
                    quantity={item.totalQuantity}
                    orderId={item.orderID}
                    path={'/buyers/view-return/'}
                />
            ))}

        </>
    );
}

export default MyReturnsBuyer;