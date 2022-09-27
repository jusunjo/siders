import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LoginModal from "../components/LoginModal";

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
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 220px;
            height: 56px;
            background: #ffffff;
            border: 1px solid #dbdbdb;
            border-radius: 10px;
            cursor: pointer;

            .categoryText {
                margin-left: 16px;
            }

            .vector {
                width: 12px;
                height: 7px;
                margin-right: 24px;
            }
        }

        .toggleCategory {
            position: absolute;
            background: #ffffff;
            border: 1px solid #ededed;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;

            .toggleCategoryValue {
                margin: 8px;
                line-height: 19px;

                width: 204px;
                text-align: center;
                color: #555555;
                height: 40px;
                display: flex;
                align-items: center;
                cursor: pointer;
                border-radius: 4px;
                :hover {
                    background: #f0f0f0;
                }
            }
        }

        .noneToggleCategory {
            display: none;
        }

        .searchBar {
            margin-left: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 16px;
            width: 480px;
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

            color: #555555;
            .all,
            .project,
            .study {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 8px;
                cursor: pointer;
                width: 76px;
                height: 33px;
                border-radius: 4px;
            }

            .selectCategory {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 8px;
                background-color: #f0f0f0;
                font-weight: 600;
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
const MainPage = ({ modalOpen, setModalOpen }: { modalOpen: any; setModalOpen: any }) => {
    const [selectFilter, setSelectFilter] = useState("all");
    const [selectCategory, setSelectCategory] = useState("모집 유형");
    const [CategoryFocus, setCategoryFocus] = useState(false);

    useEffect(() => {
        const getProject = async () => {
            const response = await axios.get("/?page=1&size=10");
            console.log(response);
        };
        getProject();
    }, []);

    return (
        <>
            <StyledMainPage>
                <div className="intro">
                    <div className="firstIntro">사이드 프로젝트 </div>
                    <div className="secondIntro">이제 사이더스에서 쉽게 찾아보세요</div>
                </div>
                <div className="search">
                    <div className="categorys" onFocus={() => setCategoryFocus(true)} onBlur={() => setCategoryFocus(false)} tabIndex={1}>
                        <div className="category" onMouseDown={() => setCategoryFocus(!CategoryFocus)}>
                            <div className="categoryText">{selectCategory}</div>
                            <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                        </div>
                        <div className={CategoryFocus ? "toggleCategory" : "noneToggleCategory"}>
                            <div
                                onClick={() => {
                                    setSelectCategory("전체 보기");
                                    setCategoryFocus(false);
                                }}
                                className="toggleCategoryValue"
                            >
                                &nbsp;&nbsp;전체 보기
                            </div>
                            <div
                                onClick={() => {
                                    setSelectCategory("스터디");
                                    setCategoryFocus(false);
                                }}
                                className="toggleCategoryValue"
                            >
                                &nbsp;&nbsp;스터디
                            </div>
                            <div
                                onClick={() => {
                                    setSelectCategory("사이드 프로젝트");
                                    setCategoryFocus(false);
                                }}
                                className="toggleCategoryValue"
                            >
                                &nbsp;&nbsp;사이드 프로젝트
                            </div>
                        </div>
                    </div>
                    <div className="searchBar">
                        <input type="text" className="searchInput" placeholder="관심있는 분야 혹은 기술 스택을 검색해보세요" />
                        <img alt="vector" className="zoomIn" src={process.env.PUBLIC_URL + `/assets/zoomIn.png`} />
                    </div>
                </div>
                <div className="filter">
                    <div className="filtering">
                        <div onClick={() => setSelectFilter("all")} className={selectFilter === "all" ? "selectCategory" : "all"}>
                            전체보기
                        </div>
                        <div onClick={() => setSelectFilter("project")} className={selectFilter === "project" ? "selectCategory" : "project"}>
                            프로젝트
                        </div>
                        <div onClick={() => setSelectFilter("study")} className={selectFilter === "study" ? "selectCategory" : "study"}>
                            스터디
                        </div>
                    </div>
                    <SelectBox textArr={["정렬방식(All)", "최신순", "오래된순"]} />
                </div>
                <div className="sidersBoxs">
                    <SidersBox />
                    <SidersBox />
                    <SidersBox />
                    <SidersBox />
                    <SidersBox />
                </div>
            </StyledMainPage>
            {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
        </>
    );
};

export default MainPage;
