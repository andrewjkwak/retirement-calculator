import React from "react";
import { RETIREMENT_PLAN } from "../constant/FormConstant";

const PlanSelect = ({ formik }) => (
  <>
    <label htmlFor="plan">Retirement Plan</label>
    <select name="plan" value={ formik.values.plan } onChange={ formik.handleChange }>
      <option value="">Select a plan</option>
      <option value={RETIREMENT_PLAN["401K"]}>401(k)</option>
      <option value={RETIREMENT_PLAN["ROTH_IRA"]}>Roth IRA</option>
      <option value={RETIREMENT_PLAN["HSA"]}>HSA</option>
    </select>
  </>
);

export default PlanSelect;
