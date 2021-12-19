import React, {useState} from 'react'
import {ButtonUI} from "../../uiComponents/button/ButtonUI"
import styles from './Add.module.scss'

interface IProps {

}

export const AddConst: React.FC<IProps> = () => {

    const [constName, setConstName] = useState('')

    const handleClick = () => {
        // if(constants.includes(constName))
        //TODO implement
    }

    return (
        <>
            <section className="add_constant _add_section">
                <div className={styles.input_description + " " + styles._center}>Введите константу</div>
                <input type="text" value={constName} onChange={(e) => setConstName(e.target.value)}/>
            </section>
            <ButtonUI onClick={handleClick}>Добавить</ButtonUI>
        </>
    )
}