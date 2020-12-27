import React from "react";
import TextGroup from "./shared/TextGroup";
import { DisplayContainer } from "../styles/MainStyles";
import { HOW_MUCH, HOW_IT_WORKS, WHICH_PLAN } from "../constant/TextConstant";

const InformationDisplay = () => {
  return (
    <DisplayContainer>
      <TextGroup text={ HOW_IT_WORKS } />
      <TextGroup text={ HOW_MUCH } />
      <TextGroup text={ WHICH_PLAN } />
    </DisplayContainer>
  );
};

export default InformationDisplay;