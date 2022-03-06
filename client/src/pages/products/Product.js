import React from 'react'
import "./Product.css"
import { productLists } from "../../data"
import SingleProduct from '../singleProduct/Singleproduct'
import Footer from "../../components/footer/Footer"
import ProductFilter from '../../components/productFilter/ProductFilter'
import { useLocation } from 'react-router-dom'
import Announcementt from "../../components/announcenemt/Announcement"
import Navbar from "../../components/navbar/Navbar"



const Product = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    return (
        <>
            <Announcementt/>
            <Navbar/>
            {/* product filter import from product filter components */}
            <ProductFilter path={path} />
            <div className="container-fluid Product">
                <div className="row">
                    {
                        productLists?.map((product, id) => (
                            <div className="col-md-3" key={id}>
                                <SingleProduct product={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* footer */}
            <Footer />
        </>
    )
}

export default Product