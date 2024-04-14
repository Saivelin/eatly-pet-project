import Safe from '../icons/Safe'
import Wallet from '../icons/Wallet'
import PurchasesItem from '../PurchasesItem/PurchasesItem'
import SelectCustom from '../ui/SelectCustom/SelectCustom'
import styles from './Purchases.module.scss'

const options = [
    { label: 'This year', value: 'year' },
    { label: 'This month', value: 'month' },
    { label: 'This day', value: 'day' },
]

const DATA = [
    {
        icon: <Wallet/>,
        header: "Expense",
        subtitle: "Increased By 10%",
        cost: 409.00,
        progress: 67,
        rgbColor: "rgb(108, 95, 188)"
    },
    {
        icon: <Safe/>,
        header: "Vocher Usage",
        subtitle: "Increased By 5%",
        cost: 45.78,
        progress: 59,
        rgbColor: "rgb(251, 173, 24)"
    },
]

const Purchases = () => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <h3 className={styles.header}>Purchases</h3>
                    <SelectCustom options={options} />
                </div>
                <div className={styles.itemsWrapper}>
                    <PurchasesItem {...DATA[0]}/>
                    <PurchasesItem {...DATA[1]}/>
                </div>
            </div>
        </div>
    )
}

export default Purchases
