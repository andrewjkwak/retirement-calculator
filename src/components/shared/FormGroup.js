import React from "react";
import Input from "./Input";

const FormGroup = ({ title, values, formik }) => {
  return (
    <>
      <h3>{ title }</h3>
      { values.map(value => (
        <Input
          key={ value.id }
          onChange={ formik.handleChange }
          value={ formik.values[value.name] }
          error={ formik.errors[value.name] }
          { ...value }
        />
      ))}
    </>
  );
};

export default FormGroup;