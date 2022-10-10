import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLoginModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);

    @media (max-width: 500px) {
        .container {
            width: 100%;
        }
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        /* 모달창 크기 */
        width: 464px;
        height: 352px;

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

    .createNickname {
        margin-top: 32px;
        padding-left: 24px;
        width: 320px;
        height: 56px;
        background: #ffffff;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
    }

    .completeBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-top: 16px;
        cursor: pointer;
        width: 344px;
        height: 56px;
        background: #000000;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
        border-radius: 10px;
    }
`;

const NicknameModal = ({ setCreateNickname }: { setCreateNickname: any }) => {
    const navigate = useNavigate();

    const [getNickname, setGetNickname] = useState();

    console.log(getNickname);

    const createNickname = async () => {
        try {
            await axios.post("/api/signup", { name: getNickname });
        } catch (e) {
            console.log(e);
        }
    };

    // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
    const closeModal = () => {
        setCreateNickname(false);
        navigate("/");
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (e: any) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setCreateNickname(false);
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

    return (
        <StyledLoginModal>
            <div ref={modalRef} className="container">
                <img onClick={closeModal} alt="close" className="close" src={process.env.PUBLIC_URL + `/assets/close.png`} />
                <div className="loginText">프로필 설정</div>
                <div className="sideText">닉네임 설정만 하면 가입 완료!</div>
                <input onChange={(e: any) => setGetNickname(e.target.value)} className="createNickname" placeholder="닉네임을 입력해주세요" />
                <div onClick={createNickname} className="completeBtn">
                    가입 완료
                </div>
            </div>
        </StyledLoginModal>
    );
};

export default NicknameModal;
