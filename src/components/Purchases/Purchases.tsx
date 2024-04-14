import PurchasesItem from '../PurchasesItem/PurchasesItem'
import SelectCustom from '../ui/SelectCustom/SelectCustom'
import styles from './Purchases.module.scss'

const options = [
    { label: 'This year', value: 'year' },
    { label: 'This month', value: 'month' },
    { label: 'This day', value: 'day' },
]

const Purchases = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h3 className={styles.header}>Purchases</h3>
                <SelectCustom options={options} />
            </div>
            <PurchasesItem/>
        </div>
    )
}

export default Purchases
