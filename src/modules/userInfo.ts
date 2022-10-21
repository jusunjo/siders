import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "userInfo",
    initialState: {
        userInfo: [],
        userToken: "",
    },

    reducers: {
        getUserInformation: (state, action) => {
            return {
                ...state,
                userInfo: action.payload,
            };
        },
        getUserToken: (state, action) => {
            return {
                ...state,
                userToken: action.payload,
            };
        },
    },
});

export const { getUserInformation, getUserToken } = userInfo.actions;

export default userInfo.reducer;
