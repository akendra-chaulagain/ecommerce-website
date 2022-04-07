import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import LoginregisterFooter from "../../components/loginRegisterFooter/LoginregisterFooter";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import RegisterTextField from "../../components/RegisterTextField/RegisterTextField";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apicalls";

const Register = () => {
  //  useDispatch hook is used for login (redux)
  const dispatch = useDispatch();

  // yup validation is used
  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    username: Yup.string().required("Username is required!"),
    number: Yup.string()
      .min(10, "Contact no mus be 10 characters! ")
      .required("Number is required!"),
    password: Yup.string()
      .min(6, "Password is too short -should be 6 characters minimum")
      .required("Password is required!"),
    cpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password does not match!"
    ),
  });

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          number: "",
          cpassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          register(dispatch, values);
        }}
      >
        <Form>
          <div className=" registerPage">
            <div className="registerFrom">
              <h2 className="registerTitle">All In One</h2>
              <div className=" registerFormContainer">
                <h4>Create An Account</h4>
                {/* name */}
                <div className="inputBox">
                  <RegisterTextField
                    label="UserName"
                    name="username"
                    type="text"
                    placeholder="biraj"
                  />
                </div>
                {/* email */}
                <div className="inputBox">
                  <RegisterTextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="a@gmail.com"
                  />
                </div>
                {/* contact number */}
                <div className="inputBox">
                  <RegisterTextField
                    label="Contact no."
                    name="number"
                    type="number"
                    placeholder="9876576664"
                  />
                </div>
                {/* password */}
                <div className="inputBox">
                  <RegisterTextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password"
                  />
                </div>
                {/* cpassword */}
                <div className="inputBox">
                  <RegisterTextField
                    label="Confirm Password"
                    name="cpassword"
                    type="password"
                    placeholder="confirm password"
                  />
                </div>
                <div className="inputBox">
                  {/* <button onClick={handleRegister}>Continue</button> */}
                  <button>Continue</button>
                </div>
              </div>
              <p>
                Already have an account ?{/* render to login page when click */}
                <Link className="link" to="/login">
                  <span className="siginInBtn">SIGN IN</span>
                </Link>
              </p>
              <div className="terms">
                By creating an account, you agree to All In One's Conditions of
                Use and Privacy Notice.
              </div>
            </div>
          </div>
          {/* login and register footer */}
          <LoginregisterFooter />
        </Form>
      </Formik>
    </>
  );
};

export default Register;
