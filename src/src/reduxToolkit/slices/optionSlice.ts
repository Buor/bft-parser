import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {TAddOption} from "../../types/storageTypes"

interface IState {
    addOption: TAddOption
}

const initialState: IState = {
    addOption: 'const'
}

const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        'changeOption': (state, action: PayloadAction<TAddOption> ) => {
            state.addOption = action.payload
        }
    }
})

export const {changeOption} = optionSlice.actions
export default optionSlice.reducer