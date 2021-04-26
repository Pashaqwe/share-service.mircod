import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  background-color: #1e252b;
  display: flex;
  position: absolute;
  right: 0;
  overflow: hidden;
`;

export const MainStage = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 80px 60px 80px;
  @media (max-width: 992px) {
    margin: 0 40px 60px 40px;
  }
  @media (max-width: 320px) {
    margin: 0 15px 60px 15px;
  }
`;

export const Heading = styled.h2`
  color: #ffffff;
  font-family: Gilroy;
  font-size: 36px;
  line-height: 44px;
  margin-left: 10px;
`;

export const SearchNow = styled.div`
  margin: 0 80px 60px 80px;
  @media (max-width: 992px) {
    margin: 0 40px 60px 40px;
  }
  @media (max-width: 320px) {
    margin: 0 15px 60px 15px;
  }
`;
