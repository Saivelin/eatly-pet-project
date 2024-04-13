import { Dish } from '@/types/dishes'
import Container from '../ui/Container/Container'
import HighlightText from '../ui/HighlightText/HighlightText'
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner'
import DishesCard from '../DishesCard/DishesCard'
import styles from "./OurDishes.module.scss"

const OurDishes = ({data} : {data : Dish[]}) => {
    return (
        <Container>
            <h2>
                Our Top <HighlightText>Dishes</HighlightText>
            </h2>
            <div className={styles.container}>
                {
                    data && data?.length && data?.length > 0 ? 
                        data.map((el, i)=>(
                            <DishesCard item={el}/>
                        ))
                    : <LoadingSpinner/>
                }
            </div>
        </Container>
    )
}

export default OurDishes
