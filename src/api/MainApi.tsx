import axios from "axios";

const MainApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-type": "application/json",
    },
});

//메인페이지
export const getProject = async () => {
    try {
        const response = await MainApi.get("api/posts?page=1&size=30");
        console.log(response.data.content);
        return response.data.content;
    } catch (e) {
        console.log(e);
    }
};
