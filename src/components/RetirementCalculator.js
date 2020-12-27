import React from "react";
import { AppContainer, HeaderContainer, AsideContainer, MainContainer, ContentContainer } from "../styles/MainStyles";

import Header from "./Header";
import InformationDisplay from "./InformationDisplay";
import InformationForm from "./InformationForm";

const RetirementCalculator = () => (
  <AppContainer>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <MainContainer>
      <AsideContainer>
        <InformationForm />
      </AsideContainer>
      <ContentContainer>
        <InformationDisplay />
      </ContentContainer>
    </MainContainer>
  </AppContainer>
)

export default RetirementCalculator;
