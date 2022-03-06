import React from 'react'
import SingleCategory from '../SingleCategory/SingleCategory'
import "./Category.css"
import { Link } from "react-router-dom"
import { category } from "../../data"


const Category = () => {
    return (
        <>
            <div className="container-fluid category">
                <div className="row">
                    {
                        category?.map((item,id) => (
                                <div className=" col-lg-3 category_box" key={id}>
                                    <SingleCategory item={item}/>
                                </div>

                        ))
                    }

                </div>
            </div>

            {/* recommondation */}
            <div className=" reconmondation">
                <div className=" reconmondationInfo">
                    <hr />
                    <h5>See personalized recommendations</h5>

                    {/* sign in button */}
                    <div className="loginbtn">
                        <Link to="/login">
                            <button>Sign-In</button>
                        </Link>
                    </div>

                    <p>New customer?
                        <Link className='link' to="/register">
                            <span>Start here.</span>
                        </Link>
                    </p>
                    <hr />

                </div>

            </div>
            <hr />

        </>
    )
}

export default Category