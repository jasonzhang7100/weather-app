import React from "react";
import styled from "styled-components";

const FooterBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: #000;
  color: #fff;
  line-height: 2.5rem;
  text-align: center;
`;

const Footer = () => {
  return <FooterBar>Designed by Jason Zhang</FooterBar>;
};

export default Footer;
