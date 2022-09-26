import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "userInfo",

    initialState: {},

    reducers: {
        // recordSearchWord: (state: any, action) => {
        //     const nickNameList = [action.payload, ...state.searchWord];
        //     return {
        //         ...state,
        //         searchWord: nickNameList.filter((element, index) => nickNameList.indexOf(element) === index).splice(0, 5),
        //     };
        // },
        // deleteSearchWord: (state, action) => {
        //     return {
        //         ...state,
        //         searchWord: state.searchWord.filter((it) => it !== action.payload),
        //     };
        // },
        // user: (state, action) => {
        //     return {
        //         ...state,
        //         user: action.payload,
        //     };
        // },
        // addInfo: (state, action) => {
        //     return {
        //         ...state,
        //         userInfo: action.payload,
        //     };
        // },
        // addDetailMatch: (state, action) => {
        //     return {
        //         ...state,
        //         detailMatch: action.payload,
        //     };
        // },
    },
});

// export const {} = userInfo.actions;

export default userInfo.reducer;
