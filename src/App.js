import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Topbar from './component/ui/Topbar';
import LoginPage from './component/page/LoginPage';
import MainPage from './component/page/MainPage';
import ServicePage from './component/page/ServicePage';
import MyPage from './component/page/MyPage';

const Page = styled.div`
  margin-top: 113px;
`

function App() {
  return (
    <>
    <Topbar />
    <Page>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/service' element={<ServicePage />}/>
        <Route path='/my' element={<MyPage />}/>
      </Routes>
    </Page>
    </>
  );
}

export default App;
