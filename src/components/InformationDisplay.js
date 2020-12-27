import React from "react";
import TextGroup from "./shared/TextGroup";
import { HOW_MUCH, HOW_THIS_WORKS, WHICH_PLAN } from "../constant/TextConstant";

const InformationDisplay = () => {
  return (
    <div>
      <h1>Retirement Calculator</h1>
      <TextGroup text={ HOW_THIS_WORKS} />
      <TextGroup text={ HOW_MUCH } />
      <TextGroup text={ WHICH_PLAN } />
    </div>
  );
};

export default InformationDisplay;