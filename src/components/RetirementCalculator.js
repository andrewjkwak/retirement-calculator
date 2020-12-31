import React, { useState, useMemo } from "react";
import { AppContainer, HeaderContainer, AsideContainer, MainContainer, ContentContainer } from "../styles/MainStyles";
import { getChartData } from "../utils/getChartData";
import Header from "./Header";
import InformationDisplay from "./InformationDisplay";
import InformationForm from "./InformationForm";
import RetirementBreakdown from "./RetirementBreakdown";

const RetirementCalculator = () => {
  const [userData, setUserData] = useState({});
  const chartData = useMemo(() => getChartData(userData), [userData]);
  
  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <InformationForm handleSubmit={ setUserData } pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <ContentContainer>
          {
            Object.keys(userData).length ?
              <RetirementBreakdown chartData={ chartData } /> :
              <InformationDisplay />
          }
        </ContentContainer>
      </MainContainer>
    </AppContainer>
  );
};

export default RetirementCalculator;
