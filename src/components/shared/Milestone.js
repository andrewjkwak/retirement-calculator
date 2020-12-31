import React from "react";
import { usdFormat } from "../../utils/getChartData";

const Milestone = ({ milestone, value }) => {
  return (
    <p>Your account passed { usdFormat.format(milestone) } in { value.year } with an account balance of { usdFormat.format(value.accountValue) }.</p>
  );
};

export default Milestone;