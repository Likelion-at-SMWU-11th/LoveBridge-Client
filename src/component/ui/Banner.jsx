import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from "../img/Other 12.svg";

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
    cssEase: "liner",
  };

  return (
    <div>
      <Slider {...settings}>
        <Slide>
          <img src={BannerImg} />
          <div>
            <Catchphrase>한 번의 등록으로 간편하게 </Catchphrase>
            <Description>
              복잡하고 어려웠던 자립서비스 신청,
              <br />
              이제는 기관 방문 없이도 등록된 서류를 통해 한 번의 클릭으로
            </Description>
            <button>내 서류 등록하기 {">"}</button>
          </div>
        </Slide>
        <Slide>
          <img src={BannerImg} />
          <div>
            <Catchphrase>한 번의 등록으로 간편하게 </Catchphrase>
            <Description>
              복잡하고 어려웠던 자립서비스 신청,
              <br />
              이제는 기관 방문 없이도 등록된 서류를 통해 한 번의 클릭으로
            </Description>
            <button>내 서류 등록하기</button>
          </div>
        </Slide>
        <Slide>
          <img src={BannerImg} />
          <div>
            <Catchphrase>한 번의 등록으로 간편하게 </Catchphrase>
            <Description>
              복잡하고 어려웠던 자립서비스 신청,
              <br />
              이제는 기관 방문 없이도 등록된 서류를 통해 한 번의 클릭으로
            </Description>
            <button>내 서류 등록하기</button>
          </div>
        </Slide>
      </Slider>
    </div>
  );
};

export default Banner;

const Slide = styled.div`
  height: 578px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #ccaeff 0%, #e7d8ff 51.56%, #fff 100%);
  display: flex !important;
  flex-direction: row;
  margin: 0 auto;
  img {
    padding: 80px 120px;
    width: 415px;
    height: 415px;
    flex-shrink: 0;
    margin-right: 100px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-right: 160px;
  }
  button {
    width: 391px;
    height: 78px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #ad88eb;
    color: #fff;
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.07);
    border: none;
    font-family: Pretendard;
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    float: right;
    margin-left: 169px;
    margin-top: 20px;
  }
`;

const Catchphrase = styled.p`
  color: #fff;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.12);
  text-align: right;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 560px;
  float: right;
  margin-top: 140px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #fff;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.12);
  text-align: right;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  float: right;
  white-space: pre-wrap;
`;
