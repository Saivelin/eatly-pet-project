import { ReactNode } from 'react'
import styles from './Container.module.scss'

const Container = ({ children, classNames }: { children: ReactNode; classNames?: string[] }) => {
    return (
        <div
            className={`${styles.container} ${
                classNames
                    ? classNames.map(el => {
                          return `${el} `
                      })
                    : ''
            }`}
        >
            {children}
        </div>
    )
}

export default Container
