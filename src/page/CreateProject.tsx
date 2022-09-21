import Editor from "../components/Editor";
import React, { Component, useState } from "react";
import styled from "styled-components";

const StyledCreateProject = styled.div``;

const CreateProject = () => {
    const [content, setContent] = useState();

    console.log(content);
    return (
        <StyledCreateProject>
            <div className="aaa">
                123123<strong>ㅁㄴㅁㄴㅇㅁㄴㅇㅋㅌㅊㅌㅋㅊ</strong>ㅁㄴㅇㅁㄴㅇ
            </div>
            <Editor setContent={setContent} placeholder={"당신의 프로젝트를 소개해주세요!"} value={content} />
        </StyledCreateProject>
    );
};

export default CreateProject;
