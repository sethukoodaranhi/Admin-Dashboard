import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        SetUserLists: (state, action) => {
            state.users = action.payload
        },
        setAddUsers: (state, action) => {
            state.users = [action.payload, ...state.users]
        }


    }
})

export const { SetUserLists,setAddUsers } = usersSlice.actions

export default usersSlice.reducer