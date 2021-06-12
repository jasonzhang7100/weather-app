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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.passCityName = this.passCityName.bind(this);
  }

  myRef = React.createRef();

  passCityName() {
    const { searchCity } = this.props;
    const { value } = this.myRef.current;
    console.log(value);
    searchCity(value);
  }

  render() {
    const { title } = this.props;
    return (
      <NavBar>
        <LoginMenu>Login</LoginMenu>
        <Title>{title}</Title>
        <Search>
          <SearchInput ref={this.myRef} />
          <SearchButton onClick={this.passCityName}>SEARCH</SearchButton>
        </Search>
      </NavBar>
    );
  }
}

export default Header;
