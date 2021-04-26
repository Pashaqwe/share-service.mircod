import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  StyledSlider,
  StyledImage,
  StyledTitle,
  StyledSliderCard,
  StyledPrevArrow,
  StyledNextArrow,
  StyledSpinnerWrapper,
} from './styled';
import baseUrl from '../../../Api/baseUrl';
import { Ellipsis } from 'react-spinners-css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slider() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    baseUrl.get(`/goal/categories/`).then(res => {
      setCategories(res.data);
      console.log(res.data);
    });
  }, []);

  function PrevArrow(props) {
    const { onClick } = props;
    return <StyledPrevArrow onClick={onClick} />;
  }

  function NextArrow(props) {
    const { onClick } = props;
    return <StyledNextArrow onClick={onClick} />;
  }

  const background = (str, s, l) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  };

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!Categories.length) {
    return (
      <StyledSpinnerWrapper>
        <Ellipsis />
      </StyledSpinnerWrapper>
    );
  } else {
    return (
      <StyledSlider {...settings}>
        {Categories.map(item => {
          return (
            <StyledSliderCard
              key={item.id}
              background={() => background(item.title, 40, 60)}
            >
              <Wrapper>
                <StyledImage src={item.image} alt="" />
                <StyledTitle>{item.title}</StyledTitle>
              </Wrapper>
            </StyledSliderCard>
          );
        })}
      </StyledSlider>
    );
  }
}

export default Slider;
