import React from 'react'
import "./SingleProduct.css"
import Cart from "@material-ui/icons/ShoppingCartOutlined"
import Search from "@material-ui/icons/SearchOutlined"
import Favourite from "@material-ui/icons/FavoriteBorderOutlined"
import { Link } from 'react-router-dom'


const SingleProduct = ({ product }) => {
    return (
        <>
            <div className="singleProduct">
                <img className='img-fluid' src={product.img} alt="img" />
                <div className="info">
                    <div className="icons">
                        <div className="icon">
                            <Favourite />
                        </div>
                        <div className="icon">
                            <Cart />
                        </div>
                        <div className="icon">
                            <Link to={`/product/${product.id}`}>
                                <Search />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct