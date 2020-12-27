import React from "react";
import { TextGroupContainer, TextTitle, TextContent } from "../../styles/MainStyles";

import TextSubContent from "./TextSubContent";

const TextGroup = ({ text }) => {

  const SubContents = text.subcontent && text.subcontent.map(subcontent => (
    <TextSubContent key={ subcontent.title } subcontent={ subcontent } />
  ));

  return (
    <TextGroupContainer>
      <TextTitle>{ text.title }</TextTitle>
      <TextContent>{ text.content }</TextContent>
      { SubContents }
    </TextGroupContainer>
  );
};

export default TextGroup;