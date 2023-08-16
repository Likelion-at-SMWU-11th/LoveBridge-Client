import React, { useState } from 'react';
import styled from 'styled-components';
import likebtn from '../img/likebtn.svg';
import likebtnactive from '../img/likebtnactive.svg';
import Button from './Button';

const Card = styled.div`
    border-radius: 30px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    width: 34vw;
    height: 77vh;
    padding: 3vh 3vw 7vh 3vw;
`
const TopLine = styled.div`
    display: flex;
    justify-content: space-between;
`
const Tag = styled.div`
    border-radius: 20px;
    background: #F4F2FB;
    padding: 7px 15px 7px 15px;
    color: #4F4F4F;
    font-size: 1.1em;
    font-weight: 500;
    margin-right: 10px;
`
const Like = styled.div`
    display: flex;
`
const LikeNum = styled.div`
    color: #666;
    font-size: 1.2em;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.8px;
    margin: 1vh 1vw;
`
const LikeBtn = styled.button`
    background: #fff;
    border: 0px;
    cursor: pointer;
`
const ImgContainer = styled.div`
    height: 40vh;
    border-radius: 10px;
    background: #d9d9d9;
    margin-top: 2vh;
    margin-bottom: 3vh;
`
const Title = styled.div`
    color: #222;
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: -1.2px;
    margin-bottom: 0.6vh;
`
const District = styled.div`
    color: #4F4F4F;
    font-size: 1.05em;
    font-weight: 350;
    letter-spacing: -0.8px;
    margin-bottom: 1.5vh;
`
const AgencyLine = styled.div`
    display: flex;
    color: #222;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: -0.8px;
    margin: 1vh 0px 1vh 0px;
`
const Agency = styled.div`
    margin-left: 1.5vw;
    color: #666;
    font-size: 1em;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.8px;
`
const StyledButton = styled.div`
    float: right;
    > Button {
        background: #6D6F82;
        border-radius: 8px;
        width: 95px;

        &:hover {
            background: #AD88EB;
        }
    }
`
const TagContainer = styled.div`
    display: flex;
`

function ApplyCard(props) {
    const { tag1, tag2, image, title, district, agency, deadline, tel, applicants, like, iflike, onClickApply } = props;
    const [islike, setIslike ] = useState(iflike); // 초기값을 iflike로

    function handleLike() {
        setIslike(!islike);
    }

    return (
        <Card>
            <TopLine>
                <TagContainer><Tag>#{tag1 || "태그1"}</Tag><Tag>#{tag2 || "태그2"}</Tag></TagContainer>
                <Like>
                    <LikeNum>{like || "0"}</LikeNum>
                    {islike? <LikeBtn onClick={handleLike}><img src={likebtnactive}/></LikeBtn> : <LikeBtn onClick={handleLike} style={{marginRight:"2px", marginLeft:"3px"}}><img src={likebtn}/></LikeBtn>}
                </Like>
            </TopLine>
            <ImgContainer></ImgContainer>
            <Title>{ title || "서비스이름" }</Title>
            <District>{district || "OO시 OO구 "}</District>
            <AgencyLine>• 담당기관 <Agency>{agency || "담당기관이름"}</Agency></AgencyLine>
            <AgencyLine>• 지원마감 <Agency>{deadline || "2023.08.12"}</Agency></AgencyLine>
            <AgencyLine>• 문의처 <Agency>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ tel || "02-1234-1234"}</Agency></AgencyLine>
            <AgencyLine>• 신청인원 <Agency>{applicants || "0명"}</Agency></AgencyLine>
            <StyledButton><Button title="신청" onClick={onClickApply}></Button></StyledButton>
        </Card>
    );
};

export default ApplyCard;