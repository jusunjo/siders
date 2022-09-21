import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;
