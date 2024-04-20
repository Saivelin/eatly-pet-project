import Container from '@/components/ui/Container/Container'
import StockBanner from '@/components/StockBanner/StockBanner'
import styles from './SearchAnything.module.scss'
import Sorting from '@/components/Sorting/Sorting'
import Input from '@/components/ui/Input/Input'
import Radio from '@/components/ui/Radio/Radio'
const SearchAnything = () => {
    return (
        <Container classNames={[styles.container]}>
            <div className={styles.leftSide}>
                <StockBanner
                    withoutInput={true}
                    text='50% off'
                >
                    <span className={styles.weekend}>Weekend</span>
                </StockBanner>
                <div className={styles.searchWrapper}>
                    <Input
                        className={styles.search}
                        placeholder='Search'
                    />
                    <Radio btns={["Food", "Resturent"]}/>
                </div>
            </div>
            <Sorting />
        </Container>
    )
}

export default SearchAnything
