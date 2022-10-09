import React from "react";
import styled from "styled-components";

const StyledDetailPageBox = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 220px;
    height: 216px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 770px) {
        width: 100%;
        height: 168px;
        margin-bottom: 16px;

        .skills,
        .people,
        .stacks {
            display: flex;
            align-items: center;
        }
    }

    .boxPadding {
        margin-left: 16px;

        .job {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            width: 55px;
            height: 26px;
            background: #f0f0f0;
            border-radius: 4px;
        }

        .skillsAndPeople {
            margin-top: 16px;
            margin-bottom: 16px;
            display: flex;

            @media (max-width: 770px) {
                flex-direction: column;
                margin-bottom: 8px;

                .skills {
                    margin-bottom: 8px;
                }
            }

            .skills {
                margin-right: 24px;
            }
        }
        .skillsText,
        .peopleText,
        .stacksText {
            line-height: 19px;
            color: #767676;
            margin-bottom: 8px;
            @media (max-width: 770px) {
                margin-right: 16px;

                margin-bottom: 0px;
            }
        }

        .skillsValue,
        .peopleValue {
            line-height: 24px;
            color: #171718;
        }

        .stackImg {
            width: 32px;
            height: 32px;
            margin-right: 8px;
        }
        @media (max-width: 770px) {
            .peopleText {
                margin-right: 93px;
            }
            .stacksText {
                margin-right: 60px;
            }
        }
    }
`;

const DetailPageBox = () => {
    return (
        <StyledDetailPageBox>
            <div className="boxPadding">
                <div className="job">디자인</div>
                <div className="skillsAndPeople">
                    <div className="skills">
                        <div className="skillsText">종합 요구 능력치</div>
                        <div className="skillsValue">Low</div>
                    </div>
                    <div className="people">
                        <div className="peopleText">인원</div>
                        <div className="peopleValue">0</div>
                    </div>
                </div>
                <div className="stacks">
                    <div className="stacksText">기술스택</div>
                    <img alt="vector" className="stackImg" src={process.env.PUBLIC_URL + `/assets/Zeplin.png`} />
                    <img alt="vector" className="stackImg" src={process.env.PUBLIC_URL + `/assets/Zeplin.png`} />
                    <img alt="vector" className="stackImg" src={process.env.PUBLIC_URL + `/assets/Zeplin.png`} />
                    <img alt="vector" className="stackImg" src={process.env.PUBLIC_URL + `/assets/Zeplin.png`} />
                    <img alt="vector" className="stackImg" src={process.env.PUBLIC_URL + `/assets/Zeplin.png`} />
                </div>
            </div>
        </StyledDetailPageBox>
    );
};

export default DetailPageBox;
