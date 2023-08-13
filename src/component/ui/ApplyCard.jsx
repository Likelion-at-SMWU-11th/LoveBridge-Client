import React, { useState } from 'react';
import styled from 'styled-components';
import likebtn from '../img/likebtn.svg';
import likebtnactive from '../img/likebtnactive.svg';
import Button from './Button';

const Card = styled.div`
    border-radius: 30px;
    border: 1px solid #DFDFDF;
    background: #FFF;
    width: 530px;
    height: 650px;
    padding: 30px 50px 60px 50px;
`
const TopLine = styled.div`
    display: flex;
    justify-content: space-between;
`
const Tag = styled.div`
    border-radius: 20px;
    background: #F4F2FB;
    padding: 5px 13.69px 7px 15px;
    color: #4F4F4F;
    font-size: 16px;
    font-weight: 500;
`
const Like = styled.div`
    display: flex;
`
const LikeNum = styled.div`
    color: #666;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.8px;
    padding: 2px 8px;
`
const LikeBtn = styled.button`
    background: #fff;
    border: 0px;
    cursor: pointer;
`
const ImgContainer = styled.div`
    height: 370px;
    border-radius: 10px;
    background: #d9d9d9;
    margin-top: 20px;
    margin-bottom: 20px;
`
const Title = styled.div`
    color: #222;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1.2px;
    margin-bottom: 5px;
`
const District = styled.div`
    color: #4F4F4F;
    font-size: 16px;
    font-weight: 350;
    letter-spacing: -0.8px;
    margin-bottom: 15px;
`
const AgencyLine = styled.div`
    display: flex;
    color: #222;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.8px;
    margin: 8px 0px 8px 0px;
`
const Agency = styled.div`
    margin-left: 17px;
    color: #666;
    font-size: 16px;
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

function ApplyCard(props) {
    const { tag, image, title, district, agency, deadline, tel, like, iflike, onClickApply } = props;
    const [islike, setIslike ] = useState(iflike); // 초기값을 iflike로

    function handleLike() {
        setIslike(!islike);
    }

    return (
        <Card>
            <TopLine>
                <Tag>#{tag || "태그"}</Tag>
                <Like>
                    <LikeNum>{like || "0"}</LikeNum>
                    {islike? <LikeBtn onClick={handleLike}><img src={likebtnactive}/></LikeBtn> : <LikeBtn onClick={handleLike}><img src={likebtn}/></LikeBtn>}
                </Like>
            </TopLine>
            <ImgContainer></ImgContainer>
            <Title>{ title || "서비스이름" }</Title>
            <District>{district || "OO시 OO구 "}</District>
            <AgencyLine>• 담당기관 <Agency>{agency || "담당기관이름"}</Agency></AgencyLine>
            <AgencyLine>• 지원마감 <Agency>{deadline || "2023.08.12"}</Agency></AgencyLine>
            <AgencyLine>• 문의처 <Agency>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ tel || "02-1234-1234"}</Agency></AgencyLine>
            <StyledButton><Button title="신청" onClick={onClickApply}></Button></StyledButton>
        </Card>
    );
};

export default ApplyCard;