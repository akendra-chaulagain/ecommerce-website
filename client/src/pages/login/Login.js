import React  from 'react'
import { Link } from "react-router-dom"
import "./Login.css"


const Login = () => {
    


    return (
        <>
            <div className="container-fluid loginPage">

                <div className=" wrapper">
                    <form className='loginFrom'>
                        <h2>SIGN IN</h2>
                        <div className=" loginFromInput">
                            <input type="email"
                                placeholder=' email'
                                required
                            />
                            <input type="password"
                                placeholder=' password'
                                required
                            />
                        </div>

                        <div className="loginBtn">
                            <button >LOGIN</button>
                            {/* {error && <p>Somethinw went wrong!</p>} */}
                        </div>
                        <p>Dont't Have an account ?
                            {/* render to login page when click */}
                            <Link className='link' to="/register">
                                <span>SIGN UP</span>
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login