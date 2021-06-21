import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    this.state = { cityName: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ cityName: e.target.value });
  }

  render() {
    const { title, searchCity } = this.props;
    const { cityName } = this.state;
    return (
      <NavBar>
        <LoginMenu>Login</LoginMenu>
        <Title>{title}</Title>
        <Search>
          <SearchInput value={cityName} onChange={this.handleInputChange} />
          <SearchButton
            onClick={() => {
              searchCity(cityName);
            }}
          >
            SEARCH
          </SearchButton>
        </Search>
      </NavBar>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchCity: PropTypes.func.isRequired,
};

export default Header;
