import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import Pagination from "../components/Pagination";
import SelectBox from "../components/SelectBox";
import SidersBox from "../components/SidersBox";

const StyledMainPage = styled.div`
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    input::placeholder {
        color: #dbdbdb;
    }

    input:focus {
        outline: 0;
    }

    .intro {
        margin-bottom: 40px;
        color: #171718;
        font-weight: 700;
        font-size: 36px;
        line-height: 140%;

        .firstIntro,
        .secondIntro {
            text-align: center;
        }
    }

    .search {
        margin-bottom: 145px;
        display: flex;
        width: 100%;
        justify-content: center;

        .category {
            margin-right: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 220px;
            height: 56px;
            background: #ffffff;
            border: 1px solid #dbdbdb;
            border-radius: 10px;

            .categoryText {
                margin-left: 16px;
            }

            .vector {
                width: 12px;
                height: 7px;
                margin-right: 24px;
                cursor: pointer;
            }
        }

        .searchBar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 16px;
            width: 464px;
            height: 56px;
            background: #ffffff;
            border: 1px solid #dbdbdb;
            border-radius: 10px;

            .searchInput {
                border: none;
                height: 100%;
                width: 100%;
            }
            .zoomIn {
                width: 18px;
                height: 18px;
                margin-right: 18px;
                cursor: pointer;
            }
        }
    }
    .filter {
        margin-bottom: 32px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .filtering {
            display: flex;

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 8px;
                background-color: #f0f0f0;
                width: 76px;
                height: 33px;

                border-radius: 4px;
            }
        }
    }

    .sidersBoxs {
        display: flex;
        margin: 0 auto;
        justify-content: center;
        flex-wrap: wrap;
    }
`;
const MainPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    console.log(modalOpen);

    return (
        <>
            <Header setModalOpen={setModalOpen} />
            <StyledMainPage>
                <div className="intro">
                    <div className="firstIntro">사이드 프로젝트 </div>
                    <div className="secondIntro">이제 사이더스에서 쉽게 찾아보세요</div>
                </div>
                <div className="search">
                    <div className="category">
                        <div className="categoryText">모집 유형</div>
                        <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                    </div>
                    <div className="searchBar">
                        <input type="text" className="searchInput" placeholder="관심있는 분야 혹은 기술 스택을 검색해보세요" />
                        <img alt="vector" className="zoomIn" src={process.env.PUBLIC_URL + `/assets/돋보기.png`} />
                    </div>
                </div>
                <div className="filter">
                    <div className="filtering">
                        <div className="all">전체보기</div>
                        <div className="project">프로젝트</div>
                        <div className="study">스터디</div>
                    </div>
                    <SelectBox text={"정렬 방식"} />
                </div>
                <div className="sidersBoxs">
                    <SidersBox />
                    <SidersBox />
                    <SidersBox />
                    <SidersBox />
                    <SidersBox />
                </div>
                <Pagination />
            </StyledMainPage>
            {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
        </>
    );
};

export default MainPage;
