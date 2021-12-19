import React from 'react'
import {ButtonUI} from "../../uiComponents/button/ButtonUI"
import styles from './Add.module.scss'

export const AddConnection: React.FC = () => {



    return (
        <>
            <section className={styles._add_section}>
                <div className="flex _column">
                    <div className={styles.input_description + " " + styles._center}>Название связи</div>
                    <input type="text" className="_mb"/>
                    <div className="flex">
                        <div className="flex_center _mr">
                            <div className={styles.input_description + " " + styles._center}>
                                Переменная 1
                            </div>
                            <select></select>
                        </div>
                        <div className="flex_center">
                            <div className={styles.input_description + " " + styles._center}>
                                Переменная 2
                            </div>
                            <select></select>
                        </div>
                    </div>
                </div>

            </section>
            <ButtonUI>Добавить</ButtonUI>
        </>
    )
}