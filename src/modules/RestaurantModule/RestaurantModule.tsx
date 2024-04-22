import RestaurantCard from '@/components/RestaurantCard/RestaurantCard'
import { RestaurantCardsDATA } from '@/components/RestaurantCardsWrapper/mockData'
import Container from '@/components/ui/Container/Container'
import styles from "./RestaurantModule.module.scss"
import DishesList from '@/components/DishesList/DishesList'
import { OurDishesDATA } from '../MainModule/MainModul.constants'
import FrequentlyQuestions from '@/screens/FrequentlyQuestions/FrequentlyQuestions'
import Underline from '@/components/Underline/Underline'

const RestaurantModule = () => {
    return (
        <main>
            <Container classNames={[styles.container]}>
                <RestaurantCard item={RestaurantCardsDATA[0]} classNames={[styles.restaurantPreview]} inlineAbout={true} withTags={false}/>
                <DishesList header='Popular 🔥' data={OurDishesDATA}/>
                <DishesList header='Chicken Vegetables' data={[OurDishesDATA[0], OurDishesDATA[1], OurDishesDATA[2], OurDishesDATA[3], OurDishesDATA[2]]}/>
                <Container>
                    <Underline/>
                </Container>
                <FrequentlyQuestions/>
            </Container>
        </main>
    )
}

export default RestaurantModule
