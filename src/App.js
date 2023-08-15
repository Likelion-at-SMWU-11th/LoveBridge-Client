import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Topbar from './component/ui/Topbar';
import LoginPage from './component/page/LoginPage';
import MainPage from './component/page/MainPage';
import ApplyPage from './component/page/ApplyPage';
import MyPage from './component/page/MyPage/MyPage';
import MyDocPage from './component/page/MyPage/MyDocPage';
import MyApplyPage from './component/page/MyPage/MyApplyPage';
import MyLikePage from './component/page/MyPage/MyLikePage';
import { createGlobalStyle } from "styled-components";

const Page = styled.div`
  margin-top: 80px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
    <Topbar />
    <Page>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/apply' element={<ApplyPage />}/>
        <Route path='/my' element={<MyPage />}/>
        <Route path='/my/doc' element={<MyDocPage />}/>
        <Route path='/my/apply' element={<MyApplyPage />}/>
        <Route path='/my/like' element={<MyLikePage />}/>
      </Routes>
    </Page>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Pretendard Variable;
  }
`;
