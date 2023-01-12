import React from 'react'
import img from '../assets/beata-biskupicova-81IbsV021f0-unsplash.jpg'
function Cards(product) {

  return (
    <div className='cards cursor-pointer'>
      <div className='cards-image'>
        <img className='cards-image-img' src={product.image.url} alt={product.altImageUrl} srcSet="" />
      </div>
      <h2 className='cards-name w-52'>{product.productTitle}</h2>
      <p className='cards-price'>${product.prices[0].regularPrice.minPrice}</p>
    </div>
  )
}

export default Cards
