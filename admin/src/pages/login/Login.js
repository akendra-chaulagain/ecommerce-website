import React from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField/TextField";

const Login = () => {
  // const user = useSelector((state) => state.user);
  const { isFetching } = useSelector((state) => state.user);
  // console.log(user);

  const dispatch = useDispatch();

  // yup
  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be atleat 6 characters")
      .required("Password is required!"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          login(dispatch, values);
        }}
      >
        <div className="formikContainer">
          <Form>
            <div className="loginPage">
              <div className="textField">
                <TextField label="Email" name="email" type="text" />
                <TextField label="Password" name="password" type="password" />
                <button disabled={isFetching}>Log In</button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default Login;
