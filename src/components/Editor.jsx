import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const StyledEditor = styled.div`
    /* height: 1400px; */
    z-index: -1;
`;

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
];

const modules = {
    toolbar: [
        //[{ 'font': [] }],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],

        [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
        ["clean"],
    ],
};

const Editor = ({ placeholder, value, setContent }) => {
    const handleText = (value) => {
        setContent(value);
    };

    return (
        <StyledEditor>
            <ReactQuill
                style={{ height: "350px", width: "100%", backgroundColor: "white" }}
                placeholder={placeholder}
                value={value || ""}
                onChange={handleText}
                theme="snow"
                modules={modules}
                formats={formats}
            ></ReactQuill>
        </StyledEditor>
    );
};

export default Editor;
