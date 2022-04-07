import React from "react";
import { ErrorMessage, useField } from "formik";
import "./RegisterTextField.css";

const RegisterTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="registerPageWrapper">
        <label className="formTitleLabel">{label}</label>

        <input
          autoComplete="off"
          className={`${meta.touch && meta.error}`}
          {...field}
          {...props}
        />
        <p className="error">
          <ErrorMessage name={field.name} />
        </p>
      </div>
    </>
  );
};

export default RegisterTextField;
