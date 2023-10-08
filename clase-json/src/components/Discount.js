import React from 'react'
import './Discount.css'


const Discount = (props) => {
  return (
    <div className='discount'>{props.discount}%</div>
  )
}

export {Discount}
