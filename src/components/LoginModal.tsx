import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledLoginModal = styled.div`
    .container {
        /* 모달창 크기 */
        width: 500px;
        height: 700px;

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
        border: 1px solid black;
        border-radius: 8px;
    }

    /* 모달창 내부 X버튼 */
    .close {
        position: absolute;
        right: 10px;
        top: 10px;
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

    return (
        <StyledLoginModal>
            <div ref={modalRef} className="container">
                <button onClick={closeModal} className="close">
                    X
                </button>
                <p>모달창입니다.</p>
            </div>
        </StyledLoginModal>
    );
};

export default LoginModal;
