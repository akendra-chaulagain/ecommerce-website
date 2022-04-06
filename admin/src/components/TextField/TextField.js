import React from "react";
import { ErrorMessage, useField } from "formik";
import "./TextField.css";

const TextField = ({ label, ...props }) => {
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
        <span className="error">
          <ErrorMessage name={field.name} />
        </span>
      </div>
    </>
  );
};

export default TextField;
