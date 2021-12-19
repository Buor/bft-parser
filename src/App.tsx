import React from 'react'
import './src/styles/styles.scss'
import {Values} from "./src/components/values/Values"
import {Add} from "./src/components/add/Add"
import {Text} from "./src/components/text/Text"
import styles from './App.module.scss'

function App() {

    return (
        <div className={styles.wrapper}>
            <Values/>
            <section className={styles.bottom_section}>
                <Add/>
                <Text/>
            </section>
        </div>
    )
}


export default App
