import React from "react";
import { useField } from "formik";
import "../../styles/styles.css";
import { StyledError } from "../../styles/FormStyles";

const Input = ({ label, error, ...props }) => {
  return (
    <>
      <label
        htmlFor={ props.id }
      >
        { label}
      </label>
      <input { ...props } />
      { error &&
        <StyledError>{ error }</StyledError>
      }
    </>
  );
};

export default Input;