import React from "react";
import { Formik, useFormik } from "formik";
import { formInitialValue, BasicInfoConstant, FormConstant } from "../constant/FormConstant";
import { FormContainer } from "../styles/FormStyles";
import { formValidate } from "../utils/FormValidate";

import FormGroup from "./shared/FormGroup";
import PlanSelect from "./PlanSelect";

const InformationForm = ({ handleSubmit }) => {

  const formik = useFormik({
    initialValues: formInitialValue,
    validate: formValidate,
    onSubmit: handleSubmit,
  });

  return (
    <Formik>
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
        <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Calculate</button>
      </FormContainer>
    </Formik>

  );
}

export default InformationForm;