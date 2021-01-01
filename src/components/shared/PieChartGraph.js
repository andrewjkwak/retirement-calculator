import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { useChartDimensions } from "../../hooks/useChartDimensions";

import { SecondaryChartContainer } from "../../styles/MainStyles";


const PieChartGraph = ({ data }) => {
  const [ref, dimensions] = useChartDimensions();

  const radius = (Math.min(dimensions.height, dimensions.width) / 2) - 20;

  return (
    <SecondaryChartContainer ref={ ref }>
      <PieChart width={ dimensions.width } height={ dimensions.height }>
        <Pie dataKey="value" data={ data } cx={dimensions.width / 2} cy={dimensions.height / 2} outerRadius={radius} fill="green" />
        <Tooltip />
      </PieChart>
    </SecondaryChartContainer>
  );
};

export default PieChartGraph;