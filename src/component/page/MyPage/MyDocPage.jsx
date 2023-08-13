import React, { useState } from 'react'
import styled from 'styled-components';
import PagePath from '../../ui/PagePath';
import fileicon from '../../img/file.svg';
import plusicon from '../../img/plus.svg';

const Wrapper = styled.div`
    padding: 45px 136px 0px 123px;
`
const TitleLine = styled.div`
    display: flex;
    align-items: center;
    
    > img {
        width: 15px;
        margin-right: 10px;
    }
`
const Title = styled.div`
    color: #222;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -1.2px;
    margin-right: 20px;
`
const RedTxt = styled.div`
    color: #EF0000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.8px;
`
const FileBox = styled.div`
    border: 1px solid #DFDFDF;
    border-radius: 16px;
    margin: 30px 0px 0px 0px;
`
const GreyZone = styled.div`
    background-color: #F9F9F9;
    display: flex;
    padding: 20px 0px 20px 50px;
    border-radius: 16px 16px 0px 0px;
`
const Txt = styled.div`
    color: #222;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.8px;
    margin-right: 35px;
`
const DocName = styled.div`
    color: #222;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.8px;
`
const FileContainer = styled.div`
    padding: 20px 50px 20px 50px;
    display: flex;
    justify-content: space-between;
    .file-label {
        padding: 14px 80px;
        border: 1.2px solid #222;
        border-radius: 8px;
        background: #FFF;
        color: #222;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.8px;
        text-align: center;
        margin-right: 10px;
        cursor: pointer;
        > img {
            margin-left: 5px;
        }
    }
    .file-name {
        width: 550px;
        background: #FFF;
        height: 50px;
        line-height: 26px;
        text-indent: 5px;
        border: 1px solid #DFDFDF;
        border-radius: 8px;
        padding-left: 30px;
    }
    .file-upload {
        display: none;
    }
    .preview-btn {
        padding: 14px 90px;
        border: 1.2px solid #222;
        border-radius: 8px;
        background: #FFF;
        color: #222;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.8px;
        text-align: center;
        cursor: pointer;
    }
    .button-box {
        display: flex;
    }
`

function MyDocPage() {
    const [family, setFamily] = useState('');
    const [id, setId] = useState('');
    const [regist, setRegist] = useState('');
    const [gov, setGov] = useState('');

    const handleChangeFamliy = (e) => {
        setFamily(e.target.files[0]);
    }
    const handleChangeId = (e) => {
        setId(e.target.files[0]);
    }
    const handleChangeRegist = (e) => {
        setRegist(e.target.files[0]);
    }
    const handleChangeGov = (e) => {
        setGov(e.target.files[0]);
    }

  return (
    <Wrapper>
        <PagePath pathname1="마이페이지" pathname2="내 서류 등록"/>
        <hr style={{ margin: "50px 0px 50px 0px"}}/>
        <TitleLine><img src={fileicon}/> <Title>첨부서류</Title><RedTxt>* 필수 제출서류입니다.</RedTxt></TitleLine>
        <FileBox>
            <GreyZone><Txt>서류명</Txt><DocName>가족관계증명서</DocName></GreyZone>
                <FileContainer>
                    <input type="text" className="file-name" value={family.name} disabled="disabled"></input>
                    <div className='btn-box'>
                    <label for="family-relation" className="file-label">파일 선택<img src={plusicon}/></label>
                    <input type="file" name="" id="family-relation" class="file-upload" onChange={handleChangeFamliy} />
                    <button className="preview-btn">미리보기</button></div>
                </FileContainer>
        </FileBox>
        <FileBox>
            <GreyZone><Txt>서류명</Txt><DocName>주민등록등본</DocName></GreyZone>
                <FileContainer>
                    <input type="text" readonly="readonly" className="file-name" value={id.name} disabled="disabled"/>
                    <div className='btn-box'>
                    <label for="id-card" class="file-label">파일 선택<img src={plusicon}/></label>
                    <input type="file" name="" id="id-card" className="file-upload" onChange={handleChangeId} />
                    <button className="preview-btn">미리보기</button></div>
                </FileContainer>
        </FileBox>
        <FileBox>
            <GreyZone><Txt>서류명</Txt><DocName>장애인등록증</DocName></GreyZone>
                <FileContainer>
                    <input type="text" readonly="readonly" className="file-name" value={regist.name} disabled="disabled"/>
                    <div className='btn-box'>
                    <label for="disable-regist" className="file-label">파일 선택<img src={plusicon}/></label>
                    <input type="file" name="" id="disable-regist" className="file-upload" onChange={handleChangeRegist}/>
                    <button className="preview-btn">미리보기</button></div>
                </FileContainer>
        </FileBox>
        <FileBox>
            <GreyZone><Txt>서류명</Txt><DocName>정부기관 심사결과지</DocName></GreyZone>
                <FileContainer>
                    <input type="text" readonly="readonly" class="file-name" value={gov.name} disabled="disabled"/>
                    <div className='btn-box'>
                    <label for="gov-result" class="file-label">파일 선택<img src={plusicon}/></label>
                    <input type="file" name="" id="gov-result" class="file-upload" onChange={handleChangeGov} />
                    <button class="preview-btn">미리보기</button></div>
                </FileContainer>
        </FileBox>
    </Wrapper>
  )
}

export default MyDocPage