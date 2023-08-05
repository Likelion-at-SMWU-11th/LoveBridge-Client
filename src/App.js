import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Logobar from './component/ui/Logobar';
import LoginPage from './component/page/LoginPage';

const Page = styled.div`
  margin-top: 96px;
`

function App() {
  return (
    <>
    <Logobar />
    <Page>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
      </Routes>
    </Page>
    </>
  );
}

export default App;
