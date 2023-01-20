import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/beata-biskupicova-81IbsV021f0-unsplash.jpg'
function Cards(product) {

  return (
    <Link to={`/product/${product.id}`}>
    <div className='cards cursor-pointer  rounded-3xl'>
      <div className='cards-image'>
        <img className='cards-image-img' src={product.image} alt='' srcSet="" />
      </div>
      <div className=' cards-info  h-28 bg-opacity-50 grid text-center rounded-b-3xl'>
      <h2 className='cards-name ml-7 w-60 justify-center font-bold'>{product.title}</h2>
      <p className='cards-price text-primary'>${product.price}</p>
      </div>
    </div>
    </Link>
  )
}

export default Cards
