import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "userInfo",
    initialState: {
        userInfo: [],
    },

    reducers: {
        getUserInformation: (state, action) => {
            return {
                ...state,
                userInfo: action.payload,
            };
        },
    },
});

export const { getUserInformation } = userInfo.actions;

export default userInfo.reducer;
