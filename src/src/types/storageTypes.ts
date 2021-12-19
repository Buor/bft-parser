export type TAddOption = 'const' | 'variable' | 'connection'

export type IConst = string

export interface IVariable {
    name: string
    value: string
}

export interface IConnection {
    name: string
    variable1: IVariable
    variable2: IVariable
}

export interface IStorage {
    constants: IConst[]
    variables: IVariable[]
    connections: IConnection[]
}