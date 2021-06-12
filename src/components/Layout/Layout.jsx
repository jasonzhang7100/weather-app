import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Children = styled.div`
  margin: 3rem 6rem;
`;

const Layout = ({ title, children, searchCity }) => (
  <React.Fragment>
    <Header title={title} searchCity={searchCity} />
    <Children>{children}</Children>
    <Footer />
  </React.Fragment>
);

export default Layout;
