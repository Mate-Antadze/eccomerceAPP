import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

export const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitemsformatmain">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e, i) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitemsformat cartitemsformatmain">
                            <img src={e.image} className='carticonproducticon' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitemsquantity'>
                                {cartItems[e.id]}
                            </button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='removeicond' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                    </div>
                }
            })}
            <div className="cartitemsdown">
                <div className="cartitemstotal">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitemstotalitem">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitemstotalitem">
                            <p>sShipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitemstotalitem">
                            <h3>Total</h3>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                <button>PROCEED TO CKECKOUT</button>
                </div>
                {/* <div className="cartitemspromocode">
                    <p>If </p>
                </div> */}
            </div>
        </div>
    )
}
