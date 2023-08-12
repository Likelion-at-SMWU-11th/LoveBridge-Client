import React from 'react'
import styled from 'styled-components';
import PagePath from '../../ui/PagePath';

const Wrapper = styled.div`
  padding: 45px 136px 0px 123px;
`

function MyPage() {
  return (
    <Wrapper>
      <PagePath pathname1='마이페이지'/>
    </Wrapper>
  )
}

export default MyPage