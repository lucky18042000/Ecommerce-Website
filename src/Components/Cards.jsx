import React from 'react'
import img from '../assets/beata-biskupicova-81IbsV021f0-unsplash.jpg'
function Cards(product) {

  return (
    <div className='cards cursor-pointer'>
      <div className='cards-image'>
        <img className='cards-image-img' src={product.goods_img} alt="" srcSet="" />
      </div>
      <h2 className='cards-name'>{product.goods_name}</h2>
      <p className='cards-price'>{product.retailPrice.amountWithSymbol}</p>
    </div>
  )
}

export default Cards
