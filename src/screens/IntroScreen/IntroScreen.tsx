import TextBlock from "@/components/TextBlock/TextBlock"
import Container from "@/components/ui/Container/Container"
import HighlightText from "@/components/ui/HighlightText/HighlightText"
import styles from "./IntroScreen.module.scss"
import mainImg from "../../assets/images/IntroScreen.png"
import Image from "next/image"
import Button from "@/components/ui/Button/Button"
import TrustPilot from "./TrustPilot"

const IntroScreen = () => {
    return (
        <Container classNames={[styles.container]}>
            <TextBlock 
                header={<span>Enjoy Foods All Over The <HighlightText>World</HighlightText></span>}
                text={<span>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <HighlightText>$20 bonus.</HighlightText></span>}
            >
                <div className={styles.buttons}>
                    <Button type="secondary">Get Started</Button>
                    <Button type="primary" bordered={true}>Go Pro</Button>
                </div>
                <TrustPilot/>
            </TextBlock>
            <Image src={mainImg} className={styles.image} alt=""/>
        </Container>
    )
}

export default IntroScreen
