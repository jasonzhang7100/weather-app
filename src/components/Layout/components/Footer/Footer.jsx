import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: #000;
  color: #fff;
  line-height: 2.5rem;
  text-align: center;
`;

const Footer = () => <Wrapper>Designed by Jason Zhang</Wrapper>;

export default Footer;
