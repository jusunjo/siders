import Editor from "../components/Editor";
import React, { Component, useState } from "react";
import styled from "styled-components";

const CreateProject = () => {
    const [content, setContent] = useState();

    console.log(content);
    return (
        <div>
            <Editor setContent={setContent} placeholder={"당신의 프로젝트를 소개해주세요!"} value={content} />
        </div>
    );
};

export default CreateProject;
