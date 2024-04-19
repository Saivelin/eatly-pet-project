import { ReactNode } from "react"
import styles from "./Input.module.scss"

const Input = (props: any, children : ReactNode) => {
  return (
    <div>
        <input {...props} className={`${props.className} ${styles.input}`}/>
        {children}
    </div>
  )
}

export default Input