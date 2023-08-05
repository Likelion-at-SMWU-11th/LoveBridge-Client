import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const Bar = styled.div`
    background: #fff;
    height: 75px;
    width: 100%;
    position: fixed;
    top: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const NavContainer = styled.div`
    display: flex;
    margin-top: 35px;
    margin-left: 73px;
`
const Navi = styled.div`
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;
    margin-right: 40px;
`
const Line = styled.hr`
    border: 0;
    height: 4px;
    background: #AD88EB;
    margin-top: 15px;
`
const SearchContainer = styled.div`
    display: flex;
    line-height: 75px;
    border-radius: 50px;
    border: solid 1.5px #303441;
    height: 22px;
    padding: 10px 0px 10px 20px;
    width: 600px;
`
const Search = styled.input`
    border: none;
    width: 550px;
    outline: none;
    margin-right: 10px;
`
const ButtonContainer = styled.div`
    margin-right: 75px;
`
const StyledButton = styled.button`
    background: #fff;
    margin: 5px;
    border: 0px;
    cursor: pointer;
`

const Topbar = () => {
    const [ main, setMain ] = useState(true);
    const handleMain = () => {
        setMain(true);
    };
    const handleNotMain = () => {
        setMain(false);
    };

    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Bar>
            <NavContainer>
                <Navi onClick={handleMain}>메인페이지{main && <Line />}</Navi>
                <Navi onClick={handleNotMain}>서비스 신청{!main && <Line />}</Navi>
            </NavContainer>
            <SearchContainer>
                <Search placeholder='필요한 프로그램을 찾아보세요. (예: 바리스타)' onChange={onChange}/>
                <BsSearch />
            </SearchContainer>
            <ButtonContainer>
                <StyledButton>마이페이지</StyledButton>
                <StyledButton>로그인</StyledButton>
                <StyledButton>회원가입</StyledButton>
            </ButtonContainer>
        </Bar>
    );
};

export default Topbar;