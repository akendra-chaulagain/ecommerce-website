import React from 'react'
import "./Register.css"
import { Link } from "react-router-dom"
import LoginregisterFooter from '../../components/loginRegisterFooter/LoginregisterFooter'

const Register = () => {
    return (
        <>
            <div className=" registerPage">
            
                <form className='registerFrom'>
                    <h2 className='registerTitle'>All In One</h2>
                    <div className=" LoginFormContainer">
                        <h4>CREATE AN ACCOUNT</h4>
                        <div className="inputBox">
                            <label >Your Name</label><br />
                            <input type="text" placeholder=' first  name' />
                        </div>
                        <div className="inputBox">
                            <label >Email</label><br />
                            <input type="email" placeholder=' first  name' />
                        </div>
                        <div className="inputBox">
                            <label >Phone Number</label><br />
                            <input type="number" placeholder=' first  name' />
                        </div>

                        <div className="inputBox">
                            <label >Password</label><br />
                            <input type="password" placeholder=' first  name' />
                        </div>
                        <div className="inputBox">
                            <button>CREATE</button>
                        </div>

                    </div>
                    <p>Already have an account ?
                        {/* render to login page when click */}
                        <Link className='link' to="/login">
                            <span>SIGN IN</span>
                        </Link>
                    </p>
                    <div className="terms">
                        By creating an account, you agree to All In One's Conditions of Use and Privacy Notice.
                    </div>

                </form>
            </div>
            {/* login and register footer */}
            <LoginregisterFooter/>
        </>
    )
}

export default Register