import React from 'react'
import "./Navbar.css"
import Cart from "@material-ui/icons/ShoppingCartOutlined"
import { Link } from 'react-router-dom'
import Menu from '@material-ui/icons/Menu'


// navbar
const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbarContainer">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">All In One</Link>
                    {/* search box */}
                    <input type="text" placeholder='search' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <Menu style={{ fontSize: 20 }} />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"
                                    to="/login">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link " to="/register">logOut</Link> */}
                                {/* <a className="nav-link" onClick={handleLogout}>LogOut</a> */}
                            </li>

                            {/* cart Icon */}
                            <li className="nav-item">
                                <Link to="/cart" className=" nav-link notification">
                                    <span>
                                        <Cart />
                                    </span>
                                    <span className="badge">8</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar