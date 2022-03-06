import React from 'react'
import "./SingleCategory.css"
import { Link } from "react-router-dom"

const SingleCategory = ({ item }) => {
    return (
        <>
            <Link className='link-item' to={`products/${item.title}`}>
                <div className="category-box">
                    <div className="categortTitle">{item.title}</div>
                    <img className='img-fluid' src={item.img} alt="item_img" />
                    <span>see more</span>
                </div>
            </Link>

        </>
    )
}

export default SingleCategory