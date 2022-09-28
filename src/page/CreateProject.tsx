import Editor from "../components/Editor";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SkillBox from "../components/SkillBox";
// import Calendar from "../components/Calendar";

const StyledCreateProject = styled.div`
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1250px) {
        width: 90vw;
    }

    input::placeholder {
        font-size: 15px;
        line-height: 18px;
        color: #dbdbdb;
    }

    .createProjectMainText {
        font-weight: 600;
        font-size: 26px;
        line-height: 31px;
        color: #171718;
        padding-bottom: 24px;
        border-bottom: 1px solid #999999;
    }

    .InputDiv {
        margin-top: 48px;
        margin-bottom: 32px;

        .topInputDiv,
        .bottomInputDiv {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .topInputDiv {
            margin-bottom: 32px;
        }

        .text {
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 8px;
            color: #171718;
        }

        .topInputGroup,
        .bottomInputGroup {
            width: 49%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .inputTag {
            padding-left: 16px;
            height: 48px;
            background: #ffffff;
            border: 1px solid #dbdbdb;
            border-radius: 8px;
        }
    }

    .recruitmentText,
    .contentText {
        margin-top: 32px;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        color: #171718;
        margin-bottom: 5px;
    }

    .contentSubText,
    .recruitmentSubText {
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 17px;
        color: #767676;
    }

    .TopSelectForm {
        position: relative;
        font-size: 15px;
        line-height: 18px;
        color: #555555;
    }

    .categoryText {
        margin-left: 16px;
        display: flex;
        flex-wrap: wrap;
    }

    .vector {
        width: 12px;
        height: 7px;
        margin-right: 13px;
        cursor: pointer;
    }

    .TopCategory {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* height: 46px; */
        padding: 14px 0;
        background: #ffffff;
        width: 100%;
        height: 20px;
        border-radius: 10px;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        .categoryText {
            margin-left: 16px;
        }

        .vector {
            width: 12px;
            height: 7px;
            margin-right: 20px;
        }
    }

    .toggleCategory {
        position: absolute;
        z-index: 100;
        background: #ffffff;
        border: 1px solid #ededed;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-top: 1px;
        padding: 8px;
        width: calc(100% - 16px);

        .toggleCategoryValue {
            line-height: 19px;
            text-align: center;
            color: #555555;

            height: 40px;
            display: flex;
            width: 100%;
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
`;

const CreateProject = () => {
    const [content, setContent] = useState();
    const [countSkillBox, setCountSkillBox] = useState(1);
    const [arraySKillBox, setArraySkillBox] = useState<any[]>([]);

    const [groupFocus, setGroupFocus] = useState(false);
    const [termFocus, setTermFocus] = useState(false);

    const [groupValue, setGroupValue] = useState("프로젝트/스터디");
    const [termValue, setTermValue] = useState("소요 기간을 선택해 주세요");

    const group = ["프로젝트", "스터디"];
    const term = ["기간 미정", "1~3개월", "4~6개월", "장기"];

    useEffect(() => {
        setArraySkillBox((data) => [...data, countSkillBox]);
    }, [countSkillBox]);

    return (
        <StyledCreateProject>
            <div className="createProjectMainText">직접 사이드 프로젝트, 스터디를 생성해 보세요!</div>
            <div className="InputDiv">
                <div className="topInputDiv">
                    <div className="topInputGroup title">
                        <div className="text">제목</div>
                        <input className="inputTag" placeholder="프로젝트/스터디 명을 입력해 주세요" />
                    </div>
                    <div className="topInputGroup categorys">
                        <div className="text">모집 유형</div>
                        <div className="TopSelectForm level" onFocus={() => setGroupFocus(true)} onBlur={() => setGroupFocus(false)} tabIndex={1}>
                            <div onMouseDown={() => setGroupFocus(!groupFocus)} className="TopCategory">
                                <div className="categoryText">{groupValue}</div>
                                <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                            </div>
                            <div className={groupFocus ? "toggleCategory" : "noneToggleCategory"}>
                                {group.map((it: any) => (
                                    <div
                                        key={it}
                                        onClick={() => {
                                            setGroupFocus(false);
                                            setGroupValue(it);
                                        }}
                                        className="toggleCategoryValue"
                                    >
                                        &nbsp;&nbsp;{it}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomInputDiv">
                    <div className="topInputGroup categorys">
                        <div className="text">소요기간</div>
                        <div className="TopSelectForm level" onFocus={() => setTermFocus(true)} onBlur={() => setTermFocus(false)} tabIndex={1}>
                            <div onMouseDown={() => setTermFocus(!termFocus)} className="TopCategory">
                                <div className="categoryText">{termValue}</div>
                                <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                            </div>
                            <div className={termFocus ? "toggleCategory" : "noneToggleCategory"}>
                                {term.map((it: any) => (
                                    <div
                                        key={it}
                                        onClick={() => {
                                            setTermFocus(false);
                                            setTermValue(it);
                                        }}
                                        className="toggleCategoryValue"
                                    >
                                        &nbsp;&nbsp;{it}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bottomInputGroup contact">
                        <div className="text">연락처</div>
                        <input className="inputTag" placeholder="프로젝트/스터디 명을 입력해 주세요" />
                    </div>
                </div>
            </div>
            <div className="recruitmentText">모집 인원</div>
            <div className="recruitmentSubText"> 분야별 모집하고자 하는 팀원의 종합 요구 능력치를 입력할 수 있어요.</div>

            {arraySKillBox.map((key) => (
                <SkillBox key={key} num={key} countSkillBox={countSkillBox} setCountSkillBox={setCountSkillBox} arraySKillBox={arraySKillBox} setArraySkillBox={setArraySkillBox} />
            ))}
            <div className="contentText">상세 내용</div>
            <div className="contentSubText">프로젝트/스터디의 추가 정보를 입력해 주세요.</div>
            <Editor setContent={setContent} placeholder={"당신의 프로젝트를 소개해주세요!"} value={content} />
            {/* <div>
                <div>임시저장</div>
                <div>등록하기</div>
            </div> */}
        </StyledCreateProject>
    );
};

export default CreateProject;
