import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        {
            message: "hello",
            sender: 0,
        },
        {
            message: "hi",
            sender: 1,
        },
    ],
    users: [
        {
            name: "oleg",
            color: "#43cc58",
            id: 0,
        },
        {
            name: "alex",
            color: "#cc4348",
            id: 1,
        },
    ],
    currentUser: 0,
};

const messangerSlice = createSlice({
    name: "messanger",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            const message = {
                message: action.payload,
                sender: state.currentUser,
            };
            state.messages.push(message);
        },
        addUser: (state, action) => {
            const user = {
                name: action.payload.name,
                color: action.payload.color.hex,
                id: state.users.length,
            };
            console.log(user)
            state.users.push(user);
        },
        changeCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(
                (e) => e.id !== action.payload
            )
            state.messages = state.messages.filter(
                (e) => e.sender !== action.payload
            )
        }
    },
});

export const { addMessage, changeCurrentUser, addUser, deleteUser } = messangerSlice.actions;
export default messangerSlice.reducer;
