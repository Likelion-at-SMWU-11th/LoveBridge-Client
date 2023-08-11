import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Bar = styled.div`
    background: #fff;
    height: 90px;
    width: 100%;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const NavContainer = styled.div`
    display: flex;
    margin-top: 10px;
`
const Navi = styled.div`
    font-weight: 600;
    color: #222;
    font-size: 1.1em;
    cursor: pointer;
    margin-right: 40px;
`
const Line = styled(motion.hr)`
    border: 0;
    height: 4px;
    background: #AD88EB;
    margin-top: 30px;
    border-radius: 50px;
    transition: all ease 0.3s;
`
const SearchContainer = styled.div`
    display: flex;
    line-height: 75px;
    border-radius: 50px;
    border: solid 1.5px #959393;
    height: 20px;
    padding: 10px 0px 10px 20px;
    width: 650px;
`
const Search = styled.input`
    border: none;
    width: 600px;
    outline: none;
    margin-right: 10px;

    &::placeholder {
        color: #C8CAD2;
    }
`
const ButtonContainer = styled.div`
    margin-right: 75px;
`
const StyledButton = styled.button`
    background: #fff;
    margin: 0px 5px 0px 0px;
    border: 0px;
    cursor: pointer;
`
const LogoImg = styled.div`
    margin-left: 39px;
    margin-right: 52px;
    margin-top: 2px;
    cursor: pointer;
`
const LogoNaviContainer = styled.div`
    display: flex;
    margin-top: 36px;
`

const Topbar = () => {
    const navigate = useNavigate();
    const [ main, setMain ] = useState(true);
    const [ apply, setApply ] = useState(true);

    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Bar>
            <LogoNaviContainer style={main? {marginBottom: "28.3px"} : {}}>
            <LogoImg onClick={() => {setMain(true); navigate("/")}}><img src={logo}/></LogoImg>
            <NavContainer>
                <Navi onClick={() => {setMain(false); setApply(true); navigate("/apply")}}>신청 목록{!main && apply && <Line initial={{ scale: 0 }} animate={{ scale: 1 }}/>}</Navi>
                <Navi onClick={() => {setMain(false); setApply(false); navigate("/my")}}>마이페이지{!main && !apply && <Line initial={{ scale: 0 }} animate={{ scale: 1 }}/>}</Navi>
            </NavContainer>
            </LogoNaviContainer>
            <SearchContainer>
                <Search type="text" value={search} placeholder='필요한 프로그램을 찾아보세요. (예: 바리스타)' onChange={onChange}/>
                <StyledButton><BsSearch/></StyledButton>
            </SearchContainer>
            <ButtonContainer>
                <StyledButton onClick={() => {navigate("/login")}}>로그인/회원가입</StyledButton>
            </ButtonContainer>
        </Bar>
    );
};

export default Topbar;