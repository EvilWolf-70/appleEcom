import React, {useState} from 'react'
import { assets } from '../../assets/images/assets'
import { Rating } from 'react-simple-star-rating'
const Product = () => {
   
  return (
   <>
   <div className="product-card">
    <div className="product-img-box">
        <div className="product-img-box-wrap">
            <img src={assets.Product_img} className="product-image" alt="product-img" />
            <div className="quick-view-btns">
                <div className="btn fav-btn">
                    <img src={assets.FavHeart} alt="heart" />
                </div>
                <div className="btn quick-view-btn">
                    <img src={assets.QuickView} alt="eye" />
                </div>

            </div>
            <div className="product-disc-badage">
                <div className="badage-text">-40%</div>
            </div>
            <button type="button" className="add-cart-btn">Add to Cart</button>
        </div>
    </div>
    <div className="product-details">
        <div className="product-content">
            <h5 className="product-name">HAVIT HV-G92 Gamepad</h5>
            <div className="product-price">
                <span className="curr-price"><span className='doller'>$</span>123</span><span className="flat-price"><span className='doller'>$</span>123</span>
            </div>
            <div className="rating-wrap">
            <Rating  initialValue={3} iconsCount={5} />
            <span className="review-count">(99)</span>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Product