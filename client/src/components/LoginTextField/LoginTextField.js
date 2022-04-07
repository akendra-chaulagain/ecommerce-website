import React from "react";
import { ErrorMessage, useField } from "formik";
import "./LoginTextField.css"

// textField for login page
const LoginTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="loginPageWrapper">
        <label>{label}</label>
        <br />
        <input
          autoComplete="off"
          className={`${meta.touch && meta.error}`}
          {...field}
          {...props}
        />
        <br />
        <span className="error">
          <ErrorMessage name={field.name} />
        </span>
      </div>
    </>
  );
};

export default LoginTextField;
