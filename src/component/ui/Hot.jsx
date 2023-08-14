import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dummy from "../../dummy.json";
import PrevArrow from "../img/prev.svg";
import NextArrow from "../img/next.svg";

const Hot = () => {
  const prevArrow = useCallback(() => slickRef.current.slickPrev(), []);
  const nextArrow = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    slidesSpacing: 0,
    prevArrow: (
      <PrevBtn onClick={prevArrow}>
        <img src={PrevArrow} />
      </PrevBtn>
    ),
    nextArrow: (
      <NextBtn onClick={nextArrow}>
        <img src={NextArrow} />
      </NextBtn>
    ),
  };

  const slickRef = useRef(null);

  return (
    <div>
      <Header>
        <Topic>인기 프로그램</Topic>
        <p>실시간으로 가장 인기있는 프로그램이에요.</p>
      </Header>
      <Wrap>
        <Slider ref={slickRef} {...settings}>
          {Dummy.hot.map((hot) => (
            <Item key={hot.id}>
              <Img src={hot.img}></Img>
              <Title>{hot.title}</Title>
              <Address>{hot.address}</Address>
            </Item>
          ))}
        </Slider>
      </Wrap>
    </div>
  );
};

export default Hot;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #939393;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 40px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`;

const Topic = styled.h3`
  color: #3a3a3a;
  font-family: Akshar;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 60px;
  margin-left: 40px;
  margin-bottom: 10px;
`;

const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  .slick-list {
    width: 1440px;
    height: 357px;
  }
  .slick-active {
    width: 290px !important;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px !important;
  height: 260px;
  padding: 16px 16px;
  margin-left: 0px;
  margin-right: 0px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid #666;
  background: #fff;
  box-shadow: 0px 30px 44px 0px rgba(198, 198, 198, 0.25);
`;

const Img = styled.img`
  width: 240px;
  margin-right: 0px !important;
  flex-shrink: 0;
  border-radius: 30px;
`;

const Title = styled.h3`
  color: #1b1b1b;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 240px;
  margin-right: 0px !important;
  margin-bottom: 10px;
`;

const Address = styled.p`
  color: #5c5c5c;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 240px;
  margin-right: 0px !important;
`;

const PrevBtn = styled.button`
  position: relative;
  left: -32px;
  top: 150px;
  border: none;
  background-color: white;
  z-index: 10;
`;

const NextBtn = styled.button`
  right: 20px;
  top: 150px;
  border: none;
  background-color: white;
  z-index: 10;
`;