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
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    const { value } = e.target;
    this.setState({ cityName: value.replace(/^\S/, (s) => s.toUpperCase()) });
  }

  handleEnterKey(e) {
    const { cityName } = this.state;
    const { searchCity } = this.props;
    if (e.nativeEvent.keyCode === 13 && cityName) {
      searchCity(cityName);
    }
  }

  handleClick() {
    const { cityName } = this.state;
    const { searchCity } = this.props;
    if (!cityName) { return; }
    searchCity(cityName);
  }

  render() {
    const { title } = this.props;
    return (
      <NavBar>
        <LoginMenu>Login</LoginMenu>
        <Title>{title}</Title>
        <Search>
          <SearchInput
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnterKey}
          />
          <SearchButton onClick={this.handleClick}>SEARCH</SearchButton>
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
