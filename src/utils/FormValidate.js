export const formValidate = values => {
  const errors = {};
  // Age error-checking
  if (Number(values.currentAge) === 0) {
    errors.currentAge = "Current Age must be a valid number.";
  } else if (values.currentAge < 18) {
    errors.currentAge = "Must be 18 or older to contribute.";
  } else if (values.age > values.retirementAge) {
    errors.currentAge = "Retirement Age must be greater than your current age.";
  }
  // Retirement Age error-checking
  if (Number(values.retirementAge) === 0) {
    errors.retirementAge = "Retirement Age must be a valid number.";
  } else if (values.retirementAge < values.currentAge) {
    errors.retirementAge = "Retirement Age must be greater than your current age.";
  }
  // Salary error-checking
  if (isNaN(values.salary)) {
    errors.salary = "Salary must be a valid number.";
  }
  // Current Account Value error-checking
  if (isNaN(values.currentAccValue)) {
    errors.currentAccValue = "Current Account Value must be a valid number.";
  } else if (Number(values.currentAccValue) < 0) {
    errors.currentAccValue = "Current Account Value cannot be less than 0.";
  }
  // Annual Contribution error-checking
  if (isNaN(values.annualContribution)) {
    errors.annualContribution = "Annual Contribution must be a valid number.";
  } else if (Number(values.annualContribution) < 0) {
    errors.annualContribution = "Annual Contribution cannot be less than 0.";
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
