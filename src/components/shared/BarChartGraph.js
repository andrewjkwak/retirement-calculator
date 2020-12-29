import React from "react";
import { BarChart } from "recharts";
import { useChartDimensions } from "../../hooks/useChartDimensions";
import { BarChartContainer } from "../../styles/MainStyles";

const BarChartGraph = ({ chartData, children }) => {
  const [ref, dimensions] = useChartDimensions();
  console.log({ chartData, dimensions });
  return (
    <BarChartContainer ref={ ref }>
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
    </BarChartContainer>
  );
};

export default BarChartGraph;