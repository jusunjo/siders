// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSidersBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 0.75px solid #dbdbdb;
    border-radius: 10px;
    width: 281px;
    height: 200px;
    margin: 5px;
    padding: 40px 31px;
    cursor: pointer;

    @media (max-width: 400px) {
        width: 271px;
    }

    .top {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .category {
            background-color: #f0f0f0;
            border-radius: 4px;
            align-items: center;
            padding: 4px 8px;
            color: #767676;
            font-size: 13px;
        }

        .heart {
            width: 20px;
            height: 18px;
        }
    }

    .title {
        margin-top: 32px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 123%;
        color: #171718;
        /* width: 200px; */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .person {
        margin-top: 26px;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        color: #767676;
    }

    .stacks {
        margin-top: 23px;

        .stack {
            width: 32px;
            height: 32px;
            margin-right: 12px;
        }
    }
`;

const SidersBox = ({ it }: { it: any }) => {
    const navigate = useNavigate();

    return (
        <StyledSidersBox onClick={() => navigate(`/detailpage/${it.id}`)}>
            <div className="top">
                <div className="category">{it.recruitType === "PROJECT" ? "사이드 프로젝트" : "스터디"}</div>
                <img alt="vector" className="heart" src={process.env.PUBLIC_URL + `/assets/heart.png`} />
            </div>
            <div className="title">{it.title} </div>
            <div className="person">모집인원 &nbsp;|&nbsp; 총 5명</div>
            <div className="stacks">
                <img alt="vector" className="stack" src={process.env.PUBLIC_URL + `/assets/symbol.png`} />
                <img alt="vector" className="stack" src={process.env.PUBLIC_URL + `/assets/symbol.png`} />
                <img alt="vector" className="stack" src={process.env.PUBLIC_URL + `/assets/symbol.png`} />
                <img alt="vector" className="stack" src={process.env.PUBLIC_URL + `/assets/symbol.png`} />
                <img alt="vector" className="stack" src={process.env.PUBLIC_URL + `/assets/symbol.png`} />
                <img alt="vector" className="stack" src={process.env.PUBLIC_URL + `/assets/symbol.png`} />
            </div>
        </StyledSidersBox>
    );
};

export default SidersBox;
