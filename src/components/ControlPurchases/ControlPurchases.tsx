import { DishOrder } from '@/types/dishes'
import Container from '../ui/Container/Container'
import HighlightText from '../ui/HighlightText/HighlightText'
import styles from './ControlPurchases.module.scss'
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner'
import DishOrderItem from '../DishOrderItem/DishOrderItem'
import Purchases from '../Purchases/Purchases'

const ControlPurchases = ({ data }: { data: DishOrder[] }) => {
    return (
        <Container classNames={[styles.container]}>
            <div className={styles.content}>
                <h2 className={styles.header}>
                    Control <HighlightText>Purchases</HighlightText> Via Dashboard
                </h2>
                <div className={styles.dishesWrapper}>
                    {data && data?.length && data?.length > 0 ? (
                        data.map(el => (
                            <DishOrderItem
                                item={el}
                                key={el.id}
                            />
                        ))
                    ) : (
                        <LoadingSpinner />
                    )}
                </div>
            </div>
            <Purchases/>
        </Container>
    )
}

export default ControlPurchases
