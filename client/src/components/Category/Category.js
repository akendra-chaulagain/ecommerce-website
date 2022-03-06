import React from 'react'
import SingleCategory from '../SingleCategory/SingleCategory'
import "./Category.css"

const Category = () => {
    return (
        <>
            <div className="container-fluid category">
                <div className="row">
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>  
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div> 
                     <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div> 
                     <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>

                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>

                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>
                    <div className=" col-lg-3 category_box">
                        <SingleCategory />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Category