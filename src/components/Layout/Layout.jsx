import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Children = styled.div`
  margin: 3rem 5rem;
`;

const Layout = ({ title, children }) => (
  <React.Fragment>
    <Header title={title} />
    <Children>{children}</Children>
    <Footer />
  </React.Fragment>
);

export default Layout;
