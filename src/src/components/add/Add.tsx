import React from 'react'
import {AddConst} from "./AddConst"
import {AddVariable} from "./AddVariable"
import {AddConnection} from "./AddConnection"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../reduxToolkit/store"
import {TAddOption} from "../../types/storageTypes"
import {changeOption} from "../../reduxToolkit/slices/optionSlice"
import styles from './Add.module.scss'

interface IProps {

}

export const Add: React.FC<IProps> = React.memo(() => {

    const addOption = useSelector((state: RootState) => state.addOption.addOption)
    const dispatch = useDispatch()

    const handleChange = (value: TAddOption) => {
        dispatch(changeOption(value))
    }

    return (
        <>
            <section className={styles.section_add}>
                <div className={styles.left_bottom_head}>
                    <div className="title">Добавление</div>
                    <select id="select_variable_type" value={addOption} onChange={(e) => handleChange(e.target.value as TAddOption)}>
                        <option value="const">Константа</option>
                        <option value="variable">Переменная</option>
                        <option value="connection">Связь</option>
                    </select>
                </div>

                {
                    addOption === 'const' ? <AddConst/> :
                        addOption === 'variable' ? <AddVariable/> :
                            addOption === 'connection' ? <AddConnection/> : null
                }

            </section>
        </>

    )
})