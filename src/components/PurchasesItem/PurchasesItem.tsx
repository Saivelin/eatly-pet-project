import { ReactNode } from 'react'
import Wallet from '../icons/Wallet'
import styles from './PurchasesItem.module.scss'

interface IProps {
    icon: ReactNode
    header: string
    subtitle: string
    cost: number
    progress: number
    rgbColor: string
}

const PurchasesItem = (props: IProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}>
                    {props.icon}
                    <div className={styles.info_content}>
                        <p className={styles.header}>{props.header}</p>
                        <p className={styles.subtitle}>{props.subtitle}</p>
                    </div>
                </div>
                <p className={styles.cost}>${props.cost}</p>
            </div>

            <div
                className={styles.scale}
                style={{ backgroundColor: `rgba` + `${props.rgbColor.split(')'[0])} 0.2)`.split('rgb')[1] }}
            >
                <div
                    className={styles.scaleInner}
                    style={{ width: `${props.progress}%`, backgroundColor: `${props.rgbColor}` }}
                ></div>
            </div>
        </div>
    )
}

export default PurchasesItem
