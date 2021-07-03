import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CityName = styled.div`
  padding: 0 1rem 1rem 1rem;
  border-bottom: 3px solid white;
  font-size: 3rem;
`;

const CityInfo = ({ cityName }) => (
  <Wrapper>
    <CityName>{cityName}</CityName>
  </Wrapper>
);

export default CityInfo;
