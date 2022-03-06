import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom"
import LoginregisterFooter from '../../components/loginRegisterFooter/LoginregisterFooter'

const Login = () => {
    return (
        <>
            <div className=" loginPage">

                <form className='loginFrom'>
                    <h2 className='loginTitle'>All In One</h2>
                    <div className=" LoginFormContainer">
                        <h4>Sign-In</h4>
                       
                        <div className="inputBox">
                            <label >Email</label><br />
                            <input type="email" />
                        </div>
                        

                        <div className="inputBox">
                            <label >Password</label><br />
                            <input type="password" />
                        </div>
                        <div className="inputBox">
                            <button>Continue</button>
                        </div>

                    </div>
                    <p>Don't have an account ?
                        {/* render to login page when click */}
                        <Link className='link' to="/register">
                            <span>SIGN UP</span>
                        </Link>
                    </p>
                    <div className="terms">
                        By creating an account, you agree to All In One's Conditions of Use and Privacy Notice.
                    </div>

                </form>
            </div>
            {/* login and register footer */}
            <LoginregisterFooter />
        </>
    )
}

export default Login