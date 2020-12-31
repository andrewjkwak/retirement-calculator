import React from "react";
import { CardContainer } from "../../styles/MainStyles";

const InfoCard = ({ title, children }) => (
  <CardContainer>
    <h3>{ title }</h3>
    <div>
      { children }  
    </div>
  </CardContainer>
);

export default InfoCard;