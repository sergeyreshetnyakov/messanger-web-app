import { configureStore } from "@reduxjs/toolkit";
import messangerReducer from "../features/messanger/messangerSlice";

const store = configureStore({
    reducer: {
        messanger: messangerReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 