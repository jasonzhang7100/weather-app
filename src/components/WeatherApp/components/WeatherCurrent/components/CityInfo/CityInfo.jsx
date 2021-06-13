import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 2;
  position: relative;
`;

const CityName = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid white;
  font: 350 2rem "Microsoft Yahei";
  @media screen and (min-width: 767px) {
    position: absolute;
    right: 3rem;
    top: 3rem;
  }
`;

const CityInfo = ({ cityName }) => {
  return (
    <Wrapper>
      <CityName>{cityName}</CityName>
    </Wrapper>
  );
};

export default CityInfo;
