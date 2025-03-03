const { createContext, useState } = require("react");

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartNumber, setCartNumber] = useState(0);
    return (
        <CartContext.Provider value={{ cartNumber, setCartNumber }}>
            {children}
        </CartContext.Provider> 
    )
}

export default CartProvider;