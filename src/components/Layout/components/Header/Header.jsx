import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 2.5rem;
  align-items: center;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.div`
  padding-left: 0.8rem;
`;

const SearchArea = styled.div`
  padding-right: 0.8rem;
  margin-left: auto;
`;

const SearchInput = styled.input`
  height: 1rem;
  box-shadow: none;
  outline: none;
`;

const SearchButton = styled.button`
  margin-left: 0.2rem;
  height: 1.4rem;
  font-size: 0.6rem;
  cursor: pointer;
`;

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
    if (!cityName) {
      return;
    }
    searchCity(cityName);
  }

  render() {
    return (
      <Wrapper>
        <Logo>Weather Logo</Logo>
        <SearchArea>
          <SearchInput
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnterKey}
          />
          <SearchButton onClick={this.handleClick}>SEARCH CITY</SearchButton>
        </SearchArea>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  searchCity: PropTypes.func.isRequired,
};

export default Header;
