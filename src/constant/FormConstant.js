export const RETIREMENT_PLAN = {
  "401K": "401K",
  "ROTH_IRA": "ROTH_IRA",
  "HSA": "HSA",
};

/**
 * Default value for the main form
 * @type {{currentAge: number, retirementAge: number, annualContribution: number, annualReturns: number, currentAccValue: number}}
 */
export const formInitialValue = {
  currentAge: 18,
  retirementAge: 65,
  salary: "0",
  currentAccValue: "0",
  annualContribution: "0",
  annualReturns: 0,
  plan: "",
};
/**
 * Types of retirement plans the user can select
 * @type {({name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string})[]}
 */
export const PlanConstant = [
  {
    id: RETIREMENT_PLAN["401K"],
    type: "radio",
    name: "plan",
    label: "401(k)",
  },
  {
    id: RETIREMENT_PLAN["ROTH_IRA"],
    type: "radio",
    name: "plan",
    label: "Roth IRA",
  },
  {
    id: RETIREMENT_PLAN["HSA"],
    type: "radio",
    name: "plan",
    label: "HSA",
  },
];

/**
 * All the form values here so we don't have to pass it in every single time
 * @type {({name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string})[]}
 */
export const FormConstant = [
  {
    id: "currentAccValue",
    type: "text",
    name: "currentAccValue",
    label: "Current Account Value",
  },
  {
    id: "annualContribution",
    type: "text",
    name: "annualContribution",
    label: "Annual Contribution",
  },
  {
    id: "annualReturns",
    type: "number",
    name: "annualReturns",
    label: "Annual Returns",
  },
];

export const BasicInfoConstant = [
  {
    id: "currentAge",
    type: "number",
    name: "currentAge",
    label: "Age",
  },
  {
    id: "retirementAge",
    type: "number",
    name: "retirementAge",
    label: "Retirement Age",
  },
  {
    id: "salary",
    type: "text",
    name: "salary",
    label: "Salary",
  },
  // TODO - Add location (state) constant
];