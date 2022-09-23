import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import CreateProject from "./page/CreateProject";
import Header from "./components/Header";
import Footer from "./components/Footer";

const StyledApp = styled.div`
    width: 1440px;

    margin: 0 auto;

    @media (max-width: 1500px) {
        width: 90vw;
    }
`;

function App() {
    return (
        <>
            <StyledApp>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="createproject" element={<CreateProject />} />
                </Routes>
                {/* <Footer /> */}
            </StyledApp>
        </>
    );
}

export default App;
