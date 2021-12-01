import React from 'react'
import './Home.css'
import ProductItem from '../components/components/ProductItem'
import Product from './Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Home = ({ filter }) => {
    return (
        <div id="home" className="home">
            <div className="max-width">
                <Routes>
                    <Route exact path="/" element={<div className="pro-grid">
                        {filter.map((product) => <ProductItem key={product.id} product={product} />)}
                    </div>} />
                    <Route exact path="/product/:id" element={<Product />} />
                </Routes>
            </div>
        </div>
    )
}

export default Home
