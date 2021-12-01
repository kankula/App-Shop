import React from 'react'
import './CatagoryNavbar.css'
import { Link } from 'react-router-dom';

const CatagoryNavbar = ({ data, setFilter , filterProduct}) => {

    const data_all = () => {
        setFilter(data)
    }
    
    return (
        <div id="i-cat" className="cat-width">
            <Link to="/"><li onClick={data_all}><p>All</p></li></Link>
            <Link to="/"><li onClick={() => filterProduct("men's clothing")}><p>Man's clothing</p></li></Link>
            <Link to="/"><li onClick={() => filterProduct("women's clothing")}><p>Women's clothing</p></li></Link>
            <Link to="/"><li onClick={() => filterProduct("jewelery")}><p>Jewelery</p></li></Link>
            <Link to="/"><li onClick={() => filterProduct("electronics")}><p>Electronic</p></li></Link>
        </div>
    )
}

export default CatagoryNavbar
