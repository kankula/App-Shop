import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../../redux/action'
const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    return (
        <div className="card">
           <div className="img-pro">
                <img src={product.image} alt={product.title} />
                <ul className="action">
                    <Link to={`/Product/${product.id}`}><li><i className="fas fa-eye"></i><span>View Detail</span></li></Link>
                
                     <li onClick={() => addProduct(product)}><i className="fas fa-shopping-cart"></i><span></span></li>
                </ul>
                <div className="content-pro">
                <div className="productName">
                    <h2>{product.title}</h2>
                </div>
                <div className="price_rating">
                    <h3>${product.price}</h3>
                    <div className="rating-pro"><h3>{product.rating && product.rating.rate}<i className="fas fa-star" aria-hidden="true"></i></h3></div>
                </div>

            </div>
            </div>
            
        </div>
    )
}

export default ProductItem
