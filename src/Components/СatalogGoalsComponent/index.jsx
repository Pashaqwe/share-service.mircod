import React from 'react';
import { Wrapper, MainStage, Categories, Heading, SearchNow } from './styles';
import Slider from '../common/Slider';
import GoalsMenu from '../common/GoalsMenu';
import GoalsHeader from '../common/GoalsHeader';
import SearchNowCategories from '../common/SearchNow';

function CatalogGoalsComponent() {
  return (
    <Wrapper>
      <GoalsMenu />
      <MainStage>
        <GoalsHeader />
        <Categories>
          <Heading>Categories</Heading>
          <Slider />
        </Categories>
        <SearchNow>
          <Heading>Сейчас ищут</Heading>
          <SearchNowCategories />
        </SearchNow>
      </MainStage>
    </Wrapper>
  );
}

export default CatalogGoalsComponent;
