import React from 'react'
import styled from 'styled-components';
import PagePath from '../../ui/PagePath';
import Applied from '../../ui/Applied';
import step1 from '../../img/step1.svg';
import step2 from '../../img/step2.svg';
import step3 from '../../img/step3.svg';
import arrow from '../../img/myapply_arrow.svg';
import Dummy from '../../../dummy.json';

const Wrapper = styled.div`
  padding: 45px 136px 0px 123px;
`
const StepLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 150px 40px 150px;
`
const Step = styled.div`

`
const Txt = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    color: #565656;
`
const Arrow = styled.div`
`
const Line = styled.hr`
`


function MyApplyPage() {

  const cancelApply = (e) => {
    var programName = e.target.parentElement.parentElement.children[0].children[0].textContent;
    if (window.confirm(`[${programName}] 정말 취소하시겠습니까?`)) {
      alert(`[${programName}] 취소가 완료되었습니다`);
    } else {
      alert("아직 신청 상태입니다.");
    }
  };

  return (
    <Wrapper>
      <PagePath pathname1="마이페이지" pathname2="내가 신청한 프로그램"/>
      <Line style={{marginTop: "50px"}}/>
      <StepLine>
        <Step>
            <img src={step1}/><Txt>서류 전달</Txt>
        </Step><Arrow><img src={arrow}/></Arrow>
        <Step>
            <img src={step2}/><Txt>심사 중</Txt>
        </Step><Arrow><img src={arrow}/></Arrow>
        <Step>
            <img src={step3}/><Txt>심사 완료</Txt>
        </Step>
      </StepLine>
      <Line style={{marginBottom: "50px"}}/>
      <div>
      {Dummy.programs.map((applied) => (
        <Applied key={applied.id}
          title={applied.title}
          district={applied.district}
          onClick={e => cancelApply(e)}/>
      ))}
      </div>
    </Wrapper>
  )
}

export default MyApplyPage