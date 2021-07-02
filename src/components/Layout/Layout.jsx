import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';

const Children = styled.div`
  margin: 3rem 6rem;
`;

const Layout = ({ title, children, searchCity }) => (
  <>
    <Header title={title} searchCity={searchCity} />
    <Children>{children}</Children>
    <Footer />
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  searchCity: PropTypes.func.isRequired,
};

export default Layout;
