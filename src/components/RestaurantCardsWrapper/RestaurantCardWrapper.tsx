import { RestaurantCardType } from "@/types/restaurant"
import Container from "../ui/Container/Container"
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner"
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import styles from "./RestaurantCardWrapper.module.scss"

const RestaurantCardWrapper = ({data} : {data: RestaurantCardType[]}) => {
    return <Container classNames={[styles.container]}>
        {
            data && data.length > 0 ? 
                data.map((el, i)=>{
                    return (
                        <RestaurantCard item={el}/>
                    )
                })
            : <LoadingSpinner/>
        }
    </Container>
}

export default RestaurantCardWrapper
