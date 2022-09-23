import React from "react";
import styled from "styled-components";

const StyledSelectBox = styled.div`
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 10px;

    .categoryText {
        margin-left: 16px;
    }

    .vector {
        width: 12px;
        height: 7px;
        margin-right: 13px;
        cursor: pointer;
    }
`;

const SelectBox = ({ text }: { text: string }) => {
    return (
        <StyledSelectBox>
            <div className="categoryText">{text}</div>
            <img alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
        </StyledSelectBox>
    );
};

export default SelectBox;
