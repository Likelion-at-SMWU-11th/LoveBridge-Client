import React from 'react'
import styled from 'styled-components';
import PagePath from '../ui/PagePath';

const Wrapper = styled.div`
  padding: 45px 136px 0px 123px;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-top: 47px;
`
const Info = styled.div`
  color: #222;
  font-size: 16px;
  font-weight: 350;
  etter-spacing: -0.8px;
  margin-top: 5px;
  margin-bottom: 30px;
`
const SelectBox = styled.div`
  border: 0.973px solid rgba(0, 0, 0, 0.20);
  height: 40vh;
  padding: 30px 45px 30px 45px;
`
const PuppleTxt = styled.div`
  color: #AD88EB;
  font-size: 15.565px;
  font-style: normal;
  font-weight: 350;
  letter-spacing: -0.778px;
`

function ApplyPage() {
  return (
    <Wrapper>
      <PagePath pathname1='신청목록'/>
      <Title>자립지원프로그램 검색</Title>
      <Info>한 눈에 보고 , 클릭 한번으로 서비스를 신청할 수 있습니다.</Info>
      <SelectBox>
        <PuppleTxt>항목을 선택해주세요.</PuppleTxt>
      </SelectBox>
    </Wrapper>
  )
}

export default ApplyPage