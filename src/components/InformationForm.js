import React from "react";
import { Formik, useFormik } from "formik";
import { formInitialValue, BasicInfoConstant, FormConstant } from "../constant/FormConstant";
import { FormContainer } from "../styles/FormStyles";
import { formValidate } from "../utils/FormValidate";

import FormGroup from "./shared/FormGroup";
import PlanSelect from "./PlanSelect";

const InformationForm = () => {

  const formik = useFormik({
    initialValues: formInitialValue,
    validate: formValidate,
    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <Formik 
      initialValues={formInitialValue}
      validate={formValidate}
      onSubmit={values => { console.log(values)}}
    >
      <FormContainer onSubmit={ formik.handleSubmit }>
        <FormGroup
          title={ "Basic Information" }
          values={ BasicInfoConstant }
          formik={ formik }
        />
        <PlanSelect formik={ formik } />
        { formik.values.plan &&
          <FormGroup
            values={ FormConstant }
            formik={ formik }
          />
        }
        <button type="submit">Calculate</button>
      </FormContainer>
    </Formik>

  );
}

export default InformationForm;