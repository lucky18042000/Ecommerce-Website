import React from 'react'
import img from '../assets/beata-biskupicova-81IbsV021f0-unsplash.jpg'
function Cards(product) {

  return (
    <div className='cards cursor-pointer shadow-2xl rounded-3xl'>
      <div className='cards-image'>
        <img className='cards-image-img' src={product.image.url} alt={product.altImageUrl} srcSet="" />
      </div>
      <div className=' cards-info bg-secondary h-28 bg-opacity-50 grid text-center rounded-b-3xl'>
      <h2 className='cards-name ml-7 w-60 justify-center'>{product.productTitle}</h2>
      <p className='cards-price text-primary'>${product.prices[0].regularPrice.minPrice}</p>
      </div>
    </div>
  )
}

export default Cards
