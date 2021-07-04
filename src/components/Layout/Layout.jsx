import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import backgroundImage from '../../assets/images/background.jpeg';

const Background = styled.div`
  overflow: hidden;
  min-width: 375px;
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat fixed center;
  background-size: cover;
`;

const Children = styled.div`
  overflow: hidden;
  margin: 6rem 4rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 16px rgb(0, 0, 0, 0.5);
  @media screen and (max-width: 767px) {
    margin: 4rem 1rem;
  }
`;

const Layout = ({ children, searchCity }) => (
  <Background>
    <Header searchCity={searchCity} />
    <Children>{children}</Children>
    <Footer />
  </Background>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  searchCity: PropTypes.func.isRequired,
};

export default Layout;
