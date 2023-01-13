import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: max-content;
  padding: 0.75em 1.25em;
  background-color: #006644;
  border: 0;
  outline: 0;
`;
const Button = (props) => {
  return <ButtonStyles>{props.btnText}</ButtonStyles>;
};

export default Button;
