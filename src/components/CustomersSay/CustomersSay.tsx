import Container from '../ui/Container/Container'
import HighlightText from '../ui/HighlightText/HighlightText'
import styles from './CustomersSay.module.scss'
import ReviewsSlider from './ReviewsSlider/ReviewsSlider'

const CustomersSay = () => {
    return (
        <Container classNames={[styles.container]}>
            <h2 className={styles.header}>
                <HighlightText>Customer</HighlightText> Say
            </h2>
            <div className={styles.content}>
                <ReviewsSlider/>
            </div>
        </Container>
    )
}

export default CustomersSay
