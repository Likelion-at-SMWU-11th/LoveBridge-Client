import React, {useState} from 'react';
import styled from 'styled-components';
import Input from '../ui/Input';

const Wrapper = styled.div`
`
const LoginContainer = styled.div`
    width: 25%;
    margin: auto;
`
const Txt = styled.div`
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
                <Txt>로그인</Txt>
                <Line/>
                <Input 
                    type="text" name="id" value={username} onChange={onChangeUsername} placeholder="아이디 (이메일)"/>
                <Input 
                    type="text" name="password" value={password} onChange={onChangePassword} placeholder="비밀번호"/>
            </LoginContainer>
        </form>
    </Wrapper>
  )
}

export default LoginPage