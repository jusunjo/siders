import Editor from "../components/Editor";
import { useState } from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";

const StyledCreateProject = styled.div``;

const CreateProject = () => {
    const [content, setContent] = useState();
    const [startDate, setStartDate] = useState(new Date());

    return (
        <StyledCreateProject>
            <Calendar startDate={startDate} setStartDate={setStartDate} />
            <Editor setContent={setContent} placeholder={"당신의 프로젝트를 소개해주세요!"} value={content} />
        </StyledCreateProject>
    );
};

export default CreateProject;
