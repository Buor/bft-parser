import React, {ButtonHTMLAttributes} from 'react'
import styles from './Button.module.scss'

export const ButtonUI: React.FC<ButtonHTMLAttributes<any>> = ({children, ...props}) => {

    return (
        <button {...props} className={styles.btn_base}>
            {children}
        </button>
    )
}