import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import CreateProject from "./page/CreateProject";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SetProfile from "./page/SetProfile";
import { useState } from "react";
import MyProfile from "./page/MyProfile";

const StyledApp = styled.div`
    width: 1440px;

    margin: 0 auto;

    @media (max-width: 1500px) {
        width: 90vw;
    }
`;

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <StyledApp>
                <Header setModalOpen={setModalOpen} />
                <Routes>
                    <Route path="/" element={<MainPage modalOpen={modalOpen} setModalOpen={setModalOpen} />} />
                    <Route path="createproject" element={<CreateProject />} />
                    <Route path="setprofile" element={<SetProfile />} />
                    <Route path="myprofile" element={<MyProfile />} />
                    <Route path="createproject" element={<CreateProject />} />
                </Routes>
                {/* <Footer /> */}
            </StyledApp>
        </>
    );
}

export default App;
