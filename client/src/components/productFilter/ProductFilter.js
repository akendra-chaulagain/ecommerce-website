import React from 'react'
import "./ProductFilter.css"

const ProductFilter = () => {
    
    return (
        <>
          
            <div className="container-fluid productlistContainer">
                <h1>cloth</h1>
                <div className=" row productfilter">
                    <div className="col-md-6 leftSideFilter">
                        <span>Filter Products :</span>
                        <select name='color' >
                            <option value="yellow">Yellow</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                        </select>

                        <select name='size' >
                            <option value="X">X</option>
                            <option value="XXL">XXL</option>
                            <option value="XXXL">XXXL</option>
                        </select>

                    </div>
                    <div className="col-md-6 rightSideFilter">
                        <span>Sort Products:</span>
                        <select >
                            <option value="new item">New Item</option>
                            <option value="asc">Price (asc)</option>
                            <option value="desc">Price (desc)</option>

                        </select>
                    </div>
                </div>
               

            </div>

        </>
    )
}

export default ProductFilter