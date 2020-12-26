import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border: 1px solid black;
  padding: 10px;
`;

export const PlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledError = styled.p`
  margin: 5px 10px;
  color: maroon;
  font-size: 0.9rem;
`;