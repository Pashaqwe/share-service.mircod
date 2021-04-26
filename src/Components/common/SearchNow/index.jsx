import React, { useState, useEffect } from 'react';
import {
  Item,
  SearchNowItems,
  SearchNowItemWrapper,
  SearchNowItemLogo,
  Heading,
  DescriptionWrapper,
  StyledParagraph,
  StyledSecretImg,
  SecretWrapper,
  StyledSpinnerWrapper,
  StyledLink,
} from './slyled';
import baseUrl from '../../../Api/baseUrl';
import secretImg from './svg/secretImg.png';
import { Facebook } from 'react-spinners-css';

function SearchNowCategories() {
  const [SearchNow, setSearchNow] = useState([]);
  const [Secret, setSecret] = useState(false);

  useEffect(() => {
    baseUrl.get(`/goal/`).then(res => {
      setSearchNow(res.data);
      console.log(res.data);
    });
  }, []);

  if (!SearchNow.length) {
    return (
      <StyledSpinnerWrapper>
        <Facebook />
      </StyledSpinnerWrapper>
    );
  } else {
    return (
      <SearchNowItems>
        {SearchNow.map(item => {
          return (
            <Item key={item.id} background={item.bg_image}>
              <StyledLink to={`/goal/${item.id}/`}>
                <SearchNowItemWrapper>
                  <SearchNowItemLogo src={item.image} alt="" />
                  <DescriptionWrapper>
                    <Heading>{item.title}</Heading>
                    <StyledParagraph>{item.description}</StyledParagraph>
                  </DescriptionWrapper>
                </SearchNowItemWrapper>
              </StyledLink>
            </Item>
          );
        })}
        <Item onClick={() => setSecret(true)}>
          <SecretWrapper secretActive={Secret}>
            <StyledSecretImg src={secretImg} />
          </SecretWrapper>
        </Item>
        <Item></Item>
      </SearchNowItems>
    );
  }
}

export default SearchNowCategories;
