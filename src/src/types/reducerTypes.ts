import {IStorage, TAddOption} from "./storageTypes"

export interface IState {
    addOption: TAddOption
    bftText: string
    storage: IStorage
}

interface IActionAddOption {
    type: 'changeAddOption'
    addOption: TAddOption
}

interface IActionChangeBftText {
    type: 'changeBftText'
    bftText: string
}

////Storage actions
//Constant
interface IActionStorageAddConstant {
    type: 'storageAddConstant'
    constantName: string
}

interface IActionStorageDeleteConstant {
    type: 'storageDeleteConstant'
    constantName: string
}

//Variable
interface IActionStorageAddVariable {
    type: 'storageAddVariable'
    variableName: string,
    variableValue: string
}

interface IActionStorageDeleteVariable {
    type: 'storageDeleteVariable'
    variableName: string
}

//Connection
interface IActionStorageAddConnection {
    type: 'storageAddConnection'
    connectionName: string
    variable1Name: string
    variable2Name: string
}

interface IActionStorageDeleteConnection {
    type: 'storageDeleteConnection'
    connectionName: string
    variable1Name: string
    variable2Name: string
}


export type IAction = IActionAddOption
    | IActionChangeBftText
    | IActionStorageAddConstant
    | IActionStorageDeleteConstant
    | IActionStorageAddVariable
    | IActionStorageDeleteVariable
    | IActionStorageAddConnection
    | IActionStorageDeleteConnection