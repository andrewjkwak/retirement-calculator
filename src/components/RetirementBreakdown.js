import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import TextGroup from "./shared/TextGroup";

import { BreakdownContainer } from "../styles/MainStyles";
import { useChartDimensions } from "../hooks/useChartDimensions";
import BarChartGraph from "./shared/BarChartGraph";
import { UNDERSTANDING_GRAPH } from "../constant/TextConstant";

const RetirementBreakdown = ({ chartData }) => {
  return (
    <BreakdownContainer>
      <TextGroup text={ UNDERSTANDING_GRAPH } />
      <BarChartGraph chartData={ chartData }>
        <XAxis dataKey="year" />
        <YAxis />
        <Legend />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="totalContribution" name="Total Contribution" stackId="a" fill="lightblue" />
        <Bar dataKey="capitalGains" name="Capital Gains" stackId="a" fill="green" />
        <Bar dataKey="expenseRatio" name="Expense Ratio" stackId="a" fill="pink" />
        <Bar dataKey="inflation" name="Inflation" stackId="a" fill="red" />
      </BarChartGraph>
    </BreakdownContainer>
  );
};

export default RetirementBreakdown;