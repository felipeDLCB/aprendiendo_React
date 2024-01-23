
import { useId } from "react";
import { useCart } from '../hooks/useCart.js'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import '../css/Cart.css'

function CartItem({ image, price, title, quantity, addToCart }) {
    return (
        <li>
            <img src={image} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckBoxId = useId()
    const { cart, addToCart, clearCart } = useCart()

    return (
        <>
            <label htmlFor={cartCheckBoxId} className="cart-button">
                <CartIcon />
            </label>
            <input type="checkbox" hidden id={cartCheckBoxId} />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>


        </>
    )
}
