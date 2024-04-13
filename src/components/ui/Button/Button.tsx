import { ReactNode } from 'react'
import styles from "./Button.module.scss"

type ButtonsType = 'primary' | 'secondary'

const Button = ({children, type, bordered=false} : {children: ReactNode, type: ButtonsType, bordered?: boolean}) => {
    return (
        <button
            className={
                `${styles.button} ${styles[type]} ${bordered ? styles[`${type}-bordered`] : ''}`
            }
        >
            {children}
        </button>
    )
}

export default Button
