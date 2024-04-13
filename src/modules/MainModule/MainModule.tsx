import InfoBanner from "@/components/InfoBanner/InfoBanner"
import IntroScreen from "@/screens/IntroScreen/IntroScreen"
import { InfoBannerDATA } from "./MainModul.constants"
import PremiumQuality from "@/screens/PremiumQuality/PremiumQuality"
import Underline from "@/components/Underline/Underline"
import TopRestaurants from "@/components/TopRestaurants/TopRestaurants"
import Container from "@/components/ui/Container/Container"

const MainModule = () => {
    return <main>
        <IntroScreen/>
        <InfoBanner items={InfoBannerDATA}/>
        <PremiumQuality/>
        <Container>
            <Underline/>
        </Container>
        <TopRestaurants/>
        <Container>
            <Underline/>
        </Container>
    </main>
}

export default MainModule
