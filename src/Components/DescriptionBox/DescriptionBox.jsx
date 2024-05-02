import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An E-Commers is an online platform that facilitates buying and selling
                of products or servicesover the internet. Service as a virtual marketplace
                where business and individuals showcase their products, interact with customers
                and conduct transaction without the need for physical presence. E-Commers website
                have gained immence popularlity due to their convinience, accessibility and
                global reach they offer.
            </p>
            <p>E-Commers website typically display products and services a detailed descriptions, images, prices and any available fashions
                (eg, sizes, colors, designs).
            </p>
        </div>
    </div>
  )
}
