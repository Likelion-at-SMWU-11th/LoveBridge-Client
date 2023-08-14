import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1_img from "../img/banner1_img.svg";
import Banner2_img from "../img/banner2_img.svg";
import Highlight from "../img/Rectangle 146.svg";
import Banner3_bg from "../img/banner3_bg.svg";
import Play from "../img/play.svg";
import Banner3_1 from "../img/banner3_1.svg";
import Banner3_2 from "../img/banner3_2.svg";
import Banner3_3 from "../img/banner3_3.svg";

const Banner = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  };

  const navigate = useNavigate();

  const navToMyDoc = () => {
    navigate("/my/doc");
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <Slide1>
          <img src={Banner1_img} />
          <Container>
            <Catchphrase>한 번의 등록으로 간편하게 </Catchphrase>
            <Description>
              복잡하고 어려웠던 자립서비스 신청,
              <br />
              이제는 기관 방문 없이도 등록된 서류를 통해 한 번의 클릭으로
            </Description>
            <button onClick={navToMyDoc}>내 서류 등록하기 {">"}</button>
          </Container>
        </Slide1>
        <Slide2>
          <Texts>
            <h3>
              지금 바로 “한 번의 클릭”으로
              <br />
              <span>다양한 프로그램을 만나보세요!</span>
              <img src={Highlight} />
            </h3>
            <p>
              전국에 있는 다양한 복지 기관의 자립지원서비스들을
              <br />
              지역별로 / 카테고리별로 한 번에 모아보기
            </p>
          </Texts>
          <img src={Banner2_img} />
        </Slide2>
        <Slide3>
          <BgImg src={Banner3_bg} />
          <Headline>
            <Icon src={Play} />
            <p>이런 분들을 위한 BRIDGE</p>
          </Headline>
          <Contents>
            <img src={Banner3_1} />
            <img src={Banner3_2} />
            <img src={Banner3_3} />
          </Contents>
        </Slide3>
      </Slider>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  max-width: 100%;
  .slick-dots {
    bottom: 30px;
  }
  .slick-slide {
    width: 100%;
    max-width: 100%;
  }
`;

const Slide1 = styled.div`
  max-width: 100%;
  height: 578px;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    #ffe3f9 0%,
    #e7d8ff 10%,
    #924eff 70%,
    #b3b1ff 100%
  );
  display: flex !important;
  flex-direction: row;
  margin: 0 auto;
  div {
    display: flex;
    flex-direction: column;
    margin-right: 160px;
  }
  button {
    width: 276px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #ad88eb;
    color: #fff;
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.07);
    border: none;
    font-family: Noto Sans;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    float: right;
    margin-left: 286px;
    margin-top: 70px;
  }
  img {
    padding: 80px -20px;
    width: 500px;
    max-width: 100%;
    flex-shrink: 0;
    margin-left: 100px;
    margin-right: 170px;
  }
`;

const Container = styled.div`
  background-image: url("../img/banner1_bg.svg");
`;

const Catchphrase = styled.h3`
  color: #fff;
  font-family: Noto Sans;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.12);
  text-align: right;
  font-size: 46px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 560px;
  float: right;
  margin-top: 140px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #fff;
  font-family: Noto Sans;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.12);
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  float: right;
  white-space: pre-wrap;
`;

const Slide2 = styled.div`
  background: #ad88eb;
  width: 100%;
  max-width: 100%;
  height: 578px;
  overflow: hidden;
  z-index: -10;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 800px;
    max-width: 100%;
    margin-right: 0 !important;
    position: relative;
    left: 700px;
    top: -420px;
    overflow: hidden;
  }
`;

const Texts = styled.div`
  margin-left: 140px;
  margin-top: 60px;
  margin-right: 0 !important;
  width: fit-content;
  max-width: 50%;
  z-index: 10;
  h3 {
    float: left;
    color: #fff;
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.12);
    font-family: Noto Sans;
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -3px;
    margin-bottom: 30px;
    z-index: 10;
  }
  p {
    float: left;
    color: #fff;
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.07);
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.75px;
  }
  span {
    font-weight: 600;
  }
  img {
    width: 286px;
    position: relative;
    left: -5px;
    top: -28px;
    z-index: -10;
  }
`;

const Slide3 = styled.div`
  background: #9669e2;
  position: relative;
  height: 578px;
  z-index: 0;
  width: 100%;
  overflow: hidden;
  max-width: 100%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  z-index: 10;
  gap: 10px;
  justify-content: center;
  img {
    width: 400px;
    filter: drop-shadow(0px 0px 0px 0px);
  }
`;

const BgImg = styled.img`
  position: absolute;
  top: -140px;
  z-index: -10;
  overflow: hidden;
`;

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  font-family: Noto Sans;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 80px;
  margin-top: 40px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
