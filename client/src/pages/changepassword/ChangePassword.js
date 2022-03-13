import React from 'react'
import { Link } from 'react-router-dom';
import "./ChangePassword.css"

const ChangePassword = () => {
  return (
    <>
      <div className="homepageLink">
        <Link className="link" to="/">
          <span>Back to homepage</span>
        </Link>
      </div>

      <div className="container changePassword">
        <div className="row">
          <h3 className="text-center ">Update Your Password</h3>
          <form className="passwordWrapper">
            <div className="col-md-6 updatePasswordContainer">
              {/* email */}
              <div className="inputBoxs mt-4">
                <label htmlFor="">Enter your old password</label>
                <input type="text" />
              </div>
              {/* username */}
              <div className="inputBoxs">
                <label htmlFor="">Enter your new password</label>
                <input type="text" />
              </div>
              {/* contact number */}
              <div className="inputBoxs">
                <label htmlFor="">Confirm password</label>
                <input type="text" />
              </div>
              {/* submmit buttom */}
              <div className="inputBoxs">
                <button >submit</button>
              </div>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword