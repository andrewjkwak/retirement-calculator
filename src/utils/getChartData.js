const YEAR = new Date().getFullYear();

/**
 * @year - the year associated with the values
 * @contribution - how much the user contributed, alone
 * @totalContribution - user contribution + employer match
 * @capitalGains - how much money the user made off returns up to that year
 * @expenseRatio - total cost of expense ratio fee up to that year 
 * @inflation - total amount the account depreciated due to inflation THAT year
 * @accountValue - value of account after subtracting the expenseRatio fees and inflation
 */

export const getChartData = userData => {
  // Convert all the values of userData to a number
  convertDataToNumber(userData);
  // Years working
  const years = userData.retirementAge - userData.currentAge;
  // Starting balance
  const startingBalance = userData.currentAccValue;
  // Employer Match
  const employerMatch = getEmployerMatch(userData);
  const chartData = [];
  // The default value for the first year.
  chartData.push({
    year: YEAR,
    contribution: startingBalance,
    totalContribution: startingBalance,
    capitalGains: 0,
    expenseRatio: 0,
    inflation: 0,
    accountValue: startingBalance,
  });

  for (let i = 1; i <= years; i++) {
    const previousTotals = chartData[i-1];
    const year = YEAR + i;
    const contribution = previousTotals.contribution + userData.annualContribution;
    const totalContribution = contribution + employerMatch;
    
    const accValue = previousTotals.accountValue + userData.annualContribution + employerMatch;
    const capitalGains = accValue * (userData.annualReturnRate / 100);
    const totalCapitalGains = previousTotals.capitalGains + capitalGains;
    const total = accValue + capitalGains;
    const expenseRatio = total * .003;
    const totalExpenseRatio = previousTotals.expenseRatio + expenseRatio;
    const inflation = (total - expenseRatio) * .02;
    const totalInflation = previousTotals.inflation + inflation;
    const accountValue = total - inflation - expenseRatio;

    chartData.push({
      year,
      contribution,
      totalContribution,
      capitalGains: totalCapitalGains,
      expenseRatio: totalExpenseRatio,
      inflation: totalInflation,
      accountValue,
    });
  }
  return chartData;
};

function getEmployerMatch(userData) {
  const employerMatch = userData.salary * (userData.employerMatchRate / 100);
  return userData.annualContribution < employerMatch ? userData.annualContribution : employerMatch;
}

function convertDataToNumber(userData) {
  Object.keys(userData).forEach(key => {
    if (key !== "plan") {
      userData[key] = Number(userData[key]);
    }
  });
}