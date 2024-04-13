import { ReactNode } from "react"
import styles from "./TextBlock.module.scss"

const TextBlock = ({header, text, children}: {header: string | ReactNode, text: string | ReactNode, children?: ReactNode}) => {
    return <div className={styles.textBlock}>
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.text}>{text}</p>
        {children ? children : null}
    </div>
}

export default TextBlock
