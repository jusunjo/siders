import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    margin-bottom: 136px;
    height: 64px;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        width: 88px;
        height: 34px;

        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        text-align: center;
    }

    .sign {
        display: flex;
        font-size: 15px;
        color: #555555;
        .signIn {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f0f0f0;
            width: 59px;
            height: 32px;
            border-radius: 4px;
            margin-left: 36px;
        }
    }
`;

const Header = ({ setModalOpen }: { setModalOpen: any }) => {
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <StyledHeader>
            <div className="logo">Siders</div>
            <div className="sign">
                <div onClick={showModal} className="signIn">
                    로그인
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
