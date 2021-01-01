import React from "react";
import { BarChart } from "recharts";
import { useChartDimensions } from "../../hooks/useChartDimensions";
import { FullChartContainer } from "../../styles/MainStyles";

const BarChartGraph = ({ chartData, children }) => {
  const [ref, dimensions] = useChartDimensions();
  return (
    <FullChartContainer ref={ ref }>
      <BarChart
        width={ dimensions.width }
        height={ dimensions.height }
        data={ chartData }
        margin={{
          top: dimensions.marginTop,
          right: dimensions.marginRight,
          bottom: dimensions.marginBottom,
          left: dimensions.marginLeft,
        }}
      >
        { children }
      </BarChart>
    </FullChartContainer>
  );
};

export default BarChartGraph;