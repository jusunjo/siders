import React from "react";
import styled from "styled-components";

const StyledSetProfile = styled.div`
    margin: 0 auto;
    width: 708px;
    color: #171718;
    @media (max-width: 770px) {
        width: 90vw;
    }

    input::placeholder {
        color: #dbdbdb;
    }

    .setProfileText {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 28px;
        line-height: 33px;
    }

    .setProfileSubText {
        margin-bottom: 32px;
        font-size: 14px;
        line-height: 17px;
        color: #767676;
    }

    .pictureText {
        margin-bottom: 18px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }

    .profileImgDiv {
        margin-bottom: 26px;
        display: flex;
        align-items: center;

        .profileImg {
            width: 100px;
            height: 100px;
            margin-right: 18px;
        }

        .changeImg,
        .deleteImg {
            margin-right: 8px;
            color: #555555;
            background: #ededed;
            border-radius: 8px;
            width: 96px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .nicknameText {
        margin-bottom: 23px;
        font-size: 14px;
        line-height: 17px;
    }

    .nicknameInput {
        margin-bottom: 32px;
        width: 326px;
        height: 48px;
        padding-left: 16px;
        background: #ffffff;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
    }

    .saveOrCancelBtn {
        padding-bottom: 48px;
        border-bottom: 1px solid #dbdbdb;
        display: flex;
        justify-content: flex-end;

        .cancel,
        .save {
            width: 96px;
            height: 40px;
            background: #ededed;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 8px;
        }
    }

    .accountManagementText {
        margin-top: 56px;
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 28px;
        line-height: 33px;

        color: #171718;
    }
    .accountManagementSubText {
        margin-bottom: 26px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #767676;
    }

    .secessionBtns {
        display: flex;
        justify-content: flex-end;
    }

    .secessionBtn {
        width: 96px;
        height: 40px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;

        color: #555555;
        background: #ededed;
        border-radius: 8px;
    }
`;

const SetProfile = () => {
    return (
        <StyledSetProfile>
            <div className="setProfileText">????????? ??????</div>
            <div className="setProfileSubText">???????????? ???????????? ???????????? ???????????? ?????? ??????????????? ?????? ????????? ???????????????.</div>
            <div className="pictureText">??????</div>
            <div className="profileImgDiv">
                <img alt="profileImg" className="profileImg" src={process.env.PUBLIC_URL + `/assets/person.png`} />
                <div className="changeImg">?????? ??????</div>
                <div className="deleteImg">??????</div>
            </div>
            <div className="nicknameText">?????????</div>
            <input className="nicknameInput" placeholder="???????????? ????????? ?????????" />
            <div className="saveOrCancelBtn">
                <div className="cancel">??????</div>
                <div className="save">??????</div>
            </div>
            <div className="accountManagementText">????????????</div>
            <div className="accountManagementSubText">?????? ??? ?????? ????????? ??????</div>
            <div className="secessionBtns">
                <div className="secessionBtn">?????? ??????</div>
            </div>
        </StyledSetProfile>
    );
};

export default SetProfile;
