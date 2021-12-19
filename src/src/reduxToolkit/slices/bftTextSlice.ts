import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface IState {
    bftText: string
}

const initialState: IState = {
    bftText: ''
}

const bftTextSlice = createSlice({
    name: 'bftText',
    initialState,
    reducers: {
        'changeBftText': (state, action: PayloadAction<string> ) => {
            state.bftText = action.payload
        }
    }
})

export const {changeBftText} = bftTextSlice.actions
export default bftTextSlice.reducer