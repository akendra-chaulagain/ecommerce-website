import React from 'react'
import "./Register.css"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <>
            <div className="container-fluid registerPage">

                <div className=" wrapper">
                    <form className='registerFrom'>
                        <h2>CREATE AN ACCOUNT</h2>
                        <div className="row">
                            <div className="col-6 leftSideLoginFrom">
                                <input type="text" placeholder=' first  name' />
                                <input type="text" placeholder=' username' />
                                <input type="password" placeholder=' password' />

                            </div>
                            <div className="col-6 rightSideLoginForm">
                                <input type="text" placeholder=' last name' />
                                <input type="email" placeholder=' email' />
                                <input type="text" placeholder='confirm password' />

                            </div>
                        </div>
                        <div className="createBtn">
                            <button>CREATE</button>
                        </div>
                        <p>Already have an account ?
                            {/* render to login page when click */}
                            <Link className='link' to="/login">
                                <span>SIGN IN</span>
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register