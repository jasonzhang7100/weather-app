import styled from 'styled-components';

const VerticleDivider = styled.div`
  width: 2px;
  height: ${({ height }) => height};
  border-radius: 1px;
  background-color: ${({ color }) => color};
  @media screen and (max-width: ${({ threshold }) => threshold}) {
    display: none;
  }
`;

export default VerticleDivider;
