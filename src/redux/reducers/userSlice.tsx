import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchUsers } from "../actions/userActions"
import { IUser, UserState } from "../types"

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    // reducers: {
    //     usersFetching(state) {
    //         state.isLoading = true
    //     },
    //     userFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //         state.isLoading = false
    //         state.users = action.payload
    //         state.error = ''
    //     },
    //     userFetchingError(state, action: PayloadAction<string>) {
    //         state.isLoading = false
    //         state.error = action.payload
    //     }
    // },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.users = action.payload
            state.error = ''
        },
        [fetchUsers.pending.type]: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})

export default userSlice.reducer