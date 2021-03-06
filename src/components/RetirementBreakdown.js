import React from "react";
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { BreakdownContainer } from "../styles/MainStyles";
import { usdFormat } from "../utils/getChartData";

import BarChartGraph from "./shared/BarChartGraph";
import RetirementGraphs from "./RetirementGraphs";
import AccountFacts from "./AccountFacts";

const RetirementBreakdown = ({ chartData }) => {

  const tooltipFormatter = value => {
    return usdFormat.format(value);
  };

  return (
    <BreakdownContainer>
      <h1>Retirement Breakdown 🎉</h1>
      <BarChartGraph chartData={ chartData }>
        <XAxis dataKey="year" />
        <YAxis />
        <Legend />
        <Tooltip formatter={ tooltipFormatter } />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="totalContribution" name="Total Contribution" stackId="a" fill="lightblue" />
        <Bar dataKey="capitalGains" name="Capital Gains" stackId="a" fill="green" />
        <Bar dataKey="expenseRatio" name="Expense Ratio" stackId="a" fill="pink" />
        <Bar dataKey="inflation" name="Inflation" stackId="a" fill="red" />
      </BarChartGraph>
      <RetirementGraphs chartData={ chartData } />
      <AccountFacts chartData={ chartData } />
    </BreakdownContainer>
  );
};

export default RetirementBreakdown;