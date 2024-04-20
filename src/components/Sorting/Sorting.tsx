import CategoryItem from '../CategoryItem/CategoryItem'
import Button from '../ui/Button/Button'
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner'
import RangeInput from '../ui/RangeInput/RangeInput'
import { categoriesDATA } from './Sorting.constants'
import styles from './Sorting.module.scss'

const Sorting = () => {
    return (
        <div className={styles.container}>
            <p className={styles.header}>Category</p>
            <div className={styles.categories}>
                {categoriesDATA && categoriesDATA.length && categoriesDATA.length > 0 ? (
                    categoriesDATA.map(el => <CategoryItem item={el} />)
                ) : (
                    <LoadingSpinner />
                )}
            </div>
            <div className={styles.sortBy}>
                <p className={styles.header}>Sort By</p>
                <div className={styles.content}>
                    <p className={styles.sortByItem}>Recomended</p>
                    <p className={styles.sortByItem}>Most Popular</p>
                    <p className={styles.sortByItem}>Fast delivery</p>
                </div>
            </div>
            <div className={styles.priceSorting}>
                <p className={styles.header}>Price</p>
                <RangeInput
                    defaultValue={50}
                    range={[0, 100, 200, 300, 400, 500]}
                    rangePrefix={'$'}
                />
            </div>
            <div className={styles.btnWrapper}>
                <Button type='secondary'>Apply</Button>
            </div>
        </div>
    )
}

export default Sorting
