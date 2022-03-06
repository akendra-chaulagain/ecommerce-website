import React from 'react'
import Footer from "../../components/footer/Footer"
import "./SingleProductPage.css"
import { useState } from 'react'
import Announcementt from "../../components/announcenemt/Announcement"
import Navbar from "../../components/navbar/Navbar"


const SingleProductPage = () => {





    // usestate fro quantity
    const [quantity, setQuantity] = useState(1)



    // increase and decrease quantity  when add or less button click
    const handleQuantity = (type) => {
        if (type === "desc") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }


    return (
        <>
            <Announcementt />
            <Navbar />
            <div className="container-fluid singlePage">
                <div className="row">
                    <div className="col-md-6 leftSideImg">
                        <img src="https://images.pexels.com/photos/2265486/pexels-photo-2265486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </div>
                    <div className="col-md-6 rightSide">
                        <div className="productTitle">Watch</div>
                        <div className="productdesc">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sunt.</p>
                            <span className='productPrice'>Price :$ 60</span>

                            <div className="productSize">


                                {/* map  function for color */}
                                <span>Color :</span>

                            </div>
                            <div className="increaseAnddecrease">
                                <button onClick={() => handleQuantity("desc")}>-</button>
                                <span className='number'>{quantity}</span>
                                <button onClick={() => handleQuantity("inc")}>+</button>

                            </div>

                            <div className="addtoCard">
                                <button >ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            {/* footer */}
            <Footer />
        </>
    )
}

export default SingleProductPage