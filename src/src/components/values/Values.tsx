import React from 'react'
import styles from './Values.module.scss'

export const Values: React.FC = () => {
    return (
        <section className={styles.values}>
            <div className="constants">
                <div className="title">Константы</div>
                <div className={styles.list}></div>
            </div>
            <div className="variables">
                <div className="title">Переменные</div>
                <div className={styles.list}></div>
            </div>
            <div className="connections">
                <div className="title">Связи</div>
                <div className={styles.list}></div>
            </div>
        </section>
    )
}