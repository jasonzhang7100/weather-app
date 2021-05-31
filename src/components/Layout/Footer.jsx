import React from "react";
import styled from "styled-components";

const FooterBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const Footer = () => {
  return <FooterBar>Designed by Jason Zhang</FooterBar>;
};

export default Footer;
