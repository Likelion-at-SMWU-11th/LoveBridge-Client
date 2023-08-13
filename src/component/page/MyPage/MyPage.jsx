import React from 'react'
import styled from 'styled-components';
import PagePath from '../../ui/PagePath';
import uploadIcon from '../../img/mypage_upload.svg';
import applyIcon from '../../img/mypage_apply.svg';
import haertIcon from '../../img/mypage_heart.svg';
import enter from '../../img/enter.svg';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 45px 136px 0px 123px;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-top: 50px;
`
const PuppleLine = styled.hr`
  border: 0;
  height: 3px;
  background: #AD88EB;
  margin-top: 30px;
  border-radius: 50px;
`
const MenuBox = styled.div`
  display: flex;
  padding: 30px 0px 30px 0px;
  border-bottom: 0.8px solid #CCC;

  .enter {
    width: 20px;
    padding-top: 5px;
  }
`
const UploadLine = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > img {
    width: 30px;
  }
  &:hover {
    .enter {
      filter: invert(62%) sepia(72%) saturate(1784%) hue-rotate(213deg) brightness(97%) contrast(90%);
    }
  }
`
const ApplyLine = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > img {
    width: 30px;
  }
  &:hover {
    .enter {
      filter: invert(62%) sepia(72%) saturate(1784%) hue-rotate(213deg) brightness(97%) contrast(90%);
    }
  }
`
const HeartLine = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > img {
    width: 30px;
  }
  &:hover {
    .enter {
      filter: invert(62%) sepia(72%) saturate(1784%) hue-rotate(213deg) brightness(97%) contrast(90%);
    }
  }
`
const Menu = styled.div`
  color: #333;
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 15px;
  &:hover {
    color: #AD88EB;
  }
`

function MyPage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PagePath pathname1='마이페이지'/>
      <Title>마이페이지</Title>
      <PuppleLine />
      <MenuBox>
      <UploadLine onClick={() => navigate('/my/doc')}>
        <img src={uploadIcon}/><Menu>내 서류 등록</Menu><img className="enter" src={enter}/>
      </UploadLine>
      </MenuBox>
      <MenuBox>
      <ApplyLine onClick={() => navigate('/my/apply')}>
        <img src={applyIcon}/><Menu>내가 신청한 프로그램</Menu><img className="enter" src={enter}/>
      </ApplyLine>
      </MenuBox>
      <MenuBox>
      <HeartLine onClick={() => navigate('/my/like')}>
        <img src={haertIcon}/><Menu>내가 찜한 목록</Menu><img className="enter" src={enter}/>
      </HeartLine>
      </MenuBox>
    </Wrapper>
  )
}

export default MyPage