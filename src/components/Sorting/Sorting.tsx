import CategoryItem from '../CategoryItem/CategoryItem'
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner'
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
        </div>
    )
}

export default Sorting
