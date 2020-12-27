import React from "react";
import ReactTooltip from "react-tooltip";
import "../../styles/styles.css";
import { StyledError } from "../../styles/FormStyles";
import { FormTooltipInfo } from "../../constant/FormConstant";
import AddIcon from "./AddIcon";

const Input = ({ label, error, ...props }) => {
  return (
    <>
      <label htmlFor={ props.id }>
        { label } <span data-tip={ FormTooltipInfo[props.id] }><AddIcon /></span>
      </label>
      <input { ...props } />
      { error &&
        <StyledError>{ error }</StyledError>
      }
      <ReactTooltip />
    </>
  );
};

export default Input;