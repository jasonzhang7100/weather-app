import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import backgroundImage from '../../assets/images/background.jpeg';

const Background = styled.div`
  overflow: hidden;
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat fixed center;
  background-size: cover;
`;

const Children = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 6rem 4rem;
  border-radius: 0.5rem;
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
