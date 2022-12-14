import Editor from "../components/Editor";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SkillBox from "../components/SkillBox";
import axios from "axios";

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

        @media (max-width: 466px) {
            font-size: 18px;
            padding-bottom: 0px;
        }
    }

    .InputDiv {
        margin-top: 48px;
        margin-bottom: 32px;

        .topInputDiv,
        .bottomInputDiv {
            display: flex;
            justify-content: space-between;
            width: 100%;
            @media (max-width: 600px) {
                flex-direction: column;
            }
        }

        .topInputDiv {
            margin-bottom: 32px;
            @media (max-width: 600px) {
                margin-bottom: 0px;
            }
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
            @media (max-width: 600px) {
                margin-bottom: 20px;
                width: 100%;
            }
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
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 17px;
        color: #767676;

        .info {
            width: 16px;
            height: 16px;
            margin-left: 10px;
        }
    }

    .infoDiv {
        display: flex;
        position: relative;

        .info {
            :hover {
                .infoHover {
                    display: flex;
                }
            }
        }

        .infoHover {
            display: none;
            flex-direction: column;
            padding: 16px 24px;
            position: absolute;
            top: 20px;
            left: 110px;
            z-index: 2;
            width: 264px;
            height: 195px;
            background: #ffffff;
            border: 0.75px solid #767676;
            border-radius: 8px;

            .mainText {
                margin-bottom: 8px;
                font-weight: 900;
                font-size: 13px;
                line-height: 16px;
                color: #171718;
            }

            .levelText {
                margin-bottom: 8px;
                font-weight: 600;
                font-size: 13px;
                line-height: 16px;
                color: #171718;
            }

            .level {
                margin-top: 16px;
            }

            .subText {
                padding-bottom: 16px;
                border-bottom: 1px solid #ededed;
            }

            span {
                margin-left: 12px;
            }
            span,
            .subText {
                font-weight: 400;
                font-size: 13px;
                line-height: 16px;
                /* identical to box height */

                color: #555555;
            }
        }
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

    .addBtnDiv {
        display: flex;
        justify-content: flex-end;
        margin-top: 80px;
        margin-bottom: 154px;
        cursor: pointer;
        .addBtn {
            background: #171718;
            border-radius: 8px;
            width: 104px;
            height: 48px;
            line-height: 19px;

            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
        }
    }
`;

const CreateProject = () => {
    const [countSkillBox, setCountSkillBox] = useState(1);
    const [arraySKillBox, setArraySkillBox] = useState<any[]>([]);

    const [groupFocus, setGroupFocus] = useState(false);
    const [termFocus, setTermFocus] = useState(false);

    const [groupValue, setGroupValue] = useState("????????????/?????????");
    const [termValue, setTermValue] = useState("?????? ????????? ????????? ?????????");
    const [content, setContent] = useState();
    const [title, setTitle] = useState();
    const [contact, setContact] = useState();
    // const [wantPeople, setWantPeople] = useState<any[]>([]);
    // const [aaa, setAaa] = useState();
    const group = ["????????????", "?????????"];
    const term = ["?????? ??????", "1~3??????", "4~6??????", "??????"];

    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();

    useEffect(() => {
        setArraySkillBox((data) => [...data, countSkillBox]);
    }, [countSkillBox]);

    console.log(countSkillBox, arraySKillBox);

    const body = {
        title: title,
        recruitType: groupValue,
        contact: contact,
        recruitIntroduction: content,
        expectedPeriod: termValue,
        fieldsList: [data1, data2, data3],
    };

    console.log(body);

    const addWriting = async () => {
        try {
            await axios.post("/recruitment", body);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <StyledCreateProject>
            <div className="createProjectMainText">?????? ????????? ????????????, ???????????? ????????? ?????????!</div>
            <div className="InputDiv">
                <div className="topInputDiv">
                    <div className="topInputGroup title">
                        <div className="text">??????</div>
                        <input onChange={(e: any) => setTitle(e.target.value)} className="inputTag" placeholder="????????????/????????? ?????? ????????? ?????????" />
                    </div>
                    <div className="topInputGroup categorys">
                        <div className="text">?????? ??????</div>
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
                        <div className="text">????????????</div>
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
                        <div className="text">?????????</div>
                        <input onChange={(e: any) => setContact(e.target.value)} className="inputTag" placeholder="?????? ?????? ?????? ?????? ???????????? ????????? ?????????" />
                    </div>
                </div>
            </div>
            <div className="recruitmentText">?????? ??????</div>
            <div className="infoDiv">
                <div className="recruitmentSubText">
                    ????????? ??????????????? ?????? ????????? ?????? ?????? ???????????? ????????? ??? ?????????. <img alt="" className="info" src={process.env.PUBLIC_URL + `/assets/info.png`} />
                </div>
                <div className="infoHover">
                    <div className="mainText">?????? ?????? ?????? ??????</div>
                    <div className="subText">??? ????????? ?????? ?????? 2?????? ?????? ????????? ?????? ????????? ?????? ?????????.</div>
                    <div className="mainText level">?????? ?????? ?????????????</div>
                    <div className="levelText">
                        Low <span> ????????? ?????? ?????? ????????? (?????? ??????)</span>
                    </div>
                    <div className="levelText">
                        Mid <span> ????????? ?????? ?????? ?????? (????????? ??????)</span>
                    </div>
                    <div className="levelText">
                        High <span> ????????? ?????? ????????? ????????? ?????? ????????? ?????? &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;?????? ????????? ??? ??? ?????????.</span>
                    </div>
                </div>
            </div>
            {/* 
            <SkillBox key={1} setData={setData1} num={1} countSkillBox={countSkillBox} setCountSkillBox={setCountSkillBox} arraySKillBox={arraySKillBox} setArraySkillBox={setArraySkillBox} /> */}
            {/* <SkillBox key={2} setData={setData2} num={2} countSkillBox={countSkillBox} setCountSkillBox={setCountSkillBox} arraySKillBox={arraySKillBox} setArraySkillBox={setArraySkillBox} />
            <SkillBox key={2} setData={setData3} num={2} countSkillBox={countSkillBox} setCountSkillBox={setCountSkillBox} arraySKillBox={arraySKillBox} setArraySkillBox={setArraySkillBox} /> */}

            {arraySKillBox &&
                arraySKillBox.map((key) => (
                    <SkillBox
                        key={key}
                        setData={key === 1 ? setData1 : key === 2 ? setData2 : setData3}
                        num={key}
                        countSkillBox={countSkillBox}
                        setCountSkillBox={setCountSkillBox}
                        arraySKillBox={arraySKillBox}
                        setArraySkillBox={setArraySkillBox}
                    />
                ))}
            <div className="contentText">?????? ??????</div>
            <div className="contentSubText">????????????/???????????? ?????? ????????? ????????? ?????????.</div>
            <Editor setContent={setContent} placeholder={"????????? ??????????????? ??????????????????!"} value={content} />
            <div className="addBtnDiv">
                <div onClick={addWriting} className="addBtn">
                    ????????????
                </div>
            </div>
        </StyledCreateProject>
    );
};

export default CreateProject;
