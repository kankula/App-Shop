import React, { useState, useEffect } from 'react'
import './Product.css'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }


    const ShowProduct = () => {
        return (
            <div className="product-card">
                <div className="dp"><img src={product.image} alt={product.title} className="detail-pic" /></div>
                <div className="detail-te">
                    <span>{product.category}</span>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div className="sp">
                        <h2>${product.price}</h2>
                        <h2>{product.rating && product.rating.rate}<i className="fas fa-star" aria-hidden="true"></i></h2>

                    </div>
                    <button onClick={() => addProduct(product)}><i className="fas fa-cart-plus"></i></button>
                </div>
            </div>
        )
    }
    return (
        <div className="product">
                {loading ? <Loading /> : <ShowProduct />}
        </div>
    )
}

export default Product
