import React from "react";
import styled from "styled-components";

const ErrorP = styled.p`
  font-size: 0.85rem;
  color: #dc3545;
  margin: 0.5rem 0 1.5rem 0;
  width: 100%;
`;
const ErrorMsg = (props) => {
  return <ErrorP>{props.ErrorText}</ErrorP>;
};

export default ErrorMsg;
