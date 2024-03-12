import { configureStore } from "@reduxjs/toolkit";
import messangerReducer from "../features/messanger/messangerSlice";

const store = configureStore({
    reducer: {
        messanger: messangerReducer,
    },
});

export default store;
