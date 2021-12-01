import React from 'react'
import './Navbar.css'
import CatagoryNavbar from '../subcomponent/CatagoryNavbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../subcomponent/Cart'
const Navbar = ({ data, setFilter, filterProduct }) => {
    const state = useSelector((state) => state.handleCart)
    const click_cat = () => {
        document.getElementById('i-cat').classList.toggle('show-cat')
        document.getElementById('cart').classList.remove("show-cart")
    }
    const click_c = () => {
        document.getElementById("cart").classList.toggle("show-cart")
        document.getElementById('i-cat').classList.remove("show-cat")
    }
    return (
        <nav className="navbar">
            <div className="nav-width">
                <div className="logo">
                    <Link to='/'><h2>App Shop</h2></Link>
                </div>
                <ul className="nav-menu">
                    <div className="drop-cat">
                        <li onClick={click_cat}><i className="fas fa-list-ul"></i></li>

                    </div>

                    <div className="drop-cart">
                        <li onClick={click_c}><i className="fas fa-shopping-cart"></i></li>
                        <span>{state.length}</span>

                    </div>
                    <Cart click_c={click_c} />
                    <CatagoryNavbar data={data} setFilter={setFilter} filterProduct={filterProduct} click_cat={click_cat} />
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
