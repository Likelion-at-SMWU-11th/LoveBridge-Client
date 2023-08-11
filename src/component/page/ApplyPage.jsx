import React, { useState } from 'react'
import styled from 'styled-components';
import PagePath from '../ui/PagePath';
import Select from 'react-select';
import Button from '../ui/Button';

const Wrapper = styled.div`
  padding: 45px 136px 0px 123px;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-top: 50px;
`
const Info = styled.div`
  color: #222;
  font-size: 16px;
  font-weight: 350;
  etter-spacing: -0.8px;
  margin-top: 10px;
  margin-bottom: 40px;
  letter-spacing: -0.8px;
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
  font-weight: 400;
  letter-spacing: -0.778px;
`
const SelectContainer = styled.div`
  margin: 3vh 0 3vh 0;
`
const SelectLine = styled.div`
  display: flex;
  padding: 3vh 0 0 10vw;
`
const RegionSelect = styled(Select)`
  width: 20vw;
  margin-left: 25px;

  .select-placeholder-text {
    color: #4F4F4F;
  }
`
const CategorySelect = styled(Select)`
  width: 15vw;
`
const SortSelect = styled(Select)`
  width: 8vw;
`
const Txt = styled.div`
  color: #222;
  font-size: 15.565px;  
  font-weight: 500;
  letter-spacing: -0.778px;
  padding: 7.592px 69.07px 16.538px 0px;
`
const ButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  >Button {
    width: 12vw;
    border-radius: 7.783px;
  }
`
const StyledButton = styled.div`
  >Button {
    background: #6D6F82;
    width: 12vw;
    margin-right: 5px;
    border-radius: 7.783px;
  }
`
const Total = styled.div`
  display: flex;
  margin: 5vh 0 1vh 0;
  font-weight: 350;
  font-size: 20px;
  color: #222;
  letter-spacing: -1px;
  
  .pupple {
    font-size: 20px;
    font-weight: 350;
  }
`

function ApplyPage() {
  const [ total, setTotal ] = useState(0);

  return (
    <Wrapper>
      <PagePath pathname1='신청목록'/>
      <Title>자립지원프로그램 검색</Title>
      <Info>한 눈에 보고 , 클릭 한번으로 서비스를 신청할 수 있습니다.</Info>
      <SelectBox>
        <PuppleTxt>항목을 선택해주세요.</PuppleTxt>
        <SelectContainer>
          <SelectLine><Txt>지역</Txt> 
          <RegionSelect className="react-select-container"
                    placeholder={<div className="select-placeholder-text">선택</div>}
                    components={{
                        IndicatorSeparator: () => null
                    }}/>
          </SelectLine>
          <SelectLine><Txt>카테고리</Txt> 
          <CategorySelect className="react-select-container"
                    placeholder=""
                    components={{
                        IndicatorSeparator: () => null
                    }}/>
          </SelectLine>
          <SelectLine><Txt>검색정렬</Txt> 
          <SortSelect className="react-select-container"
                    placeholder=""
                    components={{
                        IndicatorSeparator: () => null,
                        
                    }}/>
          </SelectLine>
        </SelectContainer>
        <ButtonContainer>
          <StyledButton><Button className="reset" title="초기화" /></StyledButton>
          <Button className="search" title="검색" />
        </ButtonContainer>
      </SelectBox>
      <Total>총 &nbsp;<PuppleTxt className='pupple'>{total}</PuppleTxt> &nbsp;건의 복지서비스가 있습니다.</Total>
    </Wrapper>
  )
}

export default ApplyPage