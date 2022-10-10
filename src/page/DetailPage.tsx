import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailPageBox from "../components/DetailPageBox";
import { FieldsListData, WritingInfo } from "../interface/DetailPageType";

const StyledDetailPage = styled.div`
    width: 708px;

    margin: 0 auto;

    @media (max-width: 800px) {
        width: 90vw;
    }

    @media (max-width: 650px) {
        .categoryAndTermDiv {
            display: flex;
            flex-direction: column;
            .category {
                margin-bottom: 16px;
            }
        }
        .contact {
            margin-top: 16px;
        }
    }

    .title {
        margin-bottom: 28px;
        font-weight: 700;
        font-size: 30px;
        line-height: 130%;
        color: #171718;
    }

    .userInfoDiv {
        margin-bottom: 68px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .userInfoLeft {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #555555;
            display: flex;
            align-items: center;

            .person {
                margin-right: 8px;
                width: 48px;
                height: 48px;
            }

            .date {
                font-size: 14px;
            }
        }

        .userInfoRight {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            line-height: 18px;
            color: #171718;

            .Btn {
                margin-left: 8px;
                height: 22px;
                padding: 2px 6px;
                background: #f8f8fa;
                border-radius: 4px;
            }
        }
    }
    .basicInfo {
        margin-bottom: 64px;

        .basicInfoText {
            margin-bottom: 24px;
            font-size: 18px;
            font-weight: 600;
            line-height: 21px;
            color: #171718;
        }

        .categoryAndTermDiv {
            display: flex;
        }

        .contact,
        .term,
        .category {
            display: flex;
        }

        .contact {
            margin-bottom: 24px;
            margin-top: 22px;
            display: flex;
            align-items: center;

            @media (max-width: 650px) {
                margin-top: 16px;
            }

            .kakaoLink {
                margin-left: 8px;

                width: 24px;
                height: 24px;
            }
        }

        .text {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            width: 84px;
            color: #767676;
        }

        .categoryValue {
            margin-right: 181px;

            @media (max-width: 650px) {
                margin-right: 0px;
            }
        }

        .value {
            line-height: 19px;
            color: #171718;
        }

        .peopleText {
            margin-bottom: 16px;
            line-height: 19px;
            color: #767676;
        }

        .DetailPageBoxs {
            display: flex;
        }

        @media (max-width: 770px) {
            .DetailPageBoxs {
                flex-direction: column;
            }
        }
    }

    .content {
        .contentTitle {
            margin-bottom: 24px;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            color: #171718;
        }
    }
`;

const DetailPage = () => {
    const [detailInfo, setDetailInfo] = useState<WritingInfo>();

    const { id } = useParams();

    useEffect(() => {
        const getDetailInfo = async () => {
            try {
                const response = await axios.get(`/api/post/${id}`);
                setDetailInfo(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        getDetailInfo();
    }, []);

    const moveKakaoLink = () => {};

    console.log(detailInfo);

    return (
        <StyledDetailPage>
            <div className="title">{detailInfo && detailInfo.title}</div>
            <div className="userInfoDiv">
                <div className="userInfoLeft">
                    <img alt="person" className="person" src={process.env.PUBLIC_URL + `/assets/person.png`} />
                    <div className="nickNameAndDateDiv">
                        <div className="nickName">작성자 닉네임</div>
                        <div className="date">{detailInfo && detailInfo.createdDate}</div>
                    </div>
                </div>
                <div className="userInfoRight">
                    <div className="Btn deadlineBtn">모집마감</div>
                    <div className="Btn DeleteBtn">삭제</div>
                    <div className="Btn correctionBtn">글수정</div>
                </div>
            </div>
            <div className="basicInfo">
                <div className="basicInfoText">기본 정보</div>
                <div className="categoryAndTermDiv">
                    <div className="category">
                        <div className="text categoryText">모집 유형</div>
                        <div className="value categoryValue"> {detailInfo && detailInfo.recruitType === "PROJECT" ? "사이드 프로젝트" : "스터디"}</div>
                    </div>
                    <div className="term">
                        <div className="text termText">소요 기간</div>
                        <div className="value termValue">{detailInfo && detailInfo.expectedPeriod}</div>
                    </div>
                </div>
                <div className="contact">
                    <div className="text contactText">연락처</div>
                    <div className="value contactValue"> 카카오톡 오픈채팅</div>
                    <img onClick={moveKakaoLink} alt="kakaoLink" className="kakaoLink" src={process.env.PUBLIC_URL + `/assets/kakaoLink.png`} />
                </div>
                <div className="peopleText">모집인원</div>
                <div className="DetailPageBoxs">{detailInfo && detailInfo.fieldsList.map((it) => <DetailPageBox it={it} />)}</div>
            </div>
            <div className="content">
                <div className="contentTitle">소개</div>
                <div>{detailInfo && detailInfo.recruitIntroduction}</div>
            </div>
        </StyledDetailPage>
    );
};

export default DetailPage;
