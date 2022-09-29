import { useState } from "react";
import styled from "styled-components";

const StyledSkillBox = styled.div`
    display: flex;

    /* align-items: center; */
    width: 100%;
    font-size: 15px;
    line-height: 18px;
    color: #555555;
    margin-bottom: 8px;

    @media (max-width: 910px) {
        flex-direction: column;
    }

    .levelAndPeopleDiv {
        display: flex;
        width: 40%;
        @media (max-width: 910px) {
            width: 100%;
            justify-content: space-between;
        }
    }

    .selectForm {
        margin-right: 2.2%;
        width: 220px;
        position: relative;

        @media (max-width: 910px) {
            width: 100%;
            margin-bottom: 8px;
        }
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

    .category {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* height: 46px; */
        padding: 14px 0;
        background: #ffffff;
        width: 100%;
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

    .skillCategory {
        padding: 9px 0;
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

        /* .notSelectGroup {
            background-color: red;
        } */
    }

    .skill {
        width: 28%;
        @media (max-width: 910px) {
            width: 100%;
        }
    }

    .skillValue {
        height: 200px;
        overflow-y: scroll;
    }

    .noneToggleCategory {
        display: none;
    }

    .deleteBtn,
    .addBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 14px;
        color: #171718;
        margin-top: 11px;
        cursor: pointer;
    }

    .deleteBtn {
        width: 48px;
        height: 24px;
        background: #ffffff;
        border: 1px solid #ededed;
        border-radius: 4px;
    }

    .addBtn {
        width: 48px;
        height: 24px;
        background: #ededed;
        border-radius: 4px;
        margin-left: 8px;
    }

    .noneAddBtn {
        width: 48px;
        height: 24px;
        border-radius: 4px;
        margin-left: 8px;

        @media (max-width: 910px) {
            display: none;
        }
    }

    .skillText {
        padding: 5px 0;
    }

    .skillItems {
        display: flex;
        padding: 0 8px;
        height: 24px;
        background: #f0f0f0;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        margin: 2px 2px;
        .smallClose {
            width: 8px;
            height: 8px;
            margin-left: 3px;
            padding: 3px;

            :hover {
                background-color: #aeaeae;
            }
        }
    }

    .group,
    .level,
    .people {
        height: 48px;
    }

    .level,
    .people {
        margin-right: 4.5%;
        @media (max-width: 910px) {
            margin-right: 0;
        }
    }

    .level {
        @media (max-width: 910px) {
            margin-right: 10px;
        }
    }

    .addAndDeleteBtn {
        display: flex;

        @media (max-width: 910px) {
            justify-content: flex-end;
            margin-top: -10px;
            margin-bottom: 18px;
        }
    }
`;
const SkillBox = ({
    setCountSkillBox,
    countSkillBox,
    num,
    // setWantPeople,
    arraySKillBox,
    setArraySkillBox,
}: // setAaa,
{
    countSkillBox: any;
    setCountSkillBox: any;
    num: any;
    // setWantPeople: any;
    arraySKillBox: any;
    setArraySkillBox: any;
    // setAaa: any;
}) => {
    const [groupFocus, setGroupFocus] = useState(false);
    const [skillFocus, setSkillFocus] = useState(false);
    const [levelFocus, setLevelFocus] = useState(false);
    const [peopleFocus, setPeopleFocus] = useState(false);

    const [selectGroup, setSelectGroup] = useState("분야 선택");
    const [selectSkill, setSelectSkill] = useState<any[]>([]);
    const [selectLevel, setSelectLevel] = useState("종합 요구 능력치");
    const [selectPeople, setSelectPeople] = useState("인원 수");

    const groupValue = ["프론트엔드", "백엔드", "ui/ux"];
    const frontndSkill = ["Javascript", "Typescript", "React", "Vue", "Redux", "Mobx"];
    const BackendSkill = ["Java", "NodeJs", "Spring"];
    const designSkill = ["Figma", "Zeplin", "Sketch", "XD", "Illustrator", "Photoshop"];
    const levelValue = ["Low", "Mid", "High"];
    const peopleValue = ["1명", "2명", "3명", "4명", "5명", "6명", "7명", "8명", "9명"];

    const set = new Set(selectSkill);

    // useEffect(() => {
    //     setWantPeople({
    //         fieldsName: selectGroup,
    //         recruitCount: 1,
    //         totalAbility: selectLevel,
    //         stacks: [
    //             {
    //                 stackName: "백엔드스택1",
    //             },
    //             {
    //                 stackName: "백엔드스택2",
    //             },
    //             {
    //                 stackName: "백엔드스택3",
    //             },
    //         ],
    //     });
    // }, [selectGroup, selectLevel]);

    const addSkill = (it: any) => {
        if (set.size < 5) {
            setSelectSkill((data) => [...data, it]);
        } else {
            alert("5개까지만 선택이 가능합니다.");
        }
    };

    const deleteSkill = (it: any) => {
        const b = selectSkill.filter((data) => data !== it);
        setSelectSkill(b);
    };

    const addSkillBox = () => {
        if (arraySKillBox.length < 3) {
            setCountSkillBox(countSkillBox + 1);
        } else {
            alert("3개의 분야까지 추가 가능합니다.");
        }
    };

    const deleteSkillBox = () => {
        if (arraySKillBox.length > 1) {
            const newData = arraySKillBox.filter((data: any) => data !== num);
            setArraySkillBox(newData);
        } else {
            return alert("더 이상 삭제할 수 없습니다.");
        }
    };

    return (
        <StyledSkillBox>
            <div className="selectForm group" onFocus={() => setGroupFocus(true)} onBlur={() => setGroupFocus(false)} tabIndex={1}>
                <div onMouseDown={() => setGroupFocus(!groupFocus)} className="category">
                    <div className="categoryText">{selectGroup}</div>
                    <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                </div>
                <div className={groupFocus ? "toggleCategory" : "noneToggleCategory"}>
                    {groupValue.map((it: any) => (
                        <div
                            key={it}
                            onClick={() => {
                                setGroupFocus(false);
                                setSelectGroup(it);
                                // setAaa(it);
                                setSelectSkill([]);
                                setSelectLevel("종합 요구 능력치");
                                setSelectPeople("인원 수");
                            }}
                            className="toggleCategoryValue"
                        >
                            &nbsp;&nbsp;{it}
                        </div>
                    ))}
                </div>
            </div>
            <div className="selectForm skill" onFocus={() => selectGroup !== "분야 선택" && setSkillFocus(true)} onBlur={() => setSkillFocus(false)} tabIndex={1}>
                <div onMouseDown={() => (selectGroup !== "분야 선택" ? setSkillFocus(!skillFocus) : alert("분야를 선택해주세요!"))} className="category skillCategory">
                    <div className="categoryText">
                        {selectSkill[0] === undefined ? (
                            <div className="skillText">기술 스택</div>
                        ) : (
                            selectSkill
                                .filter((element, index) => selectSkill.indexOf(element) === index)
                                .map((it) => (
                                    <div key={it} className={selectSkill[0] ? "skillItems" : ""}>
                                        <div>{it}</div>
                                        <img
                                            onMouseDown={() => {
                                                deleteSkill(it);
                                                setSkillFocus(false);
                                            }}
                                            alt="smallClose"
                                            className="smallClose"
                                            src={process.env.PUBLIC_URL + `/assets/smallClose.png`}
                                        />
                                    </div>
                                ))
                        )}
                    </div>
                    <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                </div>
                <div className={skillFocus ? "toggleCategory skillValue" : "noneToggleCategory"}>
                    {selectGroup !== "분야선택" ? (
                        (selectGroup === "프론트엔드" ? frontndSkill : selectGroup === "백엔드" ? BackendSkill : designSkill).map((it: string) => (
                            <div
                                onClick={() => {
                                    setSkillFocus(false);
                                    addSkill(it);
                                }}
                                className="toggleCategoryValue"
                            >
                                &nbsp;&nbsp;{it}
                            </div>
                        ))
                    ) : (
                        <div className="notSelectGroup">분야를 선택해주세요</div>
                    )}
                </div>
            </div>
            <div className="levelAndPeopleDiv">
                <div className="selectForm level" onFocus={() => setLevelFocus(true)} onBlur={() => setLevelFocus(false)} tabIndex={1}>
                    <div onMouseDown={() => setLevelFocus(!levelFocus)} className="category">
                        <div className="categoryText">{selectLevel}</div>
                        <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                    </div>
                    <div className={levelFocus ? "toggleCategory" : "noneToggleCategory"}>
                        {levelValue.map((it: string) => (
                            <div
                                key={it}
                                onClick={() => {
                                    setLevelFocus(false);
                                    setSelectLevel(it);
                                }}
                                className="toggleCategoryValue"
                            >
                                &nbsp;&nbsp;{it}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="selectForm people" onFocus={() => setPeopleFocus(true)} onBlur={() => setPeopleFocus(false)} tabIndex={1}>
                    <div onMouseDown={() => setPeopleFocus(!peopleFocus)} className="category">
                        <div className="categoryText">{selectPeople}</div>
                        <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                    </div>
                    <div className={peopleFocus ? "toggleCategory" : "noneToggleCategory"}>
                        {peopleValue.map((it: string) => (
                            <div
                                key={it}
                                onClick={() => {
                                    setPeopleFocus(false);
                                    setSelectPeople(it);
                                }}
                                className="toggleCategoryValue"
                            >
                                &nbsp;&nbsp;{it}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="addAndDeleteBtn">
                <div onClick={deleteSkillBox} className="deleteBtn">
                    삭제
                </div>
                {arraySKillBox && arraySKillBox[arraySKillBox.length - 1] === num ? (
                    <div onClick={addSkillBox} className="addBtn">
                        추가
                    </div>
                ) : (
                    <div className="noneAddBtn"></div>
                )}
            </div>
        </StyledSkillBox>
    );
};

export default SkillBox;
