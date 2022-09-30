import React from "react";
import styled from "styled-components";

const StyledDetailPage = styled.div`
    width: 708px;

    margin: 0 auto;

    @media (max-width: 800px) {
        width: 90vw;
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
        border: 1px solid black;
        height: 400px;
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
    return (
        <StyledDetailPage>
            <div className="title">프로젝트 제목이 들어갈 자리입니다.</div>
            <div className="userInfoDiv">
                <div className="userInfoLeft">
                    <img alt="person" className="person" src={process.env.PUBLIC_URL + `/assets/person.png`} />
                    <div className="nickNameAndDateDiv">
                        <div className="nickName">작성자 닉네임</div>
                        <div className="date">2022. 04. 18</div>
                    </div>
                </div>
                <div className="userInfoRight">
                    <div className="Btn deadlineBtn">모집마감</div>
                    <div className="Btn DeleteBtn">삭제</div>
                    <div className="Btn correctionBtn">글수정</div>
                </div>
            </div>
            <div className="basicInfo">구상중</div>
            <div className="content">
                <div className="contentTitle">소개</div>
                <div>
                    예시글 입니당 안녕하세요.저희는 취업을 위해, 협업 경험을 위한 프로젝트를 계획하고 있습니다. 최종적인 목표는 서로간 협업이며, 서비스 기획부터 가능하면 배포까지 함께 하실
                    **프론트엔드 개발자**를 모집하려고 합니다. 너무 거창한 것을 만들기 보다는 경험을 쌓는 데 목적을 두고있기 때문에, 프로젝트 소요 기간은 2달로 예상하고 있습니다. 우선은 온라인으로
                    진행 해 볼 예정이며, 필요 시 오프라인 모임도 고려하고 있습니다. - 모임 지역은 서울 ~ 경기도권으로 생각 중입니다. 저희도 초보이기 때문에 이 부분 감안하시고 지원해주시면 좋을 것
                    같습니다.
                </div>
            </div>
        </StyledDetailPage>
    );
};

export default DetailPage;
