import React, { useMemo } from "react";
import { getMilestones } from "../utils/getChartData";
import { InfoContainer } from "../styles/MainStyles";

import Milestone from "./shared/Milestone";
import InfoCard from "./shared/InfoCard";

const AccountFacts = ({ chartData }) => {
  const milestones = useMemo(() => getMilestones(chartData), [chartData]);
  const Milestones = Object.entries(milestones).map(([key, value]) => (
    <Milestone key={ key } milestone={ key } value={ value } />
  ));
  return (
    <InfoContainer>
      <InfoCard title="Milestones 🚀">
        { Milestones }
      </InfoCard>
      <InfoCard />
      <InfoCard />
    </InfoContainer>
  );
};

export default AccountFacts;