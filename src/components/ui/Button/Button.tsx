import { ReactNode } from 'react'
import styles from "./Button.module.scss"

type ButtonsType = 'primary' | 'secondary'

const Button = ({children, type} : {children: ReactNode, type: ButtonsType}) => {
    return (
        <button
            className={
                `${styles.button} ${styles[type]}`
            }
        >
            {children}
        </button>
    )
}

export default Button
