import InfoBanner from "@/components/InfoBanner/InfoBanner"
import IntroScreen from "@/screens/IntroScreen/IntroScreen"
import { InfoBannerDATA } from "./MainModul.constants"
import PremiumQuality from "@/screens/PremiumQuality/PremiumQuality"

const MainModule = () => {
    return <main>
        <IntroScreen/>
        <InfoBanner items={InfoBannerDATA}/>
        <PremiumQuality/>
    </main>
}

export default MainModule
