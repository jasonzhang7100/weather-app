import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Children = styled.div`
  margin: 3rem;
`;

const Layout = ({ title, children }) => (
  <div>
    <Header title={title} />
    <Children>{children}</Children>
    <Footer />
  </div>
);

export default Layout;
