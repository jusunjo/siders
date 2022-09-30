import React, { useState } from "react";
import styled from "styled-components";

const StyledSelectBox = styled.div`
    @media (max-width: 560px) {
        display: none;
    }

    height: 48px;
    //props로 width랑 height값을 넘겨주면될듯
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 10px;

    width: 220px;
    .categoryText {
        margin-left: 16px;
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
        width: 220px;
        height: 48px;
        background: #ffffff;
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
        width: calc(220px - 16px);
        padding: 8px;
        margin-top: 1px;

        .toggleCategoryValue {
            line-height: 19px;
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
`;

const SelectBox = ({ textArr }: { textArr: any }) => {
    const [selectCategory, setSelectCategory] = useState(textArr[0]);
    const [CategoryFocus, setCategoryFocus] = useState(false);

    return (
        <StyledSelectBox onFocus={() => setCategoryFocus(true)} onBlur={() => setCategoryFocus(false)} tabIndex={1}>
            <div onMouseDown={() => setCategoryFocus(!CategoryFocus)} className="category">
                <div className="categoryText">{selectCategory}</div>
                <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
            </div>
            <div className={CategoryFocus ? "toggleCategory" : "noneToggleCategory"}>
                {textArr.map((it: string) => (
                    <div
                        onClick={() => {
                            setSelectCategory(it);
                            setCategoryFocus(false);
                        }}
                        className="toggleCategoryValue"
                    >
                        &nbsp;&nbsp;{it}
                    </div>
                ))}
            </div>
        </StyledSelectBox>
    );
};

export default SelectBox;
