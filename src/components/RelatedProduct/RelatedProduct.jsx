import React from 'react'
import './RelatedProduct.css'
import data_product from '../../assets/data'
import { Item } from '../../components/Item/Item'

export const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Raleted Products</h1>
        <hr />
        <div className="relatedproductitem">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_Price={item.old_price} />
            })}
        </div>
    </div>
  )
}
