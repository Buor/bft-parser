import React from 'react'
import './src/styles/styles.css'
import {Values} from "./src/components/values/Values"
import {Add} from "./src/components/add/Add"
import {Text} from "./src/components/text/Text"

// function reducer(state: IState, action: IAction) {
//     console.log('here')
//     switch (action.type) {
//         case 'changeAddOption':
//             return {...initialState, addOption: action.addOption}
//         case 'changeBftText':
//             return {...initialState, bftText: action.bftText}
//         case 'storageAddConstant':
//             return {...initialState, storage: {...state.storage, constants: [...state.storage.constants, action.constantName]}}
//         case 'storageAddVariable':
//             return {...initialState,
//                 storage: {
//                     ...state.storage,
//                     variables: [...state.storage.variables, {name: action.variableName, value: action.variableValue}]
//                 }
//             }
//         case 'storageAddConnection':
//             return {
//                 ...initialState,
//                 storage: {
//                     ...state.storage,
//                     connections: [...state.storage.connections, {
//                         name: action.connectionName,
//                         variable1: action.variable1Name,
//                         variable2: action.variable2Name
//                     }]
//                 }
//             }
//         default:
//             return initialState
//     }
// }

function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Values/>
                <section className="bottom">
                    <Add />
                    <Text />
                </section>
            </div>
        </div>
    )
}


export default App
