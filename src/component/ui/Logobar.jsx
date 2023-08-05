import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    background: #AD88EB;
    height: 96px;
    width: 100%;
    position: fixed;
    top: 0;
`
const LogoTxt = styled.div`
    line-height: 96px;
    margin-left: 73px;
`

const Logobar = () => {
    return (
        <Bar>
            <LogoTxt>발달장애인을 위한 자립서비스 신청 웹사이트</LogoTxt>
        </Bar>
    );
};

export default Logobar;