
import OrderOverview from '@/buyer/components/OrderOverview';
import React from 'react'
import { useParams } from 'react-router-dom'


export default function OrderDetails() {

  const {orderReference}=useParams();
  return (
    <div>
      {/* <OrderOverview title="Courier details" orderReference={orderReference}/> */}
      <OrderOverview title="Courier details" orderReference={orderReference}/>
    </div>
    

  )
}