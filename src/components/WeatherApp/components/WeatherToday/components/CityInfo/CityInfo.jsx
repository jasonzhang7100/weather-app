import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 2;
  position: relative;
`;

const CityName = styled.div`
  width: 8rem;
  padding: 0.5rem;
  border-bottom: 2px solid black;
  font: 350 2rem "Microsoft Yahei";
  @media screen and (min-width: 767px) {
    position: absolute;
    right: 3rem;
    top: 3rem;
  }
`;

const CityInfo = () => {
  return (
    <Wrapper>
      <CityName>Sydney</CityName>
    </Wrapper>
  );
};

export default CityInfo;
