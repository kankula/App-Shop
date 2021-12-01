import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCart, delCart } from '../../redux/action'

const Cart = () => {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }

    const handleDal = (item) => {
        dispatch(delCart(item))
    }

    const cartItems = (product) => {
        return (
            <div >
                <div className="cart-item">
                    <div className="cart-pic">
                        <img key={product.id} src={product.image} alt={product.title} className="img-cart" />
                    </div>
                    <div className="detail-item-c">
                        <h2 key={product.id}>{product.title}</h2>
                        <h3 key={product.id}>${product.qty * product.price}
                        </h3>
                        <div className="calc">
                            <button onClick={() => handleDal(product)}>-</button>
                            <span key={product.id}>{product.qty}</span>
                            <button onClick={() => handleAdd(product)}>+</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    const emptyCart = () => {
        return (
            <div className="clear-cart">
                <h3>Your Cart is Empty</h3>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                Proceed To checkout
            </div>
        );
    }

    return (
       <div id="cart" className="cart-width">
            {state.length === 0 && emptyCart()}

            <div id="cart" className="cart">
                {state.length !== 0 && state.map(cartItems)}
            </div>
            {state.length !== 0 && button()}
      </div>
    )
}

export default Cart