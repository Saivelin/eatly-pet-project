import Container from "@/components/ui/Container/Container"
import StockBanner from "@/components/StockBanner/StockBanner"
import styles from "./SearchAnything.module.scss"
import Sorting from "@/components/Sorting/Sorting"
const SearchAnything = () => {
  return (
    <Container classNames={[styles.container]}>
        <StockBanner withoutInput={true} text="50% off">
            <span className={styles.weekend}>Weekend</span>
        </StockBanner>
        <Sorting/>
    </Container>
  )
}

export default SearchAnything