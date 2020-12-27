import React from "react";
import { AsideContainer, MainContainer, ContentContainer } from "../styles/MainStyles";
import InformationDisplay from "./InformationDisplay";

// Component imports
import InformationForm from "./InformationForm";

const RetirementCalculator = () => (
  <MainContainer>
    <AsideContainer>
      <InformationForm />
    </AsideContainer>
    <ContentContainer>
      <InformationDisplay />
    </ContentContainer>
  </MainContainer>
)

export default RetirementCalculator;
