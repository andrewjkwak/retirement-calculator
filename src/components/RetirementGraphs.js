import React from "react";
import { GraphContainer } from "../styles/MainStyles";
import { getEarningsData, getEmployerMatchData } from "../utils/getChartData";

import PieChartGraph from "./shared/PieChartGraph";

const RetirementGraphs = ({ chartData }) => {
  const earningsData = getEarningsData(chartData);
  const matchData = getEmployerMatchData(chartData);
  

  return (
    <GraphContainer>
      <PieChartGraph data={ earningsData } />
      <PieChartGraph data={ matchData } />
      <PieChartGraph data={ earningsData } />
    </GraphContainer>
  );
};

export default RetirementGraphs;