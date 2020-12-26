import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { formInitialValue, BasicInfoConstant, RETIREMENT_PLAN, FormConstant } from "../constant/FormConstant";
import { FormContainer } from "../styles/FormStyles";
import { formValidate } from "../utils/FormValidate";

import FormGroup from "./shared/FormGroup";
import AddIcon from "./shared/AddIcon";

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
        <select name="plan" value={ formik.values.plan } onChange={ formik.handleChange }>
          <option value="">Select a plan</option>
          <option value={RETIREMENT_PLAN["401K"]}>401(k)</option>
          <option value={RETIREMENT_PLAN["ROTH_IRA"]}>Roth IRA</option>
          <option value={RETIREMENT_PLAN["HSA"]}>HSA</option>
        </select>
        { formik.values.plan &&
          <FormGroup
            values={ FormConstant }
            formik={ formik }
          />
        }
      </FormContainer>
    </Formik>

  );
}

export default InformationForm;