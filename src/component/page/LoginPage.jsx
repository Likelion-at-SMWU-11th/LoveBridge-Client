import React, {useState} from 'react';
import styled from 'styled-components';
import Input from '../ui/Input';
import Button from '../ui/Button';
import KakaoBtn from '../img/kakao-login.svg';
import NaverBtn from '../img/naver-login.svg';

const Wrapper = styled.div`
    margin-top: 30vh;
`
const LoginContainer = styled.div`
    width: 25%;
    margin: auto;
`
const TitleTxt = styled.div`
    text-align: center;
    font-size: 2.5em;
`
const Line = styled.hr`
    border: 0;
    height: 4px;
    background: #AD88EB;
    margin-top: 2vh;
    border-radius: 50px;
    margin-bottom: 3vh;
`
const LoginBtnContainer = styled.div`
    margin-top: 3vh;
    >Button{
        width: 100%;
        justify-content: center;
    }
`
const SNSContainer = styled.div`
    margin-top: 4vh;
`
const Txt = styled.div`
    font-size: 1em;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`
const SNSBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
`
const SNSButton = styled.button`
    text-align: center;
    margin: 0px 5px 0px 5px;
    background: #fff;
    border: 0px;
    cursor: pointer;
`
const SignupBtnContainer = styled.div`
    margin-top: 4vh;
    >Button{
        width: 100%;
        background: #fff;
        border: 1px solid #5D5D5D;
        color: #1D1D1D;
        border-radius: 28px;
        font-weight: 600;
        font-size: 0.8em;
    }
`

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
  return (
    <Wrapper>
        <form>
            <LoginContainer>
                <TitleTxt>로그인</TitleTxt>
                <Line/>
                <Input 
                    type="text" name="id" value={username} onChange={onChangeUsername} placeholder="아이디 (이메일)"/>
                <Input 
                    type="password" name="password" value={password} onChange={onChangePassword} placeholder="비밀번호"/>
                <LoginBtnContainer><Button title="로그인하기"/></LoginBtnContainer>
                <SNSContainer>
                    <Txt>SNS 계정으로 로그인하기</Txt>
                    <SNSBtnContainer>
                        <SNSButton><img src={KakaoBtn} alt="카카오" /></SNSButton>
                        <SNSButton><img src={NaverBtn} alt="카카오" /></SNSButton>
                    </SNSBtnContainer>
                </SNSContainer>
                <SignupBtnContainer>
                    <Button title="간편 회원가입하기"/>
                </SignupBtnContainer>
            </LoginContainer>
        </form>
    </Wrapper>
  )
}

export default LoginPage