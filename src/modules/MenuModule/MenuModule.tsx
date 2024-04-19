import OurDishes from "@/components/OurDishes/OurDishes"
import TopRestaurants from "@/components/TopRestaurants/TopRestaurants"
import Container from "@/components/ui/Container/Container"
import Underline from "@/components/Underline/Underline"
import { OurDishesDATA } from "../MainModule/MainModul.constants"
import FrequentlyQuestions from "@/screens/FrequentlyQuestions/FrequentlyQuestions"

const MenuModule = () => {
  return (
    <main>
        <TopRestaurants viewAllButton={true}/>
        <Container>
            <Underline/>
        </Container>
        <OurDishes data={OurDishesDATA} viewAllButtonTop={true}/>
        <Container>
            <Underline/>
        </Container>
        <FrequentlyQuestions/>
        <Container>
            <Underline/>
        </Container>
    </main>
  )
}

export default MenuModule