import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Topbar from './component/ui/Topbar';
import LoginPage from './component/page/LoginPage';
import MainPage from './component/page/MainPage';
import ServicePage from './component/page/ServicePage';

const Page = styled.div`
  margin-top: 180px;
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
      </Routes>
    </Page>
    </>
  );
}

export default App;
