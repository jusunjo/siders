import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        cursor: pointer;
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

    .loginForm {
        display: flex;
        align-items: center;

        .writes {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            line-height: 18px;
            color: #555555;
            gap: 8px;
            cursor: pointer;
            width: 89px;
            height: 32px;

            background: #f0f0f0;
            border-radius: 4px;

            .pensil {
                width: 13.5px;
                height: 13.5px;
            }
        }

        .person {
            cursor: pointer;
            width: 30px;
            height: 30px;
            margin-left: 35px;
            margin-right: 17px;
        }

        .vector {
            width: 12px;
            height: 7px;
            cursor: pointer;
        }

        .toggleCategorys {
            display: flex;

            justify-content: flex-end;
        }
        .toggleCategory {
            margin-top: 24px;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            background: #ffffff;
            border: 1px solid #ededed;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            width: 104px;
            padding: 8px;
            box-sizing: inherit;

            .toggleCategoryValue {
                line-height: 19px;
                text-align: center;
                color: #555555;
                height: 40px;
                display: flex;
                justify-content: flex-start;
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
    }
`;

const Header = ({ setModalOpen }: { setModalOpen: any }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [CategoryFocus, setCategoryFocus] = useState(false);

    const navigate = useNavigate();

    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <StyledHeader>
            <div onClick={() => navigate("/")} className="logo">
                Siders
            </div>
            <div className="sign">
                {!isLogin ? (
                    <div onClick={showModal} className="signIn">
                        로그인
                    </div>
                ) : (
                    <div className="loginForm">
                        <div onClick={() => navigate("createproject")} className="writes">
                            <img alt="pensil" className="pensil" src={process.env.PUBLIC_URL + `/assets/pensil.png`} />
                            <div>글작성</div>
                        </div>
                        <img alt="person" onClick={() => navigate("myprofile")} className="person" src={process.env.PUBLIC_URL + `/assets/person.png`} />
                        <div className="toggleCategorys" onFocus={() => setCategoryFocus(true)} onBlur={() => setCategoryFocus(false)} tabIndex={1}>
                            <img onMouseDown={() => setCategoryFocus(!CategoryFocus)} alt="vector" className="vector" src={process.env.PUBLIC_URL + `/assets/Vector.png`} />
                            <div className={CategoryFocus ? "toggleCategory" : "noneToggleCategory"}>
                                <div
                                    onClick={() => {
                                        setCategoryFocus(false);
                                        navigate("myprofile");
                                    }}
                                    className="toggleCategoryValue"
                                >
                                    &nbsp;&nbsp;내 프로필
                                </div>
                                <div
                                    onClick={() => {
                                        setCategoryFocus(false);
                                        navigate("/setprofile");
                                    }}
                                    className="toggleCategoryValue"
                                >
                                    &nbsp;&nbsp;설정
                                </div>
                                <div
                                    onClick={() => {
                                        setCategoryFocus(false);
                                        setIsLogin(false);
                                        navigate("/");
                                    }}
                                    className="toggleCategoryValue"
                                >
                                    &nbsp;&nbsp;로그아웃
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </StyledHeader>
    );
};

export default Header;
