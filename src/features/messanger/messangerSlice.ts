import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    name: string;
    color: string;
    id: number;
}

type Message = {
    message: string;
    sender: number;
}

type initialStateType = {
    messages: Message[];
    users: User[];
    currentUser: number;
}

const initialState: initialStateType = {
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
        addMessage: (state, action: PayloadAction<string>) => {
            const message: Message = {
                message: action.payload,
                sender: state.currentUser,
            };
            state.messages.push(message);
        },
        addUser: (state, action: PayloadAction<User>) => {
            const user = {
                name: action.payload.name,
                color: action.payload.color,
                id: state.users.length,
            };
            console.log(user)
            state.users.push(user);
        },
        changeCurrentUser: (state, action: PayloadAction<number>) => {
            state.currentUser = action.payload;
        },
        deleteUser: (state, action: PayloadAction<number>) => {
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
