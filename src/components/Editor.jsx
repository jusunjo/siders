import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const StyledEditor = styled.div``;

const toolbarOptions = [
    // ["link", "image"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "align", "blockquote", "list", "bullet", "indent", "background", "color", "link", "image", "video", "width"];

const modules = {
    toolbar: {
        container: toolbarOptions,
    },
};

const Editor = ({ placeholder, value, setContent }) => {
    const handleText = (value) => {
        console.log(value);
        setContent(value);
    };

    console.log(value);
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
