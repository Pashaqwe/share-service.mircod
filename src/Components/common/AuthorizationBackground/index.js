import styled from 'styled-components';

const AuthorizationBackground = styled.div`
  width: 478px;
  height: 100vh;
  background-color: #2c353d;
  z-index: 10;
  position: absolute;
  margin-left: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 914px) {
    width: 315px;
  }
`;

export default AuthorizationBackground;
