import Container from '@/components/ui/Container/Container'
import MapYandex from './MapYandex/MapYandex'
import { DishesCart } from '../MainModule/MainModul.constants'
import CartList from '@/components/CartList/CartList'
import styles from './OrderModule.module.scss'
import Input from '@/components/ui/Input/Input'
import Button from '@/components/ui/Button/Button'
import StockBanner from '@/components/StockBanner/StockBanner'

const OrderModule = () => {
    return (
        <Container>
            <MapYandex />
            <div className={styles.wrapper}>
                <CartList data={DishesCart} />
                <div className={styles.coupon}>
                    <Input placeholder="Apply Coupon"/>
                    <Button type='secondary'>Apply</Button>
                </div>
                <div className={styles.amount}>
                    <div className={styles.item}>
                        <p className={styles.title}>Subtotal</p>
                        <p className={styles.cost}>$58.96</p>
                    </div>
                    <div className={styles.item}>
                        <p className={styles.title}>Subtotal</p>
                        <p className={styles.cost}>$3.59</p>
                    </div>
                    <div className={`${styles.main}`}>
                        <p className={styles.title}>Total</p>
                        <p className={styles.cost}>$62.55</p>
                    </div>
                </div>
                <Button type='secondary'>Review Payment</Button>
            </div>
            <StockBanner/>
        </Container>
    )
}

export default OrderModule
