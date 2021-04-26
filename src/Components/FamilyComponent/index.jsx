import React, { useEffect, useState } from 'react';
import GoalsMenu from '../common/GoalsMenu';
import {
  Wrapper,
  MainStage,
  StyledGoalsHeader,
  StyledLogo,
  ContentWrapper,
  NameAndLogoWrapper,
  StyledHeading,
  StyledFamilyHeader,
  StyledButton,
  StyledDiscription,
  LogoNameButtonWrapper,
} from './styled';
import baseUrl from '../../Api/baseUrl';
import { useSelector } from 'react-redux';

function FamilyComponent(props) {
  const [family, setFamily] = useState({});

  useEffect(() => {
    baseUrl.get(`/goal/${props.id}/`).then(res => {
      setFamily(res.data);
      console.log(res.data);
    });
  }, [props.id]);

  const user = useSelector(state => state.users.userInfo);

  const JoinInFamily = data => {
    baseUrl
      .post(`/goal/${props.id}/join/`, data, {
        headers: {
          Authorization: `Token ${user.auth_token}`,
        },
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <Wrapper>
      <GoalsMenu />
      <MainStage>
        <StyledGoalsHeader />
        <StyledFamilyHeader background={family.bg_image}></StyledFamilyHeader>
        <ContentWrapper>
          <LogoNameButtonWrapper>
            <NameAndLogoWrapper>
              <StyledLogo src={family.image} alt="" />
              <StyledHeading>{family.title}</StyledHeading>
            </NameAndLogoWrapper>
            <StyledButton onClick={() => JoinInFamily(user)}>
              Вступить в тусу
            </StyledButton>
          </LogoNameButtonWrapper>
          <StyledDiscription>{family.description}</StyledDiscription>
        </ContentWrapper>
      </MainStage>
    </Wrapper>
  );
}

export default FamilyComponent;
