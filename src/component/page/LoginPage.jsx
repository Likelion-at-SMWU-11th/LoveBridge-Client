import React, {useState} from 'react';
import styled from 'styled-components';
import Input from '../ui/Input';
import Button from '../ui/Button';
import kako from '../img/kakao-logo.svg';
import google from '../img/google-logo.svg';
import naver from '../img/naver-logo.svg';
import logo from '../img/logo.svg';
import {motion} from 'framer-motion';

const Wrapper = styled.div`
padding: 100px 136px 0px 123px;
`
const LoginContainer = styled.div`
    margin: auto;
`
const TitleTxt = styled.div`
    font-size: 2.3em;
    color: #454545;
    font-weight: 700;
    margin-top: 10px;
`
const Line = styled.hr`
    border: 0;
    height: 4px;
    background: #AD88EB;
    margin-top: 2vh;
    border-radius: 50px;
    margin-bottom: 70px;
    margin-top: 50px;
`
const BtnContainer = styled.div`
display: flex;
justify-content: space-between;

`
const KaKaO = styled.div`
    display: flex;
    align-items: center;
    >button {
        background: #FFDE00;
        width: 400px;
        color: #000000;
        margin-bottom: 20px;
    }
`
const Google = styled.div`
    display: flex;
    align-items: center;
    >button {
        background: #ECECEC;
        width: 400px;
        color: #000;
        margin-bottom: 20px;
    }
`
const Naver = styled.div`
    display: flex;
    align-items: center;
    >button {
        background: #2DB400;
        width: 400px;
        color: #fff;
        margin-bottom: 20px;
    }
`
const StyledButton = styled(motion.button)`
    font-size: 1.3em;
    font-weight: 700;
    border: 0px;
    cursor: pointer;
    border-radius: 30px;
    background: #AD88EB;
    padding: 15px;
    color: #fff;
    height: 100px;
    > img {
        margin-right: 15px;
        padding-top: 1px;
    }
`
const LoginInfo = styled.div`
`
const SubTxt = styled.div`
    margin-bottom: 30px;
`
const hoverVariants = {
    grow: {
      scale: 1.05
    },
  };
  

function LoginPage() {
    
  return (
    <Wrapper>
        <LoginInfo><img src={logo}/><TitleTxt>간편 소셜 로그인</TitleTxt><SubTxt>이미 소유하고 계신 소셜 계정으로 간편하게 로그인해보세요.</SubTxt></LoginInfo>
            <LoginContainer>
            <Line/>
                <BtnContainer>
                    <KaKaO ><StyledButton whileHover={["grow"]} variants={hoverVariants}><img src={kako}/>카카오 로그인</StyledButton></KaKaO>
                    <Google><StyledButton whileHover={["grow"]} variants={hoverVariants}><img src={google}/>구글 로그인</StyledButton></Google>
                    <Naver><StyledButton whileHover={["grow"]} variants={hoverVariants}><img src={naver}/>네이버 로그인</StyledButton></Naver>
                </BtnContainer>
            </LoginContainer>
    </Wrapper>
  )
}

export default LoginPage