import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dummy from "../../dummy.json";
import PrevArrow from "../img/prev.svg";
import NextArrow from "../img/next.svg";

const Hot = () => {
  const slickRef = useRef(null);

  const prevArrow = useCallback(() => slickRef.current.slickPrev(), []);
  const nextArrow = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: (
      <PrevBtn onClick={prevArrow}>
        <img src={PrevArrow} alt="이미지" />
      </PrevBtn>
    ),
    nextArrow: (
      <NextBtn onClick={nextArrow}>
        <img src={NextArrow} alt="이미지" />
      </NextBtn>
    ),
  };

  return (
    <Wrap>
      <Slider ref={slickRef} {...settings}>
        {Dummy.hot.map((program) => (
          <Item key={program.id}>
            <Img src={program.img}></Img>
            <Title>{program.title}</Title>
            <Address>{program.address}</Address>
          </Item>
        ))}
      </Slider>
    </Wrap>
  );
};

export default Hot;

const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  display: inline-flex;
  height: 356px;
  padding: 30px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid #666;
  background: #fff;
  box-shadow: 0px 30px 44px 0px rgba(198, 198, 198, 0.25);
`;

const Img = styled.img`
  width: 270px;
  height: 212px;
  flex-shrink: 0;
  border-radius: 30px;
`;

const Title = styled.p`
  color: #1b1b1b;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Address = styled.p`
  color: #5c5c5c;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PrevBtn = styled.button`
  position: relative;
  left: 0;
  border: none;
  background-color: white;
  margin-right: 36px;
`;

const NextBtn = styled.button`
  right: 0;
  border: none;
  background-color: white;
  margin-left: 36px;
`;
