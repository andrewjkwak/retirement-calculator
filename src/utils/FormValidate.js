export const formValidate = values => {
  const errors = {};
  // Age error-checking
  if (values.currentAge < 18) {
    errors.currentAge = "Must be 18 or older to contribute.";
  }
  if (values.age > values.retirementAge) {
    errors.currentAge = "Retirement Age should be greater than your current age.";
  }
  // Retirement Age error-checking
  if (values.retirementAge < values.currentAge) {
    errors.retirementAge = "Retirement Age should be greater than your current age.";
  }
  // Current Account Value error-checking
  if (isNaN(values.currentAccValue)) {
    errors.currentAccValue = "Current Account Value should be a valid number.";
  }
  // Annual Contribution error-checking
  if (isNaN(values.annualContribution)) {
    errors.annualContribution = "Annual Contribution should be a valid number.";
  }
  if (values.currentAge < 50 && Number(values.annualContribution) > 19_500) {
    errors.annualContribution = "Annual Contribution limit is $19,500";
  }
  if (values.currentAge >= 50 && Number(values.annualContribution) > 26_000) {
    errors.annualContribution = "Annual Contribution + Catch Up Limit is $26000";
  }
  // Annual Returns error-checking
  if (values.annualReturns === "") {
    errors.annualReturns = "Annual Returns should be a valid number.";
  }
  return errors;
};