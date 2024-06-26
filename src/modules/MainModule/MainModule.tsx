import InfoBanner from '@/components/InfoBanner/InfoBanner'
import IntroScreen from '@/screens/IntroScreen/IntroScreen'
import { DishesOrdered, InfoBannerDATA, OurDishesDATA } from './MainModul.constants'
import PremiumQuality from '@/screens/PremiumQuality/PremiumQuality'
import Underline from '@/components/Underline/Underline'
import TopRestaurants from '@/components/TopRestaurants/TopRestaurants'
import Container from '@/components/ui/Container/Container'
import OurDishes from '@/components/OurDishes/OurDishes'
import ControlPurchases from '@/components/ControlPurchases/ControlPurchases'
import CustomersSay from '@/components/CustomersSay/CustomersSay'
import StockBanner from '@/components/StockBanner/StockBanner'

const MainModule = () => {
    return (
        <main>
            <IntroScreen />
            <InfoBanner items={InfoBannerDATA} />
            <PremiumQuality />
            <Container>
                <Underline />
            </Container>
            <TopRestaurants />
            <Container>
                <Underline />
            </Container>
            <OurDishes data={OurDishesDATA} />
            <Container>
                <Underline />
            </Container>
            <ControlPurchases data={DishesOrdered} />
            <Container>
                <Underline />
            </Container>
            <CustomersSay />
            <Container>
                <StockBanner />
            </Container>
        </main>
    )
}

export default MainModule
