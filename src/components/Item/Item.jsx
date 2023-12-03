import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({image, name, new_price, old_Price, id}) => {
  return (
    <div className="item">
        <Link to={`/product/${id}`} ><img  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}  src={image} alt="" /></Link>
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${new_price}
            </div>
            <div className="item-price-old">
                ${old_Price}
            </div>
        </div>
    </div>
  )
}
