const YEAR = new Date().getFullYear();

export const usdFormat = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  currencySign: 'accounting',
});

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

export const getMilestones = chartData => {
  const accountValue = chartData[chartData.length-1].accountValue;
  const milestones = {};
  if (accountValue > 1_000_000) {
    getMillionMilestones(chartData, milestones);
  }

  getCapitalGainsMilestone(chartData, milestones);

  return milestones;
};

export const getEarningsData = chartData => {
  const finalYear = chartData[chartData.length-1];
  const earningsData = [
    { name: "Total Contribution", value: finalYear.totalContribution },
    { name: "Capital Gains", value: finalYear.capitalGains },
  ];
  return earningsData;
};

export const getEmployerMatchData = chartData => {
  const finalYear = chartData[chartData.length-1];
  const matchData = [
    { name: "Your contribution", value: finalYear.contribution },
    { name: "Employer contribution", value: finalYear.totalContribution - finalYear.contribution },
  ];
  return matchData;
};

function getMillionMilestones(chartData, obj) {
  let million = 1_000_000;
  for (let yearData of chartData) {
    if (yearData.accountValue > million) {
      obj[million] = yearData;
      million += million;
    }
  }
}

function getCapitalGainsMilestone(chartData, obj) {
  for (let yearData of chartData) {
    if (yearData.totalContribution < yearData.capitalGains) {
      obj["capitalGains"] = yearData;
      break;
    }
  }
}

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