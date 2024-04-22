import { Dish } from '@/types/dishes'
import styles from './DishesList.module.scss'
import DishesCard from '../DishesCard/DishesCard'

const DishesList = ({ data, header }: { data: Dish[]; header?: string }) => {
    return (
        <div className={styles.container}>
            {header && header.length > 0 ? <h5 className={styles.header}>{header}</h5> : null}
            <div className={styles.content}>
                {data && data.length > 0
                    ? data.map(el => (
                          <DishesCard
                              item={el}
                              key={el.id}
                          />
                      ))
                    : null}
            </div>
        </div>
    )
}

export default DishesList
