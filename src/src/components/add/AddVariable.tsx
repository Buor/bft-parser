import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../reduxToolkit/store"
import {addVariable} from "../../reduxToolkit/slices/storageSlice"

interface IProps {

}

export const AddVariable: React.FC<IProps> = () => {

    const variables = useSelector((state: RootState) => state.storage.variables)
    const dispatch = useDispatch()

    const [variableName, setVariableName] = useState('')
    const [variableValue, setVariableValue] = useState('')

    const handleClick = () => {
        if(variables.some(variable => variable.name === variableName)) {
            console.log("Ошибка! Переменная с данным названием уже существует!")
            return
        }

        dispatch(addVariable({name: variableName, value: variableValue}))
    }

    return (
        <>
            <section className="add_variable _add_section _vertical">
                <div className="flex">
                    <div className="flex_center _mr">
                        <div className="input_description _center">
                            Название переменной
                        </div>
                        <input id="" type="text" value={variableName}
                               onChange={(e) => setVariableName(e.target.value)}/>
                    </div>
                    <div className="flex_center">
                        <div className="input_description _center">
                            Значение
                        </div>
                        <input id="" type="text" value={variableValue}
                               onChange={(e) => setVariableValue(e.target.value)}/>
                    </div>
                </div>
            </section>
            <button className="btn_add" onClick={handleClick}>Добавить</button>
        </>
    )
}