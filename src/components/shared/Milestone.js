import React from "react";
import { usdFormat } from "../../utils/getChartData";

const Milestone = ({ milestone, value }) => {
  if (milestone === "capitalGains") {
    return <p>Your capital gains ({ usdFormat.format(value.capitalGains) }) passed your total contribution ({ usdFormat.format(value.totalContribution) }) in { value.year }.</p>
  }
  return (
    <p>Your account passed { usdFormat.format(milestone) } in { value.year } with an account balance of { usdFormat.format(value.accountValue) }.</p>
  );
};

export default Milestone;