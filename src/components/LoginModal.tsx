import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledLoginModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        /* 모달창 크기 */
        width: 464px;
        height: 528px;

        /* 최상단 위치 */
        z-index: 999;

        /* 중앙 배치 */
        /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
        /* translate는 본인의 크기 기준으로 작동한다. */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* 모달창 디자인 */
        background-color: #f2f2f2;

        border-radius: 8px;
    }

    /* 모달창 내부 X버튼 */
    .close {
        display: block;
        cursor: pointer;
        position: absolute;
        right: 29px;
        top: 29px;
        width: 16.33px;
        height: 16.33px;
    }

    .loginText {
        margin-top: 72px;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #171718;
    }

    .sideText {
        margin-top: 8px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        color: #767676;
    }

    .socialBox {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 344px;
        height: 56px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
        border-radius: 10px;
        cursor: pointer;
        img {
            width: 32px;
            height: 32px;
            margin-right: 24px;
        }
    }
    .google {
        margin-top: 32px;
        background: #ffffff;
    }

    .github {
        margin-top: 16px;
        color: #ffffff;
        background: #000000;
    }

    .kakao {
        margin-top: 16px;
        background: #ffe812;
    }

    .naver {
        margin-top: 16px;
        color: #ffffff;
        background: #57b04b;
    }

    .toggleLog {
        margin-top: 45px;
        font-size: 14px;
        line-height: 17px;
        cursor: pointer;
        color: #767676;
    }

    @media (max-width: 500px) {
        .container {
            width: 100%;
            height: 100%;
        }
    }
`;

const LoginModal = ({ setModalOpen }: { setModalOpen: any }) => {
    // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
    const closeModal = () => {
        setModalOpen(false);
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (e: any) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setModalOpen(false);
            }
        };

        // 이벤트 핸들러 등록
        document.addEventListener("mousedown", handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응

        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener("mousedown", handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });

    const [toggleMainText, setToggleMainText] = useState("로그인");
    const [toggleSubText, setToggleSubText] = useState("회원가입");

    const handleToggleLog = () => {
        if (toggleSubText === "로그인") {
            setToggleMainText("로그인");
            setToggleSubText("회원가입");
        } else if (toggleSubText === "회원가입") {
            setToggleMainText("회원가입");
            setToggleSubText("로그인");
        }
    };

    return (
        <StyledLoginModal>
            <div ref={modalRef} className="container">
                <img onClick={closeModal} alt="close" className="close" src={process.env.PUBLIC_URL + `/assets/close.png`} />
                <div className="loginText">{toggleMainText}</div>
                <div className="sideText">사이더스에서 직접 프로젝트를 생성해보세요!</div>
                <div className="socialBox google">
                    <img alt="google" className="googleImg" src={process.env.PUBLIC_URL + `/assets/Google.png`} />
                    <div>구글로 시작하기&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div className="socialBox github">
                    <img alt="google" className="githubImg" src={process.env.PUBLIC_URL + `/assets/Github.png`} />
                    <div>깃허브로 시작하기</div>
                </div>
                <div className="socialBox kakao">
                    <img alt="google" className="kakaoImg" src={process.env.PUBLIC_URL + `/assets/Kakao.png`} />
                    <div>카카오로 시작하기</div>
                </div>
                <div className="socialBox naver">
                    <img alt="google" className="naverImg" src={process.env.PUBLIC_URL + `/assets/Naver.png`} />
                    <div>네이버로 시작하기</div>
                </div>
                <div onClick={handleToggleLog} className="toggleLog">
                    {toggleSubText}
                </div>
            </div>
        </StyledLoginModal>
    );
};

export default LoginModal;
