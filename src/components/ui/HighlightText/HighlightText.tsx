import { ReactNode } from "react"
import styles from "./HighlightText.module.scss"

const HighlightText = ({children} : {children: ReactNode}) => {
    return <span className={styles.highlightText}>{children}</span>
}

export default HighlightText
