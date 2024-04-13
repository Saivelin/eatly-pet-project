import { RestaurantCardsDATA } from "../RestaurantCardsWrapper/mockData"
import RestaurantCardWrapper from "../RestaurantCardsWrapper/RestaurantCardWrapper"
import Container from "../ui/Container/Container"
import HighlightText from "../ui/HighlightText/HighlightText"
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner"
import styles from "./TopRestaurants.module.scss"

const TopRestaurants = () => {
    return (
        <Container classNames={[styles.container]}>
            <h2 className={styles.header}>Our Top <HighlightText>Restaurants</HighlightText></h2>
            <RestaurantCardWrapper data={RestaurantCardsDATA}/>
        </Container>
    )
}

export default TopRestaurants
