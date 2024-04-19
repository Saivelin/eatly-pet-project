import { Dish } from '@/types/dishes'
import Container from '../ui/Container/Container'
import HighlightText from '../ui/HighlightText/HighlightText'
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner'
import DishesCard from '../DishesCard/DishesCard'
import styles from './OurDishes.module.scss'
import ViewAllButton from '../ui/ViewAllButton/ViewAllButton'

const OurDishes = ({ data, viewAllButtonTop = false }: { data: Dish[], viewAllButtonTop?: boolean }) => {
    return (
        <Container classNames={[styles.Wrapper]}>
            {viewAllButtonTop === true ? (
                <div className={styles.head}>
                    <h2 className={styles.header}>
                        Our Top <HighlightText>Dishes</HighlightText>
                    </h2>
                    <ViewAllButton />
                </div>
            ) : (
                <h2 className={styles.header}>
                    Our Top <HighlightText>Dishes</HighlightText>
                </h2>
            )}
            <div className={styles.container}>
                {data && data?.length && data?.length > 0 ? (
                    data.map((el, i) => <DishesCard item={el} />)
                ) : (
                    <LoadingSpinner />
                )}
            </div>
            {viewAllButtonTop === false ? 
            <div className={styles.viewAll}>
                <p>
                    View All{' '}
                    <svg
                        width='19'
                        height='19'
                        viewBox='0 0 19 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M2 9.90186H17.8041'
                            stroke='#ACADB9'
                            strokeWidth='2.25773'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M9.90234 2L17.8044 9.90206L9.90234 17.8041'
                            stroke='#ACADB9'
                            strokeWidth='2.25773'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </p>
            </div>
            : null}
        </Container>
    )
}

export default OurDishes
