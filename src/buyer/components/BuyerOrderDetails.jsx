import React from 'react'
import { useParams } from 'react-router-dom'
import MTimeline from './Timeline';


export default function BuyerOrderDetails() {

  const {orderReference}=useParams();
  return (
    <div>
      <MTimeline orderReference={orderReference}/>
    </div>
    

  )
}