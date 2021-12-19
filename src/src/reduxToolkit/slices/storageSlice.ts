import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IStorage, IVariable} from "../../types/storageTypes"

const initialState: IStorage = {
    constants: [],
    connections: [],
    variables: []
}

const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        // TODO implement constants logic
        // addConst: (state, action: PayloadAction<IConst>) => {
        //     state.constants.push(action.payload)
        // },
        // removeConst: (state, action: PayloadAction<IConst> )
        addVariable: (state, action: PayloadAction<IVariable>) => {
            state.variables.push(action.payload)
        },
        removeVariable: (state, action: PayloadAction<string>) => {
            state.variables = state.variables.filter(variable => variable.name !== action.payload)
        },

    }
})

export const {addVariable, removeVariable} = storageSlice.actions
export default storageSlice.reducer