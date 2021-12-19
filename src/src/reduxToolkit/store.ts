import { configureStore } from '@reduxjs/toolkit'
import storageReducer from "./slices/storageSlice"
import optionReducer from './slices/optionSlice'
import bftTextReducer from './slices/bftTextSlice'

export const store = configureStore({
    reducer: {
        storage: storageReducer,
        addOption: optionReducer,
        bftText: bftTextReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch