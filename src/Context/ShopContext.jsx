import { createContext, useState } from "react";
import all_product from '../assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    // const contextValue = {all_product}
    
    const addToCart = (itemsId) => {
        setCartItems((prev) => ({...prev, [itemsId]:prev[itemsId]+1}))
        console.log(cartItems)
    }
    
    const removeFromCart = (itemsId) => {
        setCartItems((prev) => ({...prev, [itemsId]:prev[itemsId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartNumber = () => {
        let totalNumber = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                totalNumber += cartItems[item];
            }
        }
        return totalNumber;
    }

    const contextValue = {getTotalCartNumber, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider