import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  background-color: #000;
  color: #fff;
`;

const LoginMenu = styled.span``;

const Title = styled.span``;

const Search = styled.div``;

const SearchInput = styled.input``;

const SearchButton = styled.button``;

const Header = ({ title }) => (
  <NavBar>
    <LoginMenu>Login</LoginMenu>
    <Title>{title}</Title>
    <Search>
      <SearchInput />
      <SearchButton>SEARCH</SearchButton>
    </Search>
  </NavBar>
);

export default Header;
