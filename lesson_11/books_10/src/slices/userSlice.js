import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: ["user1", "user2", "user3"],
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            // state.users = { ...state.users, ...action.payload };
            state.users.push(action.payload);
        },
        deleteUsers: (state, action) => {
            state.users = state.users.filter((user, index) => index !== action.payload);
        },
    },
});

export const { setUsers, deleteUsers } = userSlice.actions;

export default userSlice.reducer;