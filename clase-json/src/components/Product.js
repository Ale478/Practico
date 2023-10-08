import './Product.css'
import React from 'react'
import { AddCartBtn } from './AddCartBtn'
import { Discount } from './Discount'
import { Heart } from './Heart';



const Product = ({discount, name, oldPrice, newPrice}) => {
  return (
    <div className='product'>
        <Discount discount={discount}/>
        <Heart />
        <img className='product__img' src='https://picsum.photos/180' alt='product'/>
        <h2 className= 'product__name'>{name}</h2>
        <div className='product__details'>
          <p className='product__oldPrice'>${oldPrice}</p>
          <p className='product__price'>${newPrice}</p>
          <AddCartBtn/>
        </div>
    </div>
  )
}

export {Product};