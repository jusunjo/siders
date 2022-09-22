import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import CreateProject from "./page/CreateProject";

const StyledApp = styled.div`
    width: 1440px;
    height: 100vh;
    background-color: #f2f2f2;
    margin: 0 auto;
`;

function App() {
    return (
        <StyledApp>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="createproject" element={<CreateProject />} />
            </Routes>
        </StyledApp>
    );
}

export default App;
