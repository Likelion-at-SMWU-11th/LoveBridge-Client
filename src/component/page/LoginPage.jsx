import React, {useState} from 'react';
import styled from 'styled-components';
import Input from '../ui/Input';
import Button from '../ui/Button';
import kako from '../img/kakao-logo.svg';
import google from '../img/google-logo.svg';
import naver from '../img/naver-logo.svg';
import logo from '../img/logo.svg';

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
    margin-left: 10px
`
const Line = styled.hr`
    border: 0;
    height: 4px;
    background: #AD88EB;
    margin-top: 2vh;
    border-radius: 50px;
    margin-bottom: 3vh;
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
        background: #000;
        width: 400px;
        color: #fff;
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
const StyledButton = styled.button`
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
        <LoginInfo><img src={logo}/><TitleTxt>간편 소셜 로그인</TitleTxt></LoginInfo>
            <LoginContainer>
                <Line/>
                <BtnContainer>
                    <KaKaO><StyledButton><img src={kako}/>카카오 로그인</StyledButton></KaKaO>
                    <Google><StyledButton><img src={google}/>구글 로그인</StyledButton></Google>
                    <Naver><StyledButton><img src={naver}/>네이버 로그인</StyledButton></Naver>
                </BtnContainer>
            </LoginContainer>
    </Wrapper>
  )
}

export default LoginPage