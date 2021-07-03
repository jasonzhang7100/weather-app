import React from 'react';
import styled from 'styled-components';

import VerticleDivider from '../../../VerticleDivider';

const Wrapper = styled.div`
  flex: 1;
  @media screen and (max-width: 767px) {
    order: 1;
  }
`;

const InfoCard = styled.div`
  width: 20rem;
  margin: 6rem auto;
`;

const TempMetric = styled.div`
  width: 100%;
  font-size: 4rem;
  text-align: center;
`;

const WeatherMetirc = styled.div`
  width: 100%;
  text-align: center;
`;

const OtherMetirc = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
`;

const WeatherCurrentInfo = ({ weatherCurrent }) => {
  const { tempCurrent, conditionCurrent, humidityCurrent, windCurrent } =
    weatherCurrent;
  return (
    <Wrapper>
      <InfoCard>
        <TempMetric>
          {tempCurrent}
          °C
        </TempMetric>
        <WeatherMetirc>{conditionCurrent}</WeatherMetirc>
        <OtherMetirc>
          <div>HUMIDITY {humidityCurrent}%</div>
          <VerticleDivider height={'1rem'} color={'#fff'} />
          <div>WIND {windCurrent}K/M</div>
        </OtherMetirc>
      </InfoCard>
    </Wrapper>
  );
};

export default WeatherCurrentInfo;
