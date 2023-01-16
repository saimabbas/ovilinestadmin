import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  & p {
    margin: 0;
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <p>Admin Admin (e-mail address)</p>
    </FooterStyles>
  );
};

export default Footer;
