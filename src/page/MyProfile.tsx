import React, { useState } from "react";
import styled from "styled-components";
import SidersBox from "../components/SidersBox";

const StyledMyProfile = styled.div`
    .TopMyProfile {
        display: flex;
        flex-direction: column;
        align-items: center;
        .ProfileImg {
            margin-bottom: 14px;
            width: 100px;
            height: 100px;
        }

        .nickname {
            margin-bottom: 16px;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            color: #171718;
        }

        .changeProfileBtn {
            margin-bottom: 32px;
            width: 104px;
            height: 40px;
            background: #ededed;
            border-radius: 4px;
            color: #555555;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .selectSidersBox {
            margin-bottom: 64px;
            display: flex;
            flex-direction: row;

            .myPost,
            .clickHeart,
            .selectedClickHeart,
            .selectedMyPost {
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                :hover {
                    background: #ededed;
                }
            }

            .selectedMyPost {
                margin-right: 8px;
                width: 80px;
                height: 32px;
                font-weight: 600;
                color: #171718;
            }

            .myPost {
                margin-right: 8px;
                width: 80px;
                height: 32px;
            }

            .selectedClickHeart {
                width: 108px;
                height: 32px;
                font-weight: 600;
                color: #171718;
            }

            .clickHeart {
                width: 108px;
                height: 32px;
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

const MyProfile = () => {
    const [selectFilter, setSelectFilter] = useState("myPost");

    console.log(selectFilter);
    return (
        <StyledMyProfile>
            <div className="TopMyProfile">
                <img alt="ProfileImg" className="ProfileImg" src={process.env.PUBLIC_URL + `/assets/person.png`} />
                <div className="nickname">닉네임</div>
                <div className="changeProfileBtn">프로필 수정</div>
                <div className="selectSidersBox">
                    <div onClick={() => setSelectFilter("myPost")} className={selectFilter === "myPost" ? "selectedMyPost" : "myPost"}>
                        내가 쓴 글
                    </div>
                    <div onClick={() => setSelectFilter("clickHeart")} className={selectFilter === "clickHeart" ? "selectedClickHeart" : "clickHeart"}>
                        좋아요 누른 글
                    </div>
                </div>
            </div>

            <div className="sidersBoxs">
                <SidersBox />
                <SidersBox />
                <SidersBox />
                <SidersBox />
                <SidersBox />
                <SidersBox />
                <SidersBox />
            </div>
        </StyledMyProfile>
    );
};

export default MyProfile;
