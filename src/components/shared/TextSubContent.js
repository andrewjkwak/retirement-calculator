import React from "react";
import { SubContentContainer, SubContentTitle, TextContent } from "../../styles/MainStyles";

const TextSubContent = ({ subcontent }) => (
  <SubContentContainer>
    <SubContentTitle>{ subcontent.title }</SubContentTitle>
    <TextContent>{ subcontent.content }</TextContent>
  </SubContentContainer>
);

export default TextSubContent;