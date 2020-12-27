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
  salary: "55000",
  currentAccValue: "0",
  annualContribution: "0",
  annualReturnRate: 0,
  employerMatchRate: 0,
  plan: "",
};

/**
 * All the form values here so we don't have to pass it in every single time
 * @type {({name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string}|{name: string, id: string, label: string, type: string})[]}
 */
export const FormConstant = [
  {
    id: "currentAccValue",
    type: "text",
    name: "currentAccValue",
    label: "Current Account Value ($)",
  },
  {
    id: "annualContribution",
    type: "text",
    name: "annualContribution",
    label: "Annual Contribution ($)",
  },
  {
    id: "employerMatchRate",
    type: "number",
    name: "employerMatchRate",
    label: "Employer Match Rate (%)",
  },
  {
    id: "annualReturnRate",
    type: "number",
    name: "annualReturnRate",
    label: "Annual Return Rate (%)",
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
    label: "Salary ($)",
  },
  // TODO - Add location (state) constant
];

export const FormTooltipInfo = {
  currentAge: "Your current age.",
  retirementAge: "The age you'll want to retire at.",
  salary: "How much you currently make in a year.",
  currentAccValue: "How much you have in your retirement fund.",
  annualContribution: "How much you'll contribute annually.",
  employerMatchRate: "If your employer offers a match, add the rate here.",
  annualReturnRate: "Estimate your return rate per year.",
};